import React from 'react';
import "./Homepage.css"
import {Header} from '../header/Header'
import {Section} from '../sec_1/Section'
import {Collection} from '../collection/Collection'
import {Banner} from '../banner/Banner'
import {Location} from '../location/Location'
import {Accoridian} from '../accoridian/Accoridian'
import {Footer} from '../footer/Footer'
import { Model } from '../Model';
import { useState } from 'react';
import {Signup} from "../../signup/Signup"
import { Login } from '../../login/Login';

export const Homepage = () => {
const [openmodel, setopenmodel] = useState(false);

const [openlogin, setopenlogin] = useState(false);

const formodel=()=>{
  setopenmodel(true)

  if(setopenmodel){
    document.getElementById("comp_heder").style.opacity=.2
    document.getElementById("comp_section").style.opacity=.1
    document.getElementById("comp_collection").style.opacity=.1
    document.getElementById("comp_banner").style.opacity=.1
    document.getElementById("comp_location").style.opacity=.1
    document.getElementById("comp_accoridian").style.opacity=.1
    document.getElementById("comp_footer").style.opacity=.1
  }else{


  }
  
}



const forlogin=()=>{
  setopenlogin(true)

  if(setopenlogin){
    document.getElementById("comp_heder").style.opacity=.1
    document.getElementById("comp_section").style.opacity=.1
    document.getElementById("comp_collection").style.opacity=.1
    document.getElementById("comp_banner").style.opacity=.1
    document.getElementById("comp_location").style.opacity=.1
    document.getElementById("comp_accoridian").style.opacity=.1
    document.getElementById("comp_footer").style.opacity=.1
  }else{

  }

}



  return (
    <div id='comn'>

<div id="comp_heder">
<Header 
  formodel={formodel}
   forlogin={forlogin}/>
</div>

<div id='sign'>
{ openmodel&&<Signup  closebtn={setopenmodel}/>}
</div>

<div id='log'>
{ openlogin&&<Login  closelog={setopenlogin}/>}
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
