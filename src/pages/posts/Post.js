import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Row, Col, Card} from 'react-bootstrap';
import postImg from '../../assets/Genral.png';
import api from '../../utils/api';

const Post = () => {
  const {id} = useParams();
  const [data, setData] = useState();
  const [error, setError] = useState();

useEffect(()=>{
  api.read(`https://jsonplaceholder.typicode.com/posts/`, 1)
  .then((response)=>{
    setData(response)
  })
  .catch((err)=>{
    setError(err)
  })

}, [])
  return (
    <div className="h-100 mt-5 d-flex justify-content-center align-items-center">
        <Card className="w-75">
          <Card.Body className="d-flex flex-column justify-content-start align-items-center p-4">
            <div className="d-flex flex-column align-items-start">
              <h2 className="text-start">{data?.id}</h2>
              <h4 className="text-start">{data?.title}</h4>
              <p className="text-start">{data?.body}</p>
              </div>
              <img src={postImg} alt="postImg" className="w-25"/>
          </Card.Body>
        </Card>
     </div>
  );
};

export default Post;
