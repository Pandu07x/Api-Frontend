import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { Button, Card, CardGroup, Dropdown } from "react-bootstrap";
import Layout from "./layout";
import SideBars from "../Charts/test5";
var data=[{
    "name":"A",
    "price":10
},
{
    "name":"B",
    "price":25

},
{
    "name":"C",
    "price":3

},
{
    "name":"D",
    "price":45

},
{
    "name":"E",
    "price":5

},{
    "name":"F",
    "price":63

},
{
    "name":"G",
    "price":79

}
,
{
    "name":"H",
    "price":28

},{
    "name":"I",
    "price":19

},{
    "name":"J",
    "price":10

}
]
export default function Testing(){
    var [datas,setDatas]=useState([])
    const [name,setName]=useState("default")
    console.log(name)
    
    console.log(datas)
    const sorts=()=>{
        const temp=datas
        const ali=temp.sort((a,b)=>{
            if(a.name>b.name){
                return -1
            }
        })
        console.log(ali)
        setDatas([...ali])
    }
    const sort2=()=>{
        const temp=datas
        const ali=temp.sort((a,b)=>{
            if(a.name<b.name){
                return -1
            }
        })
        setDatas([...ali])
    }
    const getdata=()=>{
        setDatas(data)
    }
    const Sort=(s)=>{
        const temp=datas
        const ali=datas.sort((a,b)=>{
            if(s=="a-z"){
                if(a.name<b.name){
                    return -1
                }
            }
            else if( s=="z-a"){
                if(a.name>b.name){
                    return -1
                }
            }
            else if (s=="price>"){
                if(a.price>b.price){
                    return -1
                }

            }
            else if(s=="price<"){
                if(a.price<b.price){
                    return -1
                }
            }
        })
        setDatas([...ali])
        

    }
    return(
        <div>
            <Layout />
            
            <InputLabel id="pop">Sort</InputLabel>
            <Select value={name} label="Sort" id="pop" onChange={((e)=>setName(e.target.value))}>
            
                <MenuItem value={"A-Z"} onClick={(()=>Sort("a-z"))}> A-Z</MenuItem>
                <MenuItem value={"Z-A"} onClick={(()=>Sort("z-a"))}>Z-A</MenuItem>
                <MenuItem value={"1-0"} onClick={(()=>Sort("price>"))}>1-0</MenuItem>
                <MenuItem value={"0-1"} onClick={(()=>Sort("price<"))}>0-1</MenuItem>

            </Select>
           
           
           <Button type="button" onClick={getdata}>Clicke</Button>
          
           <div className="row">
            
            {
                datas.map((item,index)=>(
                    
                        
                    
                        <div class="col-sm-4">  
                        <Card >
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Body>
                                <h4>{item.price}</h4>
                            </Card.Body>
                        
                        </Card>
                        <br/>
                        </div>
            
                       

                        
                       
                    
                ))
            }
            
            </div>
            
            

        </div>
    )

}