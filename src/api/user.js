import ajax from './apiRouters'

/*** 用户 ***/
export const USER_INFO = '/api/v1/user/info'
export const USER_LOGIN = '/api/v1/user/login'
export const USER_REGISTER = '/api/v1/user/register'
export const USER_SEND_CODE = '/api/v1/user/sendCode'
export const USER_VERTIFY_CODE = '/api/v1/user/vertifyCode'


// 获取用户信息
export const getUserInfo = (date) => {
    return ajax.get(USER_INFO)
}

// 登录
export const login = (mail, password) => {
    return ajax.post(USER_LOGIN, { mail, password })
}
// 注册
export const register = (password) => {
    return ajax.post(USER_REGISTER, { password })
}
// 发送验证码
export const sendCode = (mail) => {
    return ajax.post(USER_SEND_CODE, { mail })
}
// 验证验证码
export const vertifyCode = (mail, code) => {
    return ajax.post(USER_VERTIFY_CODE, { mail, code })
}