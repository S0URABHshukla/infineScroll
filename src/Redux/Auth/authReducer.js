const initialState={
    isAuth:false,
    user:null
}
const authReducer=(state=initialState,{type,payload})=>
{
    switch (type) {
        case 'LOGIN':
            return {...state,isAuth:payload};
        case 'LOGOUT':
            return {...state,isAuth:payload}; 

    
        default:
            return state;
    }

}

export default authReducer;