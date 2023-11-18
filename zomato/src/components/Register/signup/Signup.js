import React from 'react';
import "./Signup.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signup = ({closebtn}) => {
  const [user, setuser] = useState({
    name:"",
    email:""
  })

  let name,value;
    const handleuser =(e)=>{
   name=e.target.name;
   value=e.target.value;
   setuser({...user, [name]: value})
   console.log(user)
  }

  

  const navigate = useNavigate();
  var regex = /^[1-9][0-9]{9,9}$/                    //For phone number
  var regexemail =/^([a-z 0-9\.-]+)@([a-z]+).([a-z]{2,3})$/   //for Email


  async function handlesubmit(){

    try{
        if(user.name!=""&& user.email!=""){

            if(regexemail.test(user.email)){
                await axios.post("http://localhost:9000/posts", user)
                 console.log(user);
                 navigate("/login");
            }else{
                  document.getElementById("emailerror").innerHTML=" **Email is Not valid";
            }
            
        }else{
                alert("All Fileds are required");
               }

    }catch(error){
        console.log("something went wrong")
           }
}


  return (
    <>
    <section className='mysign'>

        <div className='main_sign'>
        <h2>Signup</h2>
        
        <button onClick={()=>closebtn(false)}>close</button>
        <div className='inputs'>
            <input type="text" placeholder='Full Name' name='name' onChange={handleuser}></input>
            <span id='emailerror'></span>
            <br></br>
            <input type="text" placeholder='Email' name='email' onChange={handleuser}></input>
        </div>

        <div className='terms'>
            <input type="checkbox" className='check'></input>
            <p>I agree to zomato's <span className='term_red'>Terms of services,Privecy Policy</span> and <span className='term_red'>Content Polices</span></p>
        </div>

        <div class="center_btn">
        <button onClick={handlesubmit} >Create account</button>
          </div>
          
          <div class="google_link">
          <i class="fa-brands fa-google"></i>
          <a href='#google'>Continue With google</a>
          </div>

      <p className='login_link'>Already have an account?  <span><a href=''>Login</a></span></p>
      
        </div>

</section>
    </>
  )
}
