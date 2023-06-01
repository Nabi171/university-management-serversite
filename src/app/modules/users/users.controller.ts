import userService from './user.service'
import { Request, Response } from 'express'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user created successfuly',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Failed to creae user',
    })
  }
}

export default {
  createUser,
}