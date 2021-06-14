import {CREATE_TRAIN_REQUEST,CREATE_TRAIN_SUCCESS,CREATE_TRAIN_FAILURE,TRAIN_LIST_REQUEST,TRAIN_LIST_SUCCESS,TRAIN_LIST_FAILURE,GET_TRAIN_REQUEST,GET_TRAIN_SUCCESS,GET_TRAIN_FAILURE,DELETE_TRAIN_REQUEST,DELETE_TRAIN_SUCCESS,DELETE_TRAIN_FAILURE} from  '../Actions/types'


function savetrainReducer (state = {train:{}}, action) {
  switch (action.type) {
      case CREATE_TRAIN_REQUEST :
          return { ...state,  loading: true }
      case CREATE_TRAIN_SUCCESS:
      return { ...state,success:true, loading: false, train:action.payload }
      case CREATE_TRAIN_FAILURE:
          return { ...state, loading: false, error:action.payload }   
      default:
          return state
  }
}

function trainlistReducer (state = { trains:[]}, action) {
  switch (action.type) {
      case TRAIN_LIST_REQUEST:
          return { ...state,  loading: true, }
      case TRAIN_LIST_SUCCESS:
      return { ...state, loading: false, trains :action.payload }
      case TRAIN_LIST_FAILURE:
          return { ...state, loading: false, error:action.payload }   
      default:
          return state
  }
}

// function postdetail (state = {}, action) {
//   switch (action.type) {
//       case SIGN_IN_REQUEST:
//           return { ...state,  loading: true }
//       case SIGN_IN_SUCCESS:
//       return { ...state, loading: false, userInfo:action.payload }
//       case SIGN_IN_FAILURE:
//           return { ...state, loading: false, error:action.payload }   
//       default:
//           return state
//   }
// }
function traindeleteReducer (state = {train: {}}, action) {
  switch (action.type) {
      case DELETE_TRAIN_REQUEST:
          return { ...state,  loading: true }
      case DELETE_TRAIN_SUCCESS:
      return { ...state, loading: false, train:action.payload }
      case DELETE_TRAIN_FAILURE:
          return { ...state, loading: false, error:action.payload }   
      default:
          return state
  }
}

export {savetrainReducer,trainlistReducer,traindeleteReducer}