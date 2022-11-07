import users from '../data/users.js'

const getUsers = (req, res) => users.length > 0 ? res.status(200).json(users) : res.status(200).json({ users: null})

const getUser = (req, res) => {

    const {id} = req.params

    if(!id) res.status(404).json({msg:'Informe o parametro id!'})

    if(!users || users.length === 0) res.status(200).json({users:null})

    const filteredUser = users.filter(user => user.id === +id)
    filteredUser.length > 0 ? res.status(200).json({users:filteredUser}) : res.status(200).json({users: null})
}

const createUser = (req, res) => {

    const {id, nome, empresa, permissao, callerId} = req.body

    if(!callerId) res.status(404).json({msg:'Informe o parametro callerId!'})
    if(!id ) res.status(404).json({msg:'Informe o parametro id!'})
    if(!nome) res.status(404).json({msg:'Informe o parametro nome!'})
    if(!empresa) res.status(404).json({msg:'Informe o parametro empresa!'})
    if(!permissao) res.status(404).json({msg:'Informe o parametro permissao!'})
    if(isNaN(id)) res.status(404).json({msg:'O parametro id deve ser númerico!'})
    if(typeof nome !== 'string') res.status(404).json({msg:'O parametro nome deve ser uma string!'})
    if(typeof empresa !== 'string') res.status(404).json({msg:'O parametro empresa deve ser uma string!'})
    if(typeof permissao !== 'string') res.status(404).json({msg:'O parametro permissao deve ser uma string!'})
    if(permissao !== 'ADMIN' && permissao !== 'USER')  res.status(404).json({msg:'O parametro permissao deve ser existente no sistema!'})

    const searchedUser = users.find(user => id == user.id)

    if(searchedUser !== undefined)  res.status(404).json({msg:'Usuário já encontrado no sistema!'})

    const newUser = {
        id,
        nome,
        empresa,
        permissao,
    }

    users.push(newUser)
}

const updateUser = (req, res) => {

    // const {id, nome, empresa, permissao, callerId} = req.body

    // if(!id) res.status(404).json({msg:'Informe o parametro id!'})

    // const searchedUser = users.find(user => id == user.id)

    // if(searchedUser === undefined) res.status(404).json({msg:'Usuário não encontrado no sistema!'})

}

const deleteUser = (req, res) => {

    const {callerId} = req.body
    const {id} = req.params

    if(!id) res.status(404).json({msg:'Informe o parametro id!'})
    if(isNaN(id)) res.status(404).json({msg:'O parametro id deve ser númerico!'})
    if(!callerId) res.status(404).json({msg:'Informe o parametro callerId!'})
    if(callerId === id ) res.status(404).json({msg:'Não é possível excluir si mesmo!'})
    
    const searchedUser = users.find(user => id == user.id)

    if(searchedUser === undefined) res.status(404).json({msg:'Usuário não encontrado no sistema!'})

    const indexOfObject = users.findIndex(user => user.id == id)

    if(indexOfObject >= 0) users.splice(indexOfObject, 1);
      
    res.status(200).json({msg: 'Usuário removido com sucesso!'})

}

export{
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}