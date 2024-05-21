import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Testing from "../components/testing";

export default function SideBars(props){
    const [status,setStatus]=useState(false)
    const handle=()=>{
        setStatus(true)
    }

    return(
        <div>
            
            <div>
            <Sidebar style={{height:"94vh",flex:'auto'}}> 
            <Menu>
        <SubMenu label="Charts">
        <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>

            </Sidebar>
            </div>
           
            

        </div>
    )
}