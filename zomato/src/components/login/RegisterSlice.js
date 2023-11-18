import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const logindetails=createAsyncThunk(
    'logindata',
    async ()=>{
       const signupdata =axios.get("http://localhost:9000/posts").then( (res)=>res.data)
       return signupdata
    }
 )


export const registerSlice= createSlice({
name:'register',

initialState:{
    users:{
        email:""
    },
    userarray:""
},

reducers:{
    getlogin:(state,action)=>{
        state.users=action.payload;
        console.log(state.users);     
}, 

},

extraReducers:{
    [logindetails.fulfilled]:(state,action)=>{
        state.userarray=action.payload.find( el=>{
            return el.email==state.users[0].email
         });

        console.log(state.userarray);        
    
    
     },


}

})

export const {getlogin}= registerSlice.actions;
export default registerSlice.reducer;