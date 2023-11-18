import React, { useEffect } from 'react';
import "./Login.css";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {getlogin,logindetails } from '../login/RegisterSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Login = ({closelog}) => {
  const [loged, setloged] = useState({
    email:""
  });
  const getitem =useSelector( (element)=>element.regi.userarray);
  console.log(getitem);

  const dispatch = useDispatch();
  const navigate=useNavigate();

  useEffect( ()=>{
    dispatch(getlogin(loged));
    console.log(loged)
  },[loged])



  let name,value
  const handleuserdata=(e)=>{
    
    name=e.target.name;
    value=e.target.value;
    setloged([{...loged,[name]:value}]);

}

const handlesubmit=()=>{
  dispatch(logindetails());  
}

const handles=()=>{
  if(getitem.email){
    navigate("/")
  }else{
    alert("User has Not Login")
  }
}

  return (
    <div>
        <div className='main_sign'>
        <h2>Login</h2>
        <button onClick={()=>closelog(false)}>close</button>

        <div className='login_inputs'>
        <i class="fa-solid fa-globe"></i>
         <select className='select_login'>
<option value="0">+91</option>
<option value="0">+60</option>
<option value="0">+41</option>  
</select>
        <input type="tel" placeholder='Phone' name='phone' onChange={handleuserdata}></input><br></br>
        </div>

        <div className='login_email'>
        <input type="text" placeholder='Email' name='email' onChange={handleuserdata}></input>
        </div>

        <div class="center_btn">
        <button onClick={handlesubmit}>Login</button>
          </div>

          <div class="center_btn">
        <button onClick={handles}>Go To Product page</button>
          </div>

          <div class="google_link">
          <i class="fa-solid fa-envelope"></i>
          <a href='#google'>Continue With Email</a>
          </div>  

          <div class="google_link">
          <i class="fa-brands fa-google"></i>
          <a href='#google'>Continue With google</a>
          </div>   
      <p className='login_link'>New to Zomato?  <span><a href=''>Create account</a></span></p>
        
        </div>
    </div>
  )
}
