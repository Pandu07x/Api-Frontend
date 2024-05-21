import { useState } from "react";
import React from "react";
import axios, { Axios } from "axios";
import image from "../PIC.jpg"
import { useNavigate } from "react-router-dom";
import { Container,Grid, Paper,Avatar, Box, TextField,Button,Stack,Alert } from "@mui/material";
import {  Dropdown, Nav, Navbar } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

import Layout2 from "../components/simplepage";
import { rootShouldForwardProp } from "@mui/material/styles/styled";

export default function Login(){
    const [user,setUser]=useState("")
    const [password,setPassword]=useState("")
    const [text,setText]=useState("")
    const [ser,setSer]=useState("")
    const [load,setLoad]=useState()
    const [statis,setStatus]=useState("")
    const [colors,setColors]=useState("")
    const navigate=useNavigate()
    var mystyle={
        color:"red"
    }
    
    console.log(user,password)
    
    
    const login=()=>{
        
        if(user=="" || password==""){
            setSer("error")
            setText("Nee Yabba Ani Fill Chaiya ra Erripuka Nanu Yem Chustunav Fill Chaiya ra Erripu....")

        }
        else{
            setLoad(<CircularProgress />)
            axios.post("http://192.168.1.203:8000/login",{
                "user":user,
                "pass":password
            }).then((res)=>{
                if(res.data["status"]==200){
                    const tempdata={
                        Neekasu:res.data["NeeKasu"],
                        "Name":res.data.Name
                    }
                    localStorage.setItem("Neekasu",JSON.stringify(tempdata))
                    navigate("/dashboard")
                    
                }
                else if(res.data["status"]==401){
                    setText("Details Sarrigaa Veyra Erripulka")
                    setSer("error")
                    
                }
                else if(res.status==500){
                    setText("Nee Yabba Inki Server ON Avaledu Ra Erri-Pulka. Uccha Aggat leda ra neeku Ani muskuni Kucho ")
                }
            }).catch((res)=>{
                console.log(res.response)
                if(res.response.status==401){
                    setText("Details Sarrigaa Veyra Erripulka")
                    setSer("error")
                    setLoad("")
                }else{
                    setText("Nee Yabba Inki Server ON Avaledu Ra Erri-Pulka. Uccha Aggat leda ra neeku Ani muskuni Kucho ")
                    setSer("error")
                    setLoad("")
                }
               
            })
        }
    }
    console.log(mystyle)
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: "320px",
        
      }));
      const style={
        backgroundImage:`url('${image}')`,
        backgroundSize:"cover",
        height:"100vh"
    }

    return(
        <div style={style}>
            <Layout2 />
            <Stack>
                        <Alert severity={ser} >{text}</Alert>
                    </Stack>
            
          
           <Grid spacing={2}>
            <Grid width={{width:"300px",height:"500px"}}>
            <Container sx={{width:"300px"}}>
            <Paper sx={{paddingLeft: "1px",marginTop:"50px",height:"600px"}}>
           
                    
                    <br/><br/><br/>
                    <br/><br/><br/>
            <h1 style={{justifyContent:"center"}} > Login </h1><br/>
            <TextField  required type="text" label="Enter Email" onChange={((e)=>setUser(e.target.value))}/> <br/><br/>
            <TextField required type="password" label="Enter Password" name="password" onChange={(e)=>setPassword(e.target.value)} /><br/><br/>

            <Button type="submit" variant="outlined" onClick={login} >Login</Button><br/>
            <br/>

            {load}
            
            </Paper>
           </Container>
           


            </Grid>
            
           </Grid>
        
            
            

        </div>
    )
}