
import { Alert } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectList(props){

   
    const [projectlist,setProjectList]=useState([])
    const [text,setText]=useState("")
    const [ser,setSer]=useState("")
    const getKey=localStorage.getItem("Neekasu")
    const navigate=useNavigate()
    const timeoutValue=[]
    const timeout=[1,2,3,4,5]
    const keydata=JSON.parse(getKey)
    const getProjectList=async()=>{
        axios.post("http://192.168.1.203:8000/getProjects",{
            Auth:keydata["Neekasu"]
        }).then((res)=>{
            setSer("")
            setText("")
            console.log(res)
            if(res.status==200){
                setProjectList(res.data)
                console.log(projectlist)
            }
           
        }).catch((err)=>{
            if(err.response.status==410){
                timeout.reverse().map((item,index)=>{
                    setSer("info")
                    if(index==0){
                        setText(`You Will be Logged Out in ${item}`)
                    }else{
                        setInterval(()=>{
                    setText(`You Will be Logged Out in ${item}`)
                        },1000)
                    }
                    if(index==timeout.length-1){
                        navigate("/login")
                    }
                  
                })
//geld


            }
            else{
                setSer("error")
                setText("Something Went Wrong! Try Again Later")
            }
        })
    }
    useEffect(()=>{
getProjectList()
    },[])

    
    return(
        <div  >
            <Alert severity={ser}>{text}</Alert>
            
               
                    {
                        projectlist.length>0?
                        projectlist.map((item)=>(
                            <div>
                               <h5>{item.Name}</h5>
                                
                                <hr></hr>
                            </div>
                        )):<h1>Welcome To Api Space!! Lets Create New API</h1>
                    }
                

           
            
        </div>
    )
}