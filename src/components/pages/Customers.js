



import React from 'react'
import "./dashboard/dashboard.css";

import Dropdown from 'react-bootstrap/Dropdown';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import arrow from "../images/arrow.png";
import document from "../images/document.png";
import bag from "../images/shopping-bag.png";
import wallet from "../images/wallet.png";

import SearchIcon from '@mui/icons-material/Search';
import Barchart from './dashboard/Barchart';
import Doughnutchart from './dashboard/Doughnutchart';
import Productsell from './dashboard/Productsell';






export default function Customers() {

  
  return (
    <>

    <div className='Dashboard-body'>
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className='Profile-Heading-Line'>Hello Help</Navbar.Brand>
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
                      <p className='order-box-stat'><p className='Red'>&#x2191; 37.8%</p>This Month</p> 
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
                      <p className='order-box-stat'><p className='Red'>&#x2193; 2% </p>This Month</p> 
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
                      <p className='order-box-stat'><p className='Red'>&#x2193; 2% </p>This Month</p> 
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
                      <p className='order-box-stat'><p className='Red'>&#x2191; 11% </p>This Month</p> 
                    </div>
                </div>
        </Col>
      </Row>
    </Container>


    <Container className='Chart-div'>
      <Row className='Chart-Row'>
        <Col sm={8} className='Chart-Col-b'>
          <Row className='Chart-Header'>
            <Col>
            <p className='Overview-Title'>Overview</p>
            <p className='Overview-SubTitle'>Monthly Earnings</p>
            </Col>
            <Col style={{display: "contents"}}>
            <Dropdown className='Chart-Dropdown-body'>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='Chart-Dropdown'>
                  Quarterly
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Quarter 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Quarter 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Quarter 3</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Quarter 4</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>
          </Row>
         <Barchart />
        </Col>
        <Col sm={4} className='Chart-Col-s'>
        <Row className='Chart-Header'>
            <Col>
            <p className='Overview-Title' >Customers</p>
            <p className='Overview-SubTitle' >Custopmers that buy Products</p>
            </Col>
          </Row>
          <Doughnutchart/>
          </Col>
      </Row>
    </Container>

    <Productsell />

    </div>
    
    
    </>
  )
}
