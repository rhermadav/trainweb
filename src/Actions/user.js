import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE,REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE} from './types';
import Axios from 'axios';
import Cookie from 'js-cookie';

const signinUser = (email,password) =>async (dispatch) =>{
      dispatch({type:SIGN_IN_REQUEST, payload:{email,password} })
      try {
        const {data} = await Axios.post('http://localhost:4000/login',{email,password});
        dispatch({type: SIGN_IN_SUCCESS, payload:data})
        Cookie.set('userinfo',JSON.stringify(data));
      } catch (error) {
        dispatch({type: SIGN_IN_FAILURE, payload: error.message})
      }
}

const registerUser = (firstName,lastName,userName,email,password) =>async (dispatch) =>{
      dispatch({type:REGISTER_REQUEST, payload:{firstName,lastName,userName,email,password} })
      try {
        const {data} = await Axios.post('http://localhost:4000/register',{firstName,lastName,userName,email,password});
        dispatch({type: REGISTER_SUCCESS, payload:data})
        Cookie.set('userinfo',JSON.stringify(data));
      } catch (error) {
        dispatch({type: REGISTER_FAILURE, payload: error.message})
      }
}

export {signinUser, registerUser};