import React, { useContext, useEffect, useState } from 'react';
//import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Outlet} from 'react-router-dom';
import { Avatar, Drawer } from '@mui/material';
import { AnimatePresence, motion } from "framer-motion";
import SideBars from '../Charts/test5';
import { names } from './home';
import About from './Read data from JSon file';

export default function Layout(props){
    //const [time,setTime]=useState(new Date().toISOString)
    const name=useContext(names)
    console.log(name)
    
 
    

    return(
        <AnimatePresence>
            <div>
            
           
            <Navbar expand="lg" className='bg-body-tertiary' bg='dark' data-bs-theme="dark" >
                <Container>
                <Nav className='me-left'>
                    <Navbar.Brand style={{color:"white"}} >DashBoard</Navbar.Brand>
                    </Nav>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='/dashboard' style={{color:"white"}}>Home</Nav.Link>
                            <Nav.Link href='/services' style={{color:"white"}}>Services</Nav.Link>
                        </Nav>
                        <Navbar.Text style={{color:"white"}}>
                      {name}
                        
                        
                    </Navbar.Text>
                    &nbsp;&nbsp;
                        <Avatar alt='Remy Sharp' />
                        &nbsp;&nbsp;&nbsp;
                        <Dropdown> 
                        <Dropdown.Toggle variant='success' id='dropdown-basic' />
                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
        
                        </Dropdown.Menu>

                        </Dropdown>
                       
                    </Navbar.Collapse>
                    
                    
                    
                </Container>

            </Navbar>
            


            
        
                
            
            

        </div>
        </AnimatePresence>
    )
}