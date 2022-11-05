import users from '../data/users.js'

const getUsers = (req, res) => users.length > 0 ? res.status(200).json(users) : res.status(200).json({ users: null})

const getUser = (req, res) => {

    const {userId} = req.params

    if(!userId) res.status(404).json('Informe o parametro userId!')

    if(!users || users.length === 0) res.status(200).json({users:null})

    const filteredUser = users.filter(user => user.id === +userId)
    filteredUser.length > 0 ? res.status(200).json({users:filteredUser}) : res.status(200).json({users: null})
}

const createUser = (req, res) => {

 
}

const updateUser = (req, res) => {


}

const deleteUser = (req, res) => {


}

export{
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
}