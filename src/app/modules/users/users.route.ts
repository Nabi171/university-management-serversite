// import express from 'express'
// import usersController from './users.controller'

// const router = express.Router()
// router.post('/create-user', usersController.creatUser)

// export default router

import express from 'express'
import usersController from './users.controller'
const router = express.Router()
// router.post('/create-user', usersController.creatUser)
router.post('/create-user', usersController.createUser)

export default router
