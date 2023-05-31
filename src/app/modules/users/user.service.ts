import { IUser } from './users.interface'
import { User } from './users.model'
import config from '../../../config/index'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremental id
  const id = await generateUserId()

  user.id = id
  //default password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createUser
}

export default {
  createUser,
}
