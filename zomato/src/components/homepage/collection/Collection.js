import React, { useEffect } from 'react'
import "./Collection.css"
import { useSelector } from 'react-redux';
import { getuser } from './CollectionSlice';
import { useDispatch } from 'react-redux';
import { collectiondetails } from './CollectionSlice';
import { useNavigate } from 'react-router-dom';

export const Collection = () => {
    const getitem = useSelector( (state)=>state.user.newcollection)
    console.log(getitem);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect( ()=>{
    dispatch( collectiondetails());
    },[])

    const gotoproductpage=()=>{
    navigate("/productspage")
    }

  return (
    <div>

<div className='collection_main'>

<div className='collction_1'>
    <h2>Collection</h2>
    <div>
        <h6>Explore curated lists of top restaurants, cafes, pubs, and bars in Vadodara, based on trends</h6>
        <span>All collections in Vadodara <i class="fa-solid fa-caret-right"></i></span>
    </div>
</div>

<div className='collection_2'>
{
    getitem.map( (ele,id)=>{
        return (
        <>
    <div className='box_1' onClick={gotoproductpage}>
    <div><span>{ele.name} <br></br>{ele.places} </span><i class="fa-solid fa-caret-right"></i></div>
    <img src={ele.collectionimg}></img>
</div>
</>
)

})

}

</div>

     </div>
    </div>
  )
}
