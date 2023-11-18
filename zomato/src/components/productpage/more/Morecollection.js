import React, { useEffect } from 'react'
import "./Morecollection.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { morecollectiondetails } from './MoreSlice';

export const Morecollection = () => {

    const getitem = useSelector( (state)=>state.more.newmorecollection)
    console.log(getitem);

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch( morecollectiondetails());
        },[])
  return (
    <div>

        <div className='coll_cards_main'>
            <h2>More Collections</h2>
           <div className='coll_cards'>
     {   
     
        getitem.map( (ele,id)=>{
            return (
            <>    
    <div className='morecollection_2'>

    <div className='morebox_1'>
    <div><span>Trending This Week <br></br>4 Places </span><i class="fa-solid fa-caret-right"></i></div>
    <img src="https://b.zmtcdn.com/data/collections/a9aef17423b92b3f8632c4b1887c2839_1647259955.jpg?output-format=webp"></img>
</div>
</div>
</>
            )})
}
            </div>
            
        </div>

    </div>
  )
}
