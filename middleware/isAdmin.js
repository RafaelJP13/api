import users from '../data/users.js'

const isAdmin = (req, res, next) => {
    
    const { callerId } = req.body

    if(!callerId) res.status(404).json({msg:'Informe o parametro callerId!'})
    if(isNaN(callerId)) res.status(404).json({msg:'O parametro callerId deve ser númerico!'})

    const user = users.find(user => user.id == callerId)

    if(!user) res.status(404).json({msg:'Não Autorizado!'})
    
    user.permissao === 'ADMIN' ? next() : res.status(401).json({msg:"Não Autorizado!"})

}

export default isAdmin