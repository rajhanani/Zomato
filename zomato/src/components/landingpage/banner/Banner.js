import React from 'react'
import "./Banner.css"

export const Banner = () => {
  return (
    <div className='ban_sec'>

<div className='flex contect'>
<img src="https://b.zmtcdn.com/data/o2_assets/a500ffc2ab483bc6a550aa635f4e55531648107832.png"></img>

<div className='address'>

<h2>Get the Zomato app</h2>
<p>We will send you a link, open it on your phone to download the app</p>

{/* ................ */}
<div className='flex radio'>
<div >
    <input type="radio" name='fill' id='email' checked></input>
    <label>Email</label>
</div>

<div >
    <input type="radio" name='fill' id='phone'></input>
    <label>Phone</label>
</div>
</div>
{/* ................... */}

{/* ......... */}
<div className='flex email'>
    <input type="text" className='input'></input>
    <label className='place'>Email</label>
    <button>Share app Link</button>
</div>
{/* ................. */}

<p className='dowload'>dowload app Link</p>
{/* ............ */}
<div className='flex app'>
<img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"></img>
<img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"></img>
</div>
{/* ............... */}

</div>

</div>

</div>
   
  )
}
