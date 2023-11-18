import React, { useEffect } from 'react';
import { useState } from 'react';
import { Dishes } from '../header/Dishes'
import { Cards } from "../Cards/Cards"
import { Morecollection } from "../more/Morecollection"
import { Accoridian } from "../../landingpage/accoridian/Accoridian"
import { Footer } from '../../landingpage/footer/Footer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { filteritems } from '../Cards/CardSlice'


export const Productitems = () => {
  const [searchfilter, setsearchfilter] = useState([]);
  const [seaproduct, setseaproduct] = useState("");

  const dispatch = useDispatch();

  const vip = searchfilter.filter(item => item.item_category.toLowerCase().includes(seaproduct))

  useEffect(() => {
    axios.get("http://localhost:9000/carditems").then((res) => setsearchfilter(res.data))
  }, [])


  useEffect(() => {
    if (seaproduct == "") {
      setsearchfilter(searchfilter)
    } else {
      setsearchfilter(vip);
    }
  }, [seaproduct])


  const getproduct = (event) => {
    setseaproduct(event)
  }

  // if (seaproduct === "") {
  //   return searchfilter;
  // } else {
  //   const vip = searchfilter.filter(item => item.item_category.toLowerCase().includes(seaproduct))
  //    setsearchfilter(vip);
  // }


  return (

    <div>
      <Dishes
        getproduct={getproduct} seaproduct={seaproduct} />
      <Cards
        searchfilter={searchfilter}
      />
      <Morecollection />
      <Accoridian />
      <Footer />
    </div>
  )
}
