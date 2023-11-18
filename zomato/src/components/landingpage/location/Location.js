import React, { useEffect } from 'react'
import "./Location.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { locationdetails } from './LocationSlice';

export const Location = () => {
    const getlocation = useSelector( (state)=>state.loc.newlocation)
    console.log(getlocation);

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(locationdetails());
    },[])

  return (
    <div className='loc'>
     <h1>Popular localities in and around Vadodara</h1>

     <div className='main_loc'>
        {

       getlocation.map( (el,id)=>{
        return(
            <>       
         <div className='loc_1'>
        <div><span>{el.placename}<br></br>{el.numberofplaces}</span> <i class="fa-solid fa-caret-right"></i></div>
        </div>
        </>
)
})

}
     </div>

    </div>
  )
}
