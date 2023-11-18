import React from 'react'
import "./Dishes.css";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {filteritems} from '../Cards/CardSlice'


export const Dishes = ({getproduct, seaproduct}) => {

  const inputref=useRef(null);
  const dispatch= useDispatch()

  const filterproduct =()=>{
   dispatch(filteritems(inputref.current.value))
  };
  

  return (
    <div>

<div>
<div className='head_one'>
        
   <div className='search_head'>
    
  <i class="fa-solid fa-location-dot"></i>
  <select className='select_head'>
<option value="0">Vadodara</option>
<option value="0">Ahemdabad</option>
<option value="0">Surat</option>  
</select>
  <i class="fa-solid fa-magnifying-glass"></i>
 <input type='text' placeholder='search for resturant,cuisine or a dish' 
//  value={seaproduct}
  ref={inputref}
  // onChange={(e)=>getproduct(e.target.value)} 
  onChange={filterproduct}
  >

 </input>

    </div>
    </div>

</div>


      
 <header className='hed'>    
<div className='header_content'>
  <h1>Trending This Week</h1>
  <p>Most popular restaurants in town this week.</p>
   <span>29 Places</span>
</div>

        <div className='main_img'>
<img src="https://b.zmtcdn.com/data/collections/cf6a44b75c5fd3c449d8a7aec00d8c38_1647259955.jpg?output-format=webp&fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*"></img>
        </div>
      </header>

    </div>
  )
}
