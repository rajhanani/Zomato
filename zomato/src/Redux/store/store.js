import {configureStore} from "@reduxjs/toolkit";
import userfindreducer from "../../components/homepage/collection/CollectionSlice";
import locationfindreducer from "../../components/homepage/location/LocationSlice";
import registerfindreducer from "../../components/Register/login/RegisterSlice";
import cardfindreducer  from '../../components/productpage/Cards/CardSlice';
import morefindreducer  from '../../components/productpage/more/MoreSlice';

export default configureStore({
    reducer:{
        user:userfindreducer,
        loc:locationfindreducer,
        regi:registerfindreducer,
        card:cardfindreducer,
        more:morefindreducer

    }
})