import { SIGN_IN_REQUEST,SIGN_IN_SUCCESS,SIGN_IN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } from '../Actions/types';



 function userSigninReducer (state = {}, action) {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return { ...state,  loading: true }
        case SIGN_IN_SUCCESS:
        return { ...state, loading: false, userInfo:action.payload }
        case SIGN_IN_FAILURE:
            return { ...state, loading: false, error:action.payload }   
        default:
            return state
    }
}

function userRegisterReducer (state = {}, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state,  loading: true }
        case REGISTER_SUCCESS:
        return { ...state, loading: false, userInfo:action.payload }
        case REGISTER_FAILURE:
            return { ...state, loading: false, error:action.payload }   
        default:
            return state
    }
}

export {userSigninReducer, userRegisterReducer}