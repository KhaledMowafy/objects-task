import React, {useState, useEffect} from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import api from '../../utils/api';
import dummyImg from '../../assets/Genral.png';

const Home = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(()=>{
    api.readAll(`https://jsonplaceholder.typicode.com/posts/`)
    .then((response)=>{
      setData(response)
    })
    .catch((err)=>{
      setError(err)
    })
  
  
  }, [])
  
  return (
    <div className="h-100 mt-5 d-flex justify-content-center align-items-center">
      <Row className="w-75">
        {data?.map((item, index)=>(
          <Col xl="3" key={item.id} className="mb-5" role="button" tabIndex={index}>
          <NavLink to={`/post/${item.id}`} className="text-decoration-none text-dark">
          <Card className="shadow-sm p-3 mb-5 bg-white rounded h-100 ">
            <Card.Header>
            <h4 className="text-start">{item.id} - User ID</h4>
            </Card.Header>
            <Card.Body>
              <img src={dummyImg} alt="dummy Img" className="w-50" />
            <h6 className="text-start">{item.title}</h6>
                <p className="text-start">{item.body}</p>
            </Card.Body>
          </Card>
          </NavLink>
          </Col>
        ))}
        </Row>
     </div>
  );
};

export default Home;
