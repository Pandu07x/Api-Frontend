import axios from "axios";
import { useState } from "react";
import React from "react";
import image from "../PIC.jpg"
import { Link, redirect, useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import ReactLoading from "react-loading";
import Layout2 from "../components/simplepage";
import { Container,Grid,Paper, TextField,Button } from "@mui/material";


export default function Signup(){
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [phone,setPhone]=useState()
    const [stat,setStat]=useState("")
    const [password,setPassword]=useState()
    const [loginstat,setLoginstat]=useState(false)
    const navigate=useNavigate()
    const submit=()=>{
        setLoginstat(true)

        axios.post('http://192.168.4.203:8000/signup',{
            "name":name,
            "email":email,
            "phone":phone,
            "pass":password

        }).then((res)=>{
            if(res.status==200){
                 navigate("/otp")
            }
            else{
                setStat("Please check the form")

            }
        })

    }
    const style={
        backgroundImage:`url('${image}')`,
        backgroundSize:"cover",
        height:"100vh"
    }
    
    return(
        <div style={style}>
            <Layout2 />
            <Grid width={{width:"300px",height:"500px"}}>
                <Container sx={{width:"300px"}}>
                    <Paper sx={{paddingLeft: "1px",marginTop:"50px",height:"600px"}}>
                        <h1>SignUp</h1>
                        <br/><br/><br/>
                    
                     <TextField type="text" variant="outlined" label="Name" onChange={((e)=>setName(e.target.value))}/><br/><br/>
                     <TextField type="email" label="Email" variant="outlined" onChange={((e)=>setEmail(e.target.value))}/><br/><br/>
                     <TextField type="number" label="Phone No" variant="outlined" onChange={((e)=>setPhone(e.target.value))}/><br/><br/>
                     <TextField type="password" label="Password" variant="outlined" onChange={((e)=>setPassword(e.target.value))}/><br/><br/>

                    <Button type="button" onClick={submit} variant="outlined" >Submit</Button>
               
               <h1>{stat}</h1>
               
                    {loginstat===true ? <CircularProgress /> :""}
                

                    </Paper>
                </Container>
            </Grid>
        </div>

    )
} 