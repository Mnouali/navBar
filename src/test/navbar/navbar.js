import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import barca from"../images//pngwing.com (1).png"
import city from"../images/pngwing.com (2).png"
import bayaren from"../images/pngwing.com (3).png"
import madrid from"../images/pngwing.com.png"
import "./testNavbar.css";
export default function TestNavbar() {
    const [hideen,setHiden]=useState(false)
    const show=()=>{
        setHiden(!hideen)
       if (hideen) {
        document.querySelector("nav").classList.remove("navChow")
        document.querySelector("nav").classList.add("navHidden")
       }
       else{
        document.querySelector("nav").classList.remove("navHidden")
        document.querySelector("nav").classList.add("navChow")
       }
    }
  return (
    <div>
          <menu style={{width:"100%",height:'50px',backgroundColor:"white"}}>
            <img src={city}/>
            <img src={madrid}/>
            <img src={barca}/>
            <img src={bayaren}/>
          </menu>
         <header>
          {hideen?<IoMdClose className='iconMen' size={50}  color='white' onClick={show}/> :<MdMenu className='iconMen' size={50}  color='white' onClick={show}/>}
             <h1>nFootball</h1>     
             <nav className='navChow'>
                <ul>
                    <li className='NavIl'>Home</li>
                    <li className='NavIl'>Create team</li>
                    <li className='NavIl'>My team</li>
                    <div className='div1'>
                         <li style={{marginRight:"10px"}}>Sign in</li>
                         <li style={{marginRight:"20px"}}>Sign up</li>
                    </div>
                </ul>
             </nav>
         </header>
         <div style={{height:"1000px"}}>

         </div>

    </div>
  )
}
