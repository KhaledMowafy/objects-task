import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Card} from 'react-bootstrap';
import postImg from '../../assets/Genral.png';
import api from '../../utils/api';

const Post = () => {
  const {id} = useParams();
  const [data, setData] = useState();
  const [comments, setComments] = useState();
  const [error, setError] = useState();

useEffect(()=>{
  api.read(`https://jsonplaceholder.typicode.com/posts/`, 1)
  .then((response)=>{
    setData(response)
  })
  .catch((err)=>{
    setError(err)
  })

  api.readAll(`https://jsonplaceholder.typicode.com/posts/1/comments`)
  .then((response)=>{
    setComments(response)
  })
  .catch((err)=>{
    setError(err)
  })

}, [])
  return (
    <div className="h-100 mt-5 d-flex justify-content-center align-items-center flex-column">
        <Card className="w-75">
          <Card.Body className="d-flex flex-column justify-content-start align-items-center p-4">
            <div className="d-flex flex-column align-items-start">
              <h2 className="text-start">{id}</h2>
              <h4 className="text-start">{data?.title}</h4>
              <p className="text-start">{data?.body}</p>
              </div>
              <img src={postImg} alt="postImg" className="w-25"/>
          </Card.Body>
        </Card>
        <Card className="w-75">
          <Card.Header>
          <h2 className="text-start">Comments</h2>
          </Card.Header>
          <Card.Body>
            {comments?.map((item)=>(
                <div className="d-flex flex-column align-items-start shadow-sm p-3 mb-5 bg-white rounded" key={item.id}>
                <h4 className="text-start">{item.id} - {item.name}</h4>
                <h6 className="text-start">{item.email}</h6>
                <p className="text-start">{item.body}</p>
                <hr/>
                </div>
            ))}
          </Card.Body>
        </Card>
     </div>
  );
};

export default Post;
