import React, { createContext, useContext, useEffect, useState } from "react";
//import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Box, List, ListItem, ListItemText, TextField,Avatar,ListItemAvatar, InputLabel, Select, MenuItem, FormControl, ButtonBase, Modal, CardContent,Stack,Alert } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

//import axios from "axios";


import { styled } from '@mui/material/styles';
import { Button, Card, ListGroup } from "react-bootstrap";

import Layout from "./layout";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Test1 from "../Charts/test2";
import Test4 from "../Charts/test4";
import About from "./Read data from JSon file";
export const names=createContext("")

export default function Home(){
  const [purpose,setPurpose]=useState("School/College")
  
  const [open,setOpen]=useState(false)
  const [items,setItems]=useState([])
  const [namio,setNamio]=useState("")
  const [date,setDate]=useState()
  const [text,setText]=useState("")
    const [ser,setSer]=useState("")
    //const navigate=useNavigate()

  const [projectName,setProjectName]=useState("")

  const navigate=useNavigate()
  const handleopen=()=>{
      setOpen(true)

      
  }
  useEffect(()=>{
    getName()
    
  //   //navigate("...",{replace:true})

  //   window.onbeforeunload=(event)=>{
  //     //addEventListener()
  //     const e= event||window.event ||window.onmousemove(event);
  //     e.preventDefault()
  //     if(e){
  //       e.returnValue=""
  //     }
  //     return ''

  //   }
    
  //   axios.get("api1/test").then((res)=>{
  //     if(res.data["status"]==200){
  //       setItems(res.data)
  //       console.log(res.data)
  //     }
  //     else if(res["response"].status==504){
  //       console.log("Erripuka nagar model")
  //     }
  //     else{
  //       console.log(res.data)
  //       navigate("/login")
        

  //     }

  //   }).catch((err)=>{
  //     if(err.response.status==504){
  //       setNamio("Erripuka Nagar Model")
  //       console.log("Error Occured")
  //       setSer("warning")
  //       setText("Uccha Agatleda ra niku Erripuka. Backend On avala inka .. Anni muskoni Maaku Contact Chey.. Gaaji Kukka leka pote muskoni poduko ")
  //     }
  //   })
  //   setDate(new Date().getSeconds())

  },[])
  const clicke=()=>{
    const tojeb=localStorage.getItem("Neekasu")
    const newtoke=JSON.parse(tojeb)
    axios.post("http://192.168.1.203:8000/CreateProject",{
      "name":projectName,
      purpose:purpose,
      Auth:newtoke.Neekasu
    }).then((res)=>{
      console.log(res)
      if(res.status==200){

        setSer("success")
        setText("Project Created Successfully")
        setProjectName("")
      }
    }).catch((err)=>{
      console.log(err,err.response.data.Message)
      if(err.response.status==401){
        setSer("error")
        setText(err.response.data.Message)
        setTimeout(()=>{
          setSer("")
          setText("")
        },3000)
      
      }
      
    })
    
  }
  const projects=(e)=>{
    setProjectName(e.target.value)
  }
  const getName=()=>{
    try{
      const nam=localStorage.getItem("Neekasu")
    const newnam=JSON.parse(nam)
    setNamio(newnam.Name)
    }
    catch(err){
      navigate("/login")
    }
  }



  const name=useContext(names)

  const tests=()=>{
    axios.post("api2/api/add",{}).then((res)=>{
      console.log(res)
    })

  }
  const handleclose=()=>{
    setOpen(false)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    
    width: 400,
    
    backgroundColor:"white",
    border: '2px solid #000',
    
  };
  console.log(purpose)
  var k=[1,2,3]
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
      }));
    
    return(
      
        <div className="flex-auto" style={{margin:"0px"}}>
         <names.Provider value={namio}>
           
         <Layout />
          <Stack>
                        <Alert severity={ser} >{text}</Alert>
                    </Stack>
          <Modal open={open} onClose={handleclose} aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
              <Card style={{backgroundColor:"white",position:"absolute"}}>
                <h1> PRoject Details</h1>

              </Card>

            </Modal>
    
          
            
          
            <br/>
            <Box >
            <Grid container spacing={3}>
            <Grid xs >
    <Item style={{fontWeight:"bold"}}>
      Total Usage

      

      
    </Item>
    <br/>
    
    
    <Item>
    <h6 style={{textAlign:"left"}} label="He">Date: {date}</h6>
    <h2>6</h2>
    
      <h4>Request so Far</h4>
    </Item>
    <br/>
    <br/>
    <br/>
    

    <Item style={{fontWeight:"bold"}}>Projects List </Item>
    <br/>
    
    <Item style={{maxHeight:"400px",overflowY:"auto"}} elevation={3}>
    
     
      
<Test1 />
     
   
    </Item>


  </Grid>
  
  
  <Grid xs={5}  >
    <Item>Logs</Item>
    <br/>
    <Item  > 
      {/* <About /> */}
    </Item>
    
    
    
  </Grid>
  <Grid xs>
    
   
    <Item><Card.Title>Create Project</Card.Title></Item>
    <br/>
    
    <Paper>
      
   

      <Card.Body>
      <TextField label="Enter Project Name" variant="standard" style={{alignItems:"left"}} value={projectName} onChange={projects}></TextField>
        
    
       
        <br/>
        <br/>
        <FormControl >
        <InputLabel >Purpose</InputLabel>
        <Select value={purpose} label="Purpose" onChange={((e)=>setPurpose(e.target.value))} sx={{display:"flex",flex:"wrap"}}>
          <MenuItem value={"School/College"}>School/College Projects</MenuItem>
          <MenuItem value={"Learning"}>Learning /Testing Purpose</MenuItem>
          <MenuItem value={"Commercial"}>Commercial</MenuItem>
        </Select>
        </FormControl>&nbsp;&nbsp;
        
       
       
        {/* <TextField id="standard-basic" label="Email" variant="standard" disabled value={items.email} />&nbsp;&nbsp; */}
        <br/>
        <br/>
        <Button onClick={clicke}>Create Project</Button>
        <Test4 />
       
        <br/>
        <br/>
        <p>Note: Please remeber your Project name to generate API Key other wise Sab Miti Mein Mil gaya</p>
       

      </Card.Body>
      </Paper>
      <br/>
      <br/>
      <br/>
      <Item>
      
      <Card.Title>Generate API Key</Card.Title>

      <Card.Body>
        <br/>
        <br/>
        <TextField   label="Enter Project Name" variant="standard" disabled  ></TextField>&nbsp;&nbsp;
        <br/>
        <br/>
        <Button>Generate  Key</Button>
        <br/>
        
        
        
        <p>Note: Please remeber your Project name to generate API Key other wise Sab Miti Mein Mil gaya</p>
       

      </Card.Body>
      </Item>
  </Grid>
  
</Grid>
<br/>
            </Box>
            
          

         </names.Provider>
           
        </div>
    )
}