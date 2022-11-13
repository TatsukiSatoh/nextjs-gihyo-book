import { APIContext, User } from '../../types/data'
import { fether } from '../../utils/index'

export type SigninParams = {
  // default: user
  username: string
  // default: password
  password: string
}

/**
 * 認証API(サインイン)
 * @param context APIコンテキスト
 * @param params パラメタ
 * @returns ログインユーザー
 */
const signin = async (context: APIContext, params: SigninParams): Promise<User> => {
  return await fether(`${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
}

export default signin
