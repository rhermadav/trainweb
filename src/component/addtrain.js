import React,{useState,useEffect} from 'react'
import Topbar from './topbar';
import {  useSelector,useDispatch } from "react-redux";
import {listTrain,deleteTrain,saveTrain} from '../Actions/train';
import axios from 'axios';
import "./register.css"

const Addtrain = (props) => {
     const dispatch = useDispatch();
     const [modalVisible, setModalVisible] = useState(false);
     const [locationName,setLocation] = useState('');
     const [destination,setDestination] =useState('');
     const [price,setPrice] = useState('');
     const [file,setFile] = useState('');
     const [time,setTime] = useState('');
     const [trainId,settrainId] = useState('')
     const [durationTime, setdurationTime] = useState('')
     const [id,setId] = useState('');
     const [uploading, setUploading] = useState(false);
     
     const userSignin = useSelector(state => state.userSignin);
     const { userInfo } = userSignin;
     const trainList = useSelector((state) => state.trainList);
     const { loading, trains, error } = trainList;

  const savetrain = useSelector((state) => state.savetrain);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = savetrain;

  const traindelete = useSelector((state) => state.traindelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = traindelete;
  
  const openModal = (train) => {
    setModalVisible(true);
    settrainId(train._id);
    setLocation(train.locationName);
    setDestination(train.destination);
    setPrice(train.price)
    setFile(train.file);
    setTime(train.time)
    setdurationTime(train.durationTime)
    setId(train._id);
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
        setFile(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

  const convertFile  = (e) => {
      const reader =new FileReader();
      if (e && e.target.value) {
          reader.onload = function (e) {
            console.log(e.target.result)
            setFile(e.target.result);
          };
          reader.readAsDataURL(e.target.files[0]);
      }
  };

  const submit = (e)=>{
          e.preventDefault();
          dispatch(saveTrain({
            _id:id,
            locationName,
            durationTime,
            destination,
            file,
            price,
            time,
            trainId
          }))
     }
  const deleteHandler = (train) => {
      dispatch(deleteTrain(train._id));
    };

    useEffect(() => {
      if (successSave) {
        setModalVisible(false);
      }
      dispatch(listTrain());
      return () => {
        //
      };
    }, [successSave, successDelete]);

    return (
        <div className="page form">
           {userInfo && <h1>Welcome {userInfo.email}</h1>}
       <button className="button primary " onClick={() => openModal({})}> 
         Create  a train
        </button>
        {modalVisible && (<div>
        <form onSubmit={submit}>
        {loadingSave && <div>Loading...</div>}
        {errorSave && <div>{errorSave}</div>}
        <label htmlFor="locationName">Location</label>
        <input
          className="registerInput"
          type="text"
          value={locationName}
          onChange={(e) => setLocation(e.target.value)}
        />
        
        <label htmlFor="trainId">Train id</label>
        <input
          className="registerInput"
          type="text"
          value={trainId}
          onChange={(e) => settrainId(e.target.value)}
        />

        <label htmlFor="destination">Destination</label>
        <input
          className="registerInput"
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          className="registerInput"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="bodytext">Time</label>
        <input
          id="login-password"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label htmlFor="bodytext">Travel Time</label>
        <input
          id="login-password"
          type="text"
          value={durationTime}
          onChange={(e) => setdurationTime(e.target.value)}
        />
        <label htmlFor="image">Image</label>
        <input
          className="registerInput"
          type="text"
          value={file}
          onChange={(e) => setFile(e.target.value)}
        />
        <input type="file" onChange={convertFile} ></input>
        {uploading && <div>Uploading...</div>}
        <button type="submit" className="button primary ">
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
              <th>Location</th>
              <th>Destination</th>
              <th>price</th>
              <th>Time</th>
              <th> Duration</th>
            </tr>
          </thead>
          <tbody>
            {trains.map((train) => (
              <tr key={train._id}>
                <td>{train._id}</td>
                <td>{train.title}</td>
                <td>{train.destination}</td>
                <td>{train.price}</td>
                <td>{train.time}</td>
                <td>{train.durationTime}</td>

                <td>
                <button className="button" onClick={() => openModal(train)}>
                    Edits
                  </button>{' '}
                  <button
                    className="button"
                    onClick={() => deleteHandler(train)}
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

export default Addtrain;