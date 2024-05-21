import { Button, Modal,Box, Tab,Tabs, Table, Paper, LinearProgress } from "@mui/material";
import React, { useState } from "react";
import Layout from "./layout";
import Test1 from "../Charts/test2";
import SideBars from "../Charts/test5";
import  data from "../Charts/test.json" 
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";


export default function About(){
    const [open,setOpen]=useState(false)
    const [value,setValue]=useState(0)
    const [load,setLoad]=useState(true)
    setTimeout(()=>{
        setLoad((load)=>!load)
    },2000)

    if(load){
        return <h2><LinearProgress /></h2>
    }
    
   
    const handleopen=()=>{
        setOpen(true)
    }
    const handlechange=(event,newValue)=>{
        setValue(newValue)

    }
    const handleclose=()=>{
        setOpen(false)
    }
    console.log(data)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        backgroundColor:"white",
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return(
        
        <div>
            

    
            <Layout />
            
            
           
           <div  >
          <h1>World</h1>
                
            
           </div>
           
            
            
            
        
            
            
            
            
        </div>
        
    )
}