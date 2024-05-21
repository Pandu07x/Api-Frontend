import React from "react";
import Layout2 from "../components/simplepage";
import { Container,Box } from "@mui/material";
import Carousel from 'react-bootstrap/Carousel'
import image from "../PIC.jpg"
//import '../App.css';


export default function Front(){
    return(
       
           
             
               <>
               <Layout2 />
               
              
                <div className=" shadow"  >
                  <Carousel fade>
      <Carousel.Item>
        <img src={image} style={{width:`2000px`,height:'500px'}}>
        </img>
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image} style={{width:`2000px`,height:'500px'}}>
        </img>
        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image} style={{width:'2000px',height:'500px'}}>
        </img>
        
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

                </div>
                </>

   
            
        
    )
}