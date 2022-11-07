import users from '../data/users.js'
import userValidation from '../utils/userValidation.js'

const getUsers = (req, res) => users.length > 0 ? res.status(200).json(users) : res.status(200).json({ users: null})

const getUser = (req, res) => {

    const {id} = req.params

    if(!id) res.status(404).json({msg:'Informe o parâmetro id!'})

    if(!users || users.length === 0) res.status(200).json({users:null})

    const filteredUser = users.filter(user => user.id === +id)
    filteredUser.length > 0 ? res.status(200).json({users:filteredUser}) : res.status(200).json({users: null})
}

const createUser = (req, res) => {

    const {id, nome, empresa, permissao} = req.body

    if(!id) return res.status(404).json({msg:'Informe o parâmetro id!'})

    const statusValidation = userValidation(req.body)

    if(statusValidation === true){

        const searchedUser = users.find(user => +id === user.id)

        if(searchedUser !== undefined)  return res.status(404).json({msg:'Usuário já encontrado no sistema!'})

        const newUser = {
            id: +id,
            nome,
            empresa,
            permissao,
        }

        users.push(newUser)

        res.status(201).json({msg:'Usuário cadastrado com sucesso!'})

    }

    res.status(statusValidation.status).json({msg:statusValidation.msg})

}

const updateUser = (req, res) => {

    const {nome, empresa, permissao} = req.body
    const {id} = req.params

    const statusValidation = userValidation(req.body)

    if(statusValidation === true){

        const searchedUser = users.find(user => +id === user.id)

        if(searchedUser === undefined)  return res.status(404).json({msg:'Usuário não encontrado no sistema!'})

        for (const user of users) {
            if (user.id === +id) {
                user.nome = nome,
                user.empresa = empresa,
                user.permissao = permissao

              break
            }
          }

        res.status(201).json({msg:'Usuário atualizado com sucesso!'})

    }

    res.status(statusValidation.status).json({msg:statusValidation.msg})

}

const deleteUser = (req, res) => {

    const {callerId} = req.body
    const {id} = req.params

    if(!id) res.status(404).json({msg:'Informe o parâmetro id!'})
    if(!callerId) res.status(404).json({msg:'Informe o parâmetro callerId!'})
    if(callerId === id ) res.status(404).json({msg:'Não é possível excluir si mesmo!'})
    
    const searchedUser = users.find(user => +id === user.id)

    if(searchedUser === undefined) res.status(404).json({msg:'Usuário não encontrado no sistema!'})

    const indexOfObject = users.findIndex(user => user.id === +id)

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