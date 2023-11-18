import React, { useEffect } from 'react'
import "./Ordercard.css";
import { firstproduct } from '../dishespage/Cards/CardSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Ordercard = () => {
    const getitem = useSelector( (state)=>state.card.newproduct)
    console.log(getitem);

    const dispatch = useDispatch()
    const navigate =useNavigate()

    useEffect( ()=>{
        dispatch( firstproduct());
        },[])

        const orderplace=()=>{
         navigate("/orderform")
        }

  return (

    <div>
<div className='orders'>

    {
   getitem.map( (ele,id)=>{
    return (
    <>  
<div className='order_item'>
    <div className='order_img'>
     <img src={ele.item_image}></img>
    </div>

<div className='order_details'>
<h3>La Milano Pizzeria</h3>
<p>{ele.item_category}</p>
<p>{ele.item_location}</p>
</div>

<div className='orders_btn'>
<button onClick={orderplace}>Place Order</button>
</div>

</div>

</>

)})

}
    </div>

    </div>
  )
}
