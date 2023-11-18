import React from 'react'
import "./OrderForm.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


export const OrderForm = () => {
    const [order, setorder] = useState({

        name:"",
        email:"",
        number:"",
        city:"",
    })

    let name,value;
   
    const handleorder =(e)=>{
   name=e.target.name;
   value=e.target.value;
   setorder({...order, [name]: value})
   console.log(order)
  }

  const navigate = useNavigate();
  var regex = /^[1-9][0-9]{9,9}$/                    //For phone number
  var regexemail =/^([a-z 0-9\.-]+)@([a-z]+).([a-z]{2,3})$/   //for Email

  async function handlesubmit(){

    try{
        if(order.name!=""&& order.email!=""&& order.number!="" && order.city!==""){

            if(regexemail.test(order.email)){
    
                  if(regex.test(order.number)){
                    
                // await axios.post("http://localhost:5000/posts", order)
                //  console.log(order);
                alert("Order Placed Successfully")

                 }else{
                 document.getElementById("numbererror").innerHTML="**Number is Not valid"
                  }
    
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
    <div className='main_div'>
    <div className='main'>

<div className='sign'>
    <h2>ORDER DETAILS</h2>
</div>

     <div className='form'>
    <input type="text" className='input_filed' placeholder='Enter Name' onChange={handleorder} name='name' ></input><br></br>

    <input type="email" className='input_filed' placeholder='Enter Email' onChange={handleorder} name='email'  ></input>
    <span id='emailerror'></span>
    <br></br>

    <input type="tel"   className='input_filed' placeholder='Enter Number' onChange={handleorder} name='number' required ></input>
    <span id='numbererror'></span>
    <br></br>

    <input type="text" className='input_filed' placeholder='Enter City' onChange={handleorder} name='city' ></input><br></br>

    <button type='button' className='btn' onClick={handlesubmit} >SUBMIT</button><br></br>
</div>

</div>
    </div>
  )
}
