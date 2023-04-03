import React from "react";
import { Row, Col} from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./styles/Nav.css";




const Nav = () => {
 
  return (
    <>
      <nav className="w-100 main-nav " id="desktop--nav">
        <div className="w-100 ps-3 d-flex h-100">
          <div className="w-50 ">
            <Row className="d-flex align-items-center h-100">
                <Col xl="2">
                  <h3>
                    <span className="me-3">Logo</span>
                  </h3>
                </Col>
            </Row>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
