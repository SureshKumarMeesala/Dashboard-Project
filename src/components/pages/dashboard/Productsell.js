import React from 'react'
import "../dashboard/dashboard.css";

import Product from "../../images/product.jpeg"

import Dropdown from 'react-bootstrap/Dropdown';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchIcon from '@mui/icons-material/Search';



export default function Productsell() {
  return (
    <>
    <Container className='inventory-div'>  
      <Row className='inventory-Row'>
        <Col className='inventory-col'>
          <Row className='Chart-Header'>
            <Col>
            <p className='Overview-Title'>Product Sell</p>
            </Col>
            <Col style={{display: "inline-grid", alignItems: 'center'}}>
              <Navbar>
                <Container fluid>
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
            </Col>
            <Col style={{display: "contents"}}>
            <Dropdown className='Chart-Dropdown-body'>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='Chart-Dropdown'>
                  Last 30 days
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
          
                <Container>
                            <Row>
                                <Col className='Productsell-div-min'><p className='Productsell-Side'>Product Name</p></Col>
                                <Col className='Productsell-div'><p className='Productsell-Side'>Stock</p></Col>
                                <Col className='Productsell-div'><p className='Productsell-Side'>Price</p></Col>
                                <Col className='Productsell-div'><p className='Productsell-Side'>Total Sales</p></Col>
                            </Row>

                            <hr className='Divider'/>
                            <Row className='Product-sell-row'>
                                 <Col className='Productsell-div-min'>
                                    <div className='Productsell-Side'>
                                        <div className="profile-box">
                                            <div className="Product-pic"> <img src={Product} alt="" /> </div>
                                            <div className="Product-name"><strong>Product Name</strong> <p className='Product-decription'>Product Detailed Description</p> </div>
                                        </div>
                                        </div>
                                </Col>

                                
                                <Col className='Productsell-div'><p className='Productsell-Side'>32 in-stock</p></Col>
                                <Col className='Productsell-div'><p className='Productsell-Side'>$45</p></Col>
                                <Col className='Productsell-div'><p className='Productsell-Side'>20</p></Col>
                             </Row>

                             <Row className='Product-sell-row'>
                                 <Col className='Productsell-div-min'>
                                    <div className='Productsell-Side'>
                                        <div className="profile-box">
                                            <div className="Product-pic"> <img src={Product} alt="" /> </div>
                                            <div className="Product-name"><strong>Product Name</strong> <p className='Product-decription'>Product Detailed Description</p> </div>
                                        </div>
                                        </div>
                                </Col>

                                
                                <Col className='Productsell-div'><p className='Productsell-Side'>32 in-stock</p></Col>
                                <Col className='Productsell-div'><p className='Productsell-Side'>$45</p></Col>
                                <Col className='Productsell-div'><p className='Productsell-Side'>20</p></Col>
                             </Row>

                             <Row className='Product-sell-row'>
                                 <Col className='Productsell-div-min'>
                                    <div className='Productsell-Side'>
                                        <div className="profile-box">
                                            <div className="Product-pic"> <img src={Product} alt="" /> </div>
                                            <div className="Product-name"><strong>Product Name</strong> <p className='Product-decription'>Product Detailed Description</p> </div>
                                        </div>
                                        </div>
                                </Col>

                                
                                <Col className='Productsell-div'><p className='Productsell-Side'>32 in-stock</p></Col>
                                <Col className='Productsell-div'><p className='Productsell-Side'>$45</p></Col>
                                <Col className='Productsell-div'><p className='Productsell-Side'>20</p></Col>
                             </Row>

                             <Row className='Product-sell-row'>
                                 <Col className='Productsell-div-min'>
                                    <div className='Productsell-Side'>
                                        <div className="profile-box">
                                            <div className="Product-pic"> <img src={Product} alt="" /> </div>
                                            <div className="Product-name"><strong>Product Name</strong> <p className='Product-decription'>Product Detailed Description</p> </div>
                                        </div>
                                        </div>
                                </Col>

                                
                                <Col className='Productsell-div'><p className='Productsell-Side'>32 in-stock</p></Col>
                                <Col className='Productsell-div'><p className='Productsell-Side'>$45</p></Col>
                                <Col className='Productsell-div'><p className='Productsell-Side'>20</p></Col>
                             </Row>
                </Container>
        </Col>
      </Row>
      
    </Container>\



    
    </>
  )
}
