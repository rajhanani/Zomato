import React from 'react'
import "./Header.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Header = ({formodel,forlogin}) => {
  const [show, setshow] = useState(false)

  const navigate=useNavigate()

  const gotosignup=()=>{
   navigate("/signup")
  }

  // if(!show){
  //   return null
  // }
  

  return (
    <div>
<header>
 <div className='nav'>
  
      <div>
        <h4>Get the app</h4>
      </div>

      <ul className='nav_bar'>
      <li>Invester Relation</li>
       <li>Add Restaurant</li>
       {/* <li><NavLink to="/signup" onClick={()=>setshow(true)}>Signup</NavLink></li> */}
       <li onClick={formodel}>Signup</li>

       <li onClick={forlogin}>Login</li>
       </ul>
</div>

      <div className='heads'>
        <img className='logo' src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"></img>
       <h1>Discover the best food & drinks in Vadodara</h1>


       <div className='search'>

       <i class="fa-solid fa-location-dot"></i>
      <select className='select'>
<option value="0">Vadodara</option>
<option value="0">Ahemdabad</option>
<option value="0">Surat</option>  
</select>

      <i class="fa-solid fa-magnifying-glass"></i>
      <input type='text' placeholder='search for resturant,cuisine or a dish'></input>
       </div>

      </div>

    <div className='main_img'>
<img src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'></img>
      </div>
      
   

    </header>
    </div>
  )
}
