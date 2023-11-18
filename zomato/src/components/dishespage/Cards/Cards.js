import React, { useEffect } from 'react'
import "./Cards.css";
import { carddetails } from './CardSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Cards = ({searchfilter}) => {

    const getitem = useSelector( (state)=>state.card.newitem)
    console.log(getitem);

    const dispatch = useDispatch()
    const navigate=useNavigate()

    useEffect( ()=>{
        dispatch( carddetails());
        },[])

        const gotoOrder=()=>{
         navigate("/orderpage")
        }

  return (

    <div className='cards'>
{
  getitem.map( (ele,id)=>{
    return (
    <>  
<div className='card_item' onClick={gotoOrder}>
    <div className='card_img'>
        <img src={ele.item_image}></img>
    </div>

<div className='item_details'>
<h3>La Milano Pizzeria</h3>
<p>{ele.item_category}</p>
<p>{ele.item_location}</p>
</div>

{/* <div className='order_btn'>
<button >Order</button>
</div> */}

</div>


</>

)})

}
    </div>
  )
}
