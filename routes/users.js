import express from 'express'
import {getUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/UserController.js'
import isAdmin from '../middleware/isAdmin.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/:userId', getUser)
router.route('/').patch(isAdmin, updateUser)
router.route('/').post(isAdmin, createUser)
router.route('/').delete(isAdmin, deleteUser)

export default router