import type { APIContext, User } from '../../types/data'
import { fether } from '../../utils/index'

export type GetUserParams = {
  id: number
}

/**
 * ユーザーAPI(個別取得)
 * @param context APIコンテキスト
 * @param params パラメータ
 * @return ユーザー
 */
const getUser = async (context: APIContext, { id }: GetUserParams): Promise<User> => {
  return await fether(`${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export default getUser
