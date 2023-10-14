import React from 'react'
import "../dashboard/dashboard.css";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import arrow from "../../images/arrow.png";
import document from "../../images/document.png";
import bag from "../../images/shopping-bag.png";
import wallet from "../../images/wallet.png";

import SearchIcon from '@mui/icons-material/Search';
import Barchart from './Barchart';
import Doughnutchart from './Doughnutchart';






export default function Dashboard() {

  
  return (
    <>

    <div className='Dashboard-body'>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll" className='Dashboard-search'>
          <Form className="d-flex">
          <Button variant="outline-success" className='search-button'>{<SearchIcon />}</Button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className='order-statics-div'>
      <Row>
        <Col className='order-statics-col'>
                <div className="order-box">
                    <div className="arrow-pic"> <img src={arrow} alt="" /> 
                    </div>
                    <div className="order-name">
                      <p className='order-box-title'>Earning</p> 
                      <strong className='order-box-result'>$198k</strong> 
                      <p className='order-box-stat'>&#x2191; 37.8% This Month</p> 
                    </div>
                </div>
        </Col>
        <Col className='order-statics-col'>
        <div className="order-box">
                    <div className="document-pic"> <img src={document} alt="" /> 
                    </div>
                    <div className="order-name">
                      <p className='order-box-title'>Orders</p> 
                      <strong className='order-box-result'>$2.4k</strong> 
                      <p className='order-box-stat'>&#x2193; 2% This Month</p> 
                    </div>
                </div>
        </Col>
        <Col className='order-statics-col'>
        <div className="order-box">
                    <div className="bag-pic"> <img src={wallet} alt="" /> 
                    </div>
                    <div className="order-name">
                      <p className='order-box-title'>Balance</p> 
                      <strong className='order-box-result'>$2.4k</strong> 
                      <p className='order-box-stat'>&#x2193; 2% This Month</p> 
                    </div>
                </div>
        </Col>
        <Col className='order-statics-col'>
        <div className="order-box">
                    <div className="wallet-pic"> <img src={bag} alt="" /> 
                    </div>
                    <div className="order-name">
                      <p className='order-box-title'>Total Sales</p> 
                      <strong className='order-box-result'>$89k</strong> 
                      <p className='order-box-stat'>&#x2191; 11% This Month</p> 
                    </div>
                </div>
        </Col>
      </Row>
    </Container>


    <Container className='Chart-div'>
      <Row>
        <Col sm={8}>
         <Barchart />
        </Col>
        <Col sm={4}><Doughnutchart></Doughnutchart></Col>
      </Row>
    </Container>

    <Container className='Chart-div'>
      <Row>
        <Col sm={8}>
         <Barchart />
        </Col>
        <Col sm={4}><Doughnutchart></Doughnutchart></Col>
      </Row>
    </Container>

    </div>
    
    
    </>
  )
}
