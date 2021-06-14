import {CREATE_TRAIN_REQUEST,CREATE_TRAIN_SUCCESS,CREATE_TRAIN_FAILURE,TRAIN_LIST_REQUEST,TRAIN_LIST_SUCCESS,TRAIN_LIST_FAILURE,GET_TRAIN_REQUEST,GET_TRAIN_SUCCESS,GET_TRAIN_FAILURE,DELETE_TRAIN_REQUEST,DELETE_TRAIN_SUCCESS,DELETE_TRAIN_FAILURE} from './types';
import Axios from 'axios';


const listTrain = () =>async (dispatch, getState) =>{

  try {
    dispatch({type:TRAIN_LIST_REQUEST })
    const {
      userSignin: { userInfo },
    } = getState();
    const {data} = await Axios.get('http://localhost:4000/train/all',{
      headers: {
        "Content-type": "Application/json",
          "x-auth" :  userInfo.token,
      }});
    dispatch({type:TRAIN_LIST_SUCCESS, payload:data})
  } catch (error) {
    dispatch({type:TRAIN_LIST_FAILURE, payload: error.message})
  }
}

const saveTrain = (train) =>async (dispatch, getState) =>{
  try {
    dispatch({type:CREATE_TRAIN_REQUEST, payload:train })
  const {
    userSignin: { userInfo },
  } = getState();
 
  if (!train._id) {
    const {data} = await Axios.post('http://localhost:4000/train/create',train,{
    headers: {
      "Content-type": "Application/json",
        "x-auth" :  userInfo.token,
    },
  });
  dispatch({ type:CREATE_TRAIN_SUCCESS, payload: data });
  } else {
    const { data } = await Axios.put(
      'http://localhost:4000/train/update' + train._id,
      train,
      {
        headers: {
          "Content-type": "Application/json",
            "x-auth" :  userInfo.token,
        }
      }
    );
  dispatch({ type:CREATE_TRAIN_SUCCESS, payload: data });
}
}catch (error) {
    dispatch({type:CREATE_TRAIN_FAILURE, payload: error.message})
  }
}

const singletrain = (trainId) =>async (dispatch) =>{
  dispatch({type:GET_TRAIN_REQUEST, payload:trainId })
  try {
    const {data} = await Axios.get('http://localhost:5000/posts'+ trainId);
    dispatch({type:GET_TRAIN_SUCCESS, payload:data})
  } catch (error) {
    dispatch({type: GET_TRAIN_FAILURE, payload: error.message})
  }
}

const deleteTrain = (trainId) =>async (dispatch, getState) =>{
  dispatch({type:DELETE_TRAIN_REQUEST, payload:trainId })
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const {data} = await Axios.delete(`http://localhost:5000/posts/${trainId}`,{
      headers: {
        Authorization: 'Bearer ' + userInfo.token,
      },
    });
    dispatch({type:DELETE_TRAIN_SUCCESS, payload:data, success:true})
    
  } catch (error) {
    dispatch({type: DELETE_TRAIN_FAILURE, payload: error.message})
  }
}

export {saveTrain,deleteTrain,singletrain,listTrain};