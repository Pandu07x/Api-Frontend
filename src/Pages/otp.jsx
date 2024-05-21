import axios from "axios";
import React,{useState} from "react";
import image from "../PIC.jpg"
import { useNavigate } from "react-router-dom";
import Layout2 from "../components/simplepage";
import { Button, Container, Grid, Paper, TextField,Stack,Alert } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

export default function OTP(){
    const [otp,setOtp]=useState()
    const navigate=useNavigate()
    const [text,setText]=useState("")
    const [ser,setSer]=useState("")
    const [load,setLoad]=useState()
    const submit=()=>{
        if(otp==""){

        }
        else{
            axios.post("http://192.168.4.203:8000/login_otp",{
                "otp":otp
            }).then((res)=>{
                if (res.status==200){
                    navigate("/Login")
                }
                else if(res.status==404 ||res.status==401){
                    console.log("error")
                }
    
    
    
    
            })
        }
        
        

    }
    console.log(1<28)
    const style={
        backgroundImage:`url('${image}')`,
        backgroundSize:"cover",
        height:"100vh"
    }
    return(
        <div style={style}>
        <Layout2 />

        
            
            <Grid spacing={2}>
            <Grid width={{width:"300px",height:"500px"}}>
            <Container sx={{width:"300px"}}>
                <Paper sx={{paddingLeft: "1px",marginTop:"50px",height:"600px"}} >
                    <br/><br/><br/>
                    
                    <br/><br/><br/>
                    <h1 style={{fontSize:"20px"}}>Please enter OTP </h1>
                 <TextField type="password" label="Enter Your OTP" name="otp" variant="outlined" onChange={((e)=>setOtp(e.target.value))} /> <br/><br/>
            <Button type="button" variant="outlined" onClick={submit}>Submit</Button>
                </Paper>
            </Container>
          </Grid>


            </Grid>
          
        </div>
      
    )
}