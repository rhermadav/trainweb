import { combineReducers } from 'redux'
import {userSigninReducer, userRegisterReducer} from './userReducer'
import {savepostReducer, postlistReducer, postdeleteReducer} from './postReducers';
import {savetrainReducer, traindeleteReducer, trainlistReducer} from './trainReducer'

export default combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  savepost: savepostReducer,
  postList: postlistReducer,
  postdelete: postdeleteReducer,
  savetrain: savetrainReducer,
  trainList:trainlistReducer,
  traindelete:traindeleteReducer
})