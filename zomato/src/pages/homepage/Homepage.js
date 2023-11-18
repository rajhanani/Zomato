import React from 'react';
import "./Homepage.css"
import {Header} from '../../components/homepage/header/Header'
import {Section} from '../../components/homepage/sec_1/Section'
import {Collection} from '../../components/homepage/collection/Collection'
import {Banner} from '../../components/homepage/banner/Banner'
import {Location} from '../../components/homepage/location/Location'
import {Accoridian} from '../../components/homepage/accoridian/Accoridian'
import {Footer} from '../../components/homepage/footer/Footer'
import { Model } from '../../components/homepage/model/Model';
import { useState } from 'react';
import {Signup} from "../../components/Register/signup/Signup";
import { Login } from '../../components/Register/login/Login';

export const Homepage = () => {
const [opensignup, setopensignup] = useState(false)

const [openlogin, setopenlogin] = useState(false);

const showsignup=()=>{
  setopensignup(true)
}

const showlogin=()=>{
  setopenlogin(true)
}

  return (
    <div id='home'>

<div id="comp_heder">
<Header 
   forsignup={showsignup}
   forlogin={showlogin} />
</div>

<div id='sign'>
{ opensignup && <Signup  closebtn={setopensignup}/>}
</div>

<div id='log'>
{ openlogin && <Login  closelog={setopenlogin}/>}
</div>

<div id="comp_section">
<Section />
</div>

<div id="comp_collection">
 <Collection/>
</div>

<div id="comp_banner">
<Banner/>
</div>

<div id="comp_location">
  <Location/>
</div>

<div id="comp_accoridian">
<Accoridian/>
</div>

<div id="comp_footer">
<Footer/>
</div>

    </div>
  )
}
