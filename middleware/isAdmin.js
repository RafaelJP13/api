import users from '../data/users.js'

const isAdmin = (req, res, next) => {
    const { callerId } = req.params;

    console.log(callerId)

    next();
}


export default isAdmin