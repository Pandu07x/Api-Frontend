import React from "react"
import { Grid, Paper,Avatar, Box } from "@mui/material";
import {  Container,Dropdown, Nav, Navbar } from 'react-bootstrap';
export default function Layout2(){
    return(
        <div>
            <Navbar expand="lg" className='bg-body-tertiary' bg='dark' data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand style={{color:"white"}} >DashBoard</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav'>
                       
                        
                    </Navbar.Collapse>
                    
                    
                    
                </Container>

            </Navbar>
        </div>
    )
}