import express from 'express'
import {getUsers, getUser, createUser, updateUser, deleteUser} from '../controllers/UserController.js'
import isAdmin from '../middleware/isAdmin.js'

const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUser)
router.route('/').post(isAdmin, createUser)
router.route('/:id').patch(isAdmin, updateUser)
router.route('/:id').delete(isAdmin, deleteUser)

export default router