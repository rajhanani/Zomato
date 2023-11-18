import {configureStore} from "@reduxjs/toolkit";
import userfindreducer from "../landingpage/collection/CollectionSlice";
import locationfindreducer from "../landingpage/location/LocationSlice";
import registerfindreducer from "../login/RegisterSlice";
import cardfindreducer  from '../dishespage/Cards/CardSlice';
import morefindreducer  from '../dishespage/more/MoreSlice';

export default configureStore({
    reducer:{
        user:userfindreducer,
        loc:locationfindreducer,
        regi:registerfindreducer,
        card:cardfindreducer,
        more:morefindreducer

    }
})