import { actiontype } from "../actionTypes/actionTypes"

export const authLoginAction=(payload)=>
{
    return {
        type:actiontype.LOGIN,
        payload:payload
    }
}

export const authLogoutAction=(payload)=>
{
    return {
        type:actiontype.LOGOUT,
        payload:payload
    }
}