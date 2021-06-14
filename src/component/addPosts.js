import React,{useState,useEffect} from 'react'
import {  useSelector,useDispatch } from "react-redux";
import {savePost,listPost,deletePost} from '../Actions/post'
import axios from 'axios';

const Addpost = (props) => {
     const dispatch = useDispatch();
     const [modalVisible, setModalVisible] = useState(false);
     const [title,setTitle] = useState('');
     const [description,setDescription] =useState('');
     const [bodytext,setBodytext] = useState('');
     const [image,setImage] = useState('');
     const [id,setId] = useState('');
     const [uploading, setUploading] = useState(false);
     const userSignin = useSelector(state => state.userSignin);
     const { userInfo } = userSignin;
     const postList = useSelector((state) => state.postList);
     const { loading, posts, error } = postList;

  const savepost = useSelector((state) => state.savepost);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = savepost;

  const postdelete = useSelector((state) => state.postdelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = postdelete;
  
  const openModal = (post) => {
    setModalVisible(true);
    setId(post._id);
    setTitle(post.title);
    setDescription(post.description);
    setImage(post.image);
    setBodytext(post.bodytext)
 
  };

  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setUploading(true);
    axios
      .post('http://localhost:5000/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

  const submit = (e)=>{
          e.preventDefault();
          dispatch(savePost({
            _id:id,
            title,
            description,
            image,
            bodytext
          }))
     }
  const deleteHandler = (post) => {
      dispatch(deletePost(post._id));
    };

    useEffect(() => {
      if (successSave) {
        setModalVisible(false);
      }
      dispatch(listPost());
      return () => {
        //
      };
    }, [successSave, successDelete]);

    return (
        <div className="page form">
           {userInfo && <h1>Welcome {userInfo.user.firstname}</h1>}
       <button className="button primary " onClick={() => openModal({})}> 
         Create  a post
        </button>
        {modalVisible && (<div>
        <form onSubmit={submit}>
        {loadingSave && <div>Loading...</div>}
        {errorSave && <div>{errorSave}</div>}
        <label htmlFor="title">Title</label>
        <input
          id="login-email"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label htmlFor="description">Description</label>
        <input
          id="login-password"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="bodytext">bodytext</label>
        <input
          id="login-password"
          type="text"
          value={bodytext}
          onChange={(e) => setBodytext(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          id="login-email"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input type="file" onChange={uploadFileHandler} ></input>
        {uploading && <div>Uploading...</div>}
        <button type="submit" className="button primary">
                  {id ? 'Update' : 'Create'}
        </button> 
        <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="button secondary"
                >
                  Back
        </button>
      </form>
      </div>)}
      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Bodytext</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id}>
                <td>{post._id}</td>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>{post.bodytext}</td>
                
                <td>
                <button className="button" onClick={() => openModal(post)}>
                    Edits
                  </button>{' '}
                  <button
                    className="button"
                    onClick={() => deleteHandler(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default Addpost;
