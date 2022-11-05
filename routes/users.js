import express from 'express'
import {getUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/UserController.js'
import isAdmin from '../middleware/isAdmin.js'

const router = express()


router.get('/', getUsers)
router.get('/:userId', getUser)
router.post('/:callerId', createUser)
router.patch('/', updateUser)
router.delete('/', deleteUser)

export default router