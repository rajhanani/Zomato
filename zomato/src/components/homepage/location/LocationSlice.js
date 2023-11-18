import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// First, create the thunk
export const locationdetails=createAsyncThunk(
    'locationdata',
    async ()=>{
       const locationdata =axios.get("http://localhost:9000/locations").then( (res)=>res.data)
       return locationdata
    }
 )

export const locationSlice= createSlice({
    name:'location',
    initialState:{
        oldlocation:[],
        newlocation:[]
    },
    
    reducers:{
    
    },
    extraReducers:{
        [locationdetails.fulfilled]:(state,action)=>{
            state.newlocation = action.payload
            console.log(action.payload)
           },
    }
    

})

export const {}= locationSlice.actions;
export default locationSlice.reducer;