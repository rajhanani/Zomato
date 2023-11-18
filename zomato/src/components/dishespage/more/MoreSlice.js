import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// First, create the thunk
export const morecollectiondetails=createAsyncThunk(
    'morecollectiondata',
    async ()=>{
       const morecollectiondata =axios.get("http://localhost:9000/morecollection").then( (res)=>res.data)
       return morecollectiondata
    }
 )


export const morecollectionSlice= createSlice({
name:'morecollection',
initialState:{
   
    newmorecollection:[]
},

reducers:{

},
extraReducers:{
    [morecollectiondetails.fulfilled]:(state,action)=>{
      state.newmorecollection = action.payload
      console.log(action.payload)
     },


}

})

export const {}= morecollectionSlice.actions;
export default morecollectionSlice.reducer;