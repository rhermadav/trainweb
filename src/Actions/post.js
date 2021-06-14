import {CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE, POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_LIST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE} from './types';
import Axios from 'axios';


const listPost = () =>async (dispatch) =>{

  try {
    dispatch({type:POST_LIST_REQUEST })
    const {data} = await Axios.get('http://localhost:5000/posts');
    dispatch({type:POST_LIST_SUCCESS, payload:data})
  } catch (error) {
    dispatch({type:POST_LIST_FAILURE, payload: error.message})
  }
}

const savePost = (post) =>async (dispatch, getState) =>{
  try {
    dispatch({type:CREATE_POST_REQUEST, payload:post })
  const {
    userSignin: { userInfo },
  } = getState();
 
  if (!post._id) {
    const {data} = await Axios.post('http://localhost:5000/posts',post,{
    headers: {
      Authorization: 'Bearer ' + userInfo.token,
    },
  });
  dispatch({ type:CREATE_POST_SUCCESS, payload: data });
  } else {
    const { data } = await Axios.put(
      'http://localhost:5000/posts' + post._id,
      post,
      {
        headers: {
          Authorization: 'Bearer ' + userInfo.token,
        },
      }
    );
  dispatch({ type:CREATE_POST_SUCCESS, payload: data });
}
}catch (error) {
    dispatch({type:CREATE_POST_FAILURE, payload: error.message})
  }
}

const singlepost = (postId) =>async (dispatch) =>{
  dispatch({type:GET_POST_REQUEST, payload:postId })
  try {
    const {data} = await Axios.get('http://localhost:5000/posts'+ postId);
    dispatch({type:GET_POST_SUCCESS, payload:data})
  } catch (error) {
    dispatch({type: GET_POST_FAILURE, payload: error.message})
  }
}

const deletePost = (postId) =>async (dispatch, getState) =>{
  dispatch({type:DELETE_POST_REQUEST, payload:postId })
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const {data} = await Axios.delete(`http://localhost:5000/posts/${postId}`,{
      headers: {
        Authorization: 'Bearer ' + userInfo.token,
      },
    });
    dispatch({type:DELETE_POST_SUCCESS, payload:data, success:true})
    
  } catch (error) {
    dispatch({type: DELETE_POST_FAILURE, payload: error.message})
  }
}

export {savePost,listPost,deletePost,singlepost}