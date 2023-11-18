import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// First, create the thunk
export const collectiondetails=createAsyncThunk(
    'collectiondata',
    async ()=>{
       const collectiondata =axios.get("http://localhost:9000/collections").then( (res)=>res.data)
       return collectiondata
    }
 )


export const collectionSlice= createSlice({
name:'collection',
initialState:{
    oldcollection:[],
    newcollection:[]
},

reducers:{

},
extraReducers:{
    [collectiondetails.fulfilled]:(state,action)=>{
      state.newcollection = action.payload
      console.log(action.payload)
     },


}

})

export const {getuser}= collectionSlice.actions;
export default collectionSlice.reducer;