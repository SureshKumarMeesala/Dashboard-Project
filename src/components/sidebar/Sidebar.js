import React from 'react'

import  { useState } from 'react';
import { useMediaQuery } from 'react-responsive';


import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";


import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';

import Profile from "../images/profile.webp";




import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Customers from "../pages/Customers";
import Help from "../pages/Help";
import Products from "../pages/Products";
import Promote from "../pages/Promote";
import Income from "../pages/income";

import Dropdown from 'react-bootstrap/Dropdown';



export default function Sidebar1() {
    const { collapseSidebar } = useProSidebar();
    const [isDropdownOpen, setDropdownOpen] = useState(true);

    const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust the maximum width as needed

    const collapseNavbar = () => {
        setDropdownOpen(!isDropdownOpen);
      };
  

   
    
    
    
  return (
    <Router>
    <div id="app" className={`Main-page ${isMobile ? 'sidebar-collapsed' : ''}`}>
    {isMobile ? null : ( 

    <Sidebar style={{ height: "100vh" }}>
      <Menu className='Sidebar-Main' >
        <MenuItem className='menu-toggle-desk'
          icon={<SpaceDashboardOutlinedIcon />}
          onClick={() => {
            collapseSidebar();
          }}
          style={{  color: '#ffffff', marginTop: '30px' }}
        >
          {" "}
          <h5>Dashboard</h5>
        </MenuItem>
        <div className='Sidebar-Menu'>
     
        <Link to="/"><MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem></Link>
        <Link to="/products"><MenuItem icon={<ViewInArIcon />}>Products</MenuItem></Link>
        <Link to="/customers"><MenuItem icon={<AccountCircleOutlinedIcon />}>Customers</MenuItem></Link>
        <Link to="/income"><MenuItem icon={<AccountBalanceWalletOutlinedIcon />}>Income</MenuItem></Link>
        <Link to="/promote"><MenuItem icon={<LocalOfferOutlinedIcon />}>Promote</MenuItem></Link>
        <Link to="/help"><MenuItem icon={<LiveHelpOutlinedIcon />}>Help</MenuItem></Link>
        </div>

        <div className='Sidebar-Profile'> 
        <Dropdown className='Dropdown-profile'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className='Sidebar-Dropdown'>
                <div className="profile-box">
                    <div className="profile-pic"> <img src={Profile} alt="" /> </div>
                    <div className="profile-name"><strong>Suresh Kumar</strong> <p>UI /UX Developer</p> </div>
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Show Profile </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Edit Profile</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>   
            
      </Menu>

      
    </Sidebar>
        )}

    <div className="mobile-menu">
        <Menu className='mobile-menu-toggle'>
            <MenuItem icon={<SpaceDashboardOutlinedIcon />} onClick={() => { collapseNavbar();}}>
                            {" "}
                            <h2>Dashboard</h2>
            </MenuItem>
        </Menu>
          {isMobile && isDropdownOpen &&   (
            <Menu>
                <Link to="/"><MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem></Link>
                <Link to="/products"><MenuItem icon={<ViewInArIcon />}>Products</MenuItem></Link>
                <Link to="/customers"><MenuItem icon={<AccountCircleOutlinedIcon />}>Customers</MenuItem></Link>
                <Link to="/income"><MenuItem icon={<AccountBalanceWalletOutlinedIcon />}>Income</MenuItem></Link>
                <Link to="/promote"><MenuItem icon={<LocalOfferOutlinedIcon />}>Promote</MenuItem></Link>
                <Link to="/help"><MenuItem icon={<LiveHelpOutlinedIcon />}>Help</MenuItem></Link>
            </Menu>
          )}
    </div>

     <Routes>
        <Route path="/customers" element={<Customers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/products" element={<Products />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="/income" element={<Income />} />
        <Route path="/" element={<Dashboard />} />

      </Routes>

  </div>
  </Router>
  )
}
