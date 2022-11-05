import users from '../data/users.js'

const isAdmin = (req, res, next) => {
    
    const { callerId } = req.body

    if(callerId && !isNaN(callerId)) 

        users.find(user => user.id === callerId)?.permissao === 'ADMIN' ? next() : res.send(401, "Não Autorizado!")
     
    else{

        res.send(400, 'O parâmetro callerId deve ser númerico!')
        next()

    }
    next()
    
}


export default isAdmin