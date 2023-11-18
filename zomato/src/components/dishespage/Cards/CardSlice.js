import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// First, create the thunk
export const carddetails=createAsyncThunk(
    'carddata',
    async ()=>{
       const carddata =axios.get("http://localhost:9000/carditems").then( (res)=>res.data)
       return carddata
    }
 )

 export const firstproduct=createAsyncThunk(
    'firstproductdata',
    async ()=>{
       const firstproductdata =axios.get("http://localhost:9000/orderitems").then( (res)=>res.data)
       return firstproductdata
    }
 )


export const cardSlice= createSlice({
name:'collection',
initialState:{
    oldcollection:[],
    newitem:[],
    newproduct:[],
    newfilter:[]
},

reducers:{

   filteritems:(state,action)=>{
      state.newitem=state.newfilter.filter(item=>item.item_category.toLowerCase().includes(action.payload))
   }
   
},


extraReducers:{
    [carddetails.fulfilled]:(state,action)=>{
      state.newitem = action.payload
      state.newfilter=action.payload

      console.log(action.payload)
     },
     [firstproduct.fulfilled]:(state,action)=>{
        state.newproduct = action.payload
        console.log(action.payload)
       },


}

})

export const {filteritems}= cardSlice.actions;
export default cardSlice.reducer;