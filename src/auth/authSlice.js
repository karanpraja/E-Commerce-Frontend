import { createAsyncThunk,  createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./authAPI";


const initialState={
    user:[],
    status:'idle'
}
export const fetchUserDataAsync=createAsyncThunk(
  'user/fetchUserData', async(user)=>{
const response=await fetchUserData(user)
// const data=await response.json()
console.log(response.data)
return response.data
    }
)//no curly brackets are allowed!!
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
increment:(state)=>{
    state.user=null
}
    },
    extraReducers:(builder)=>{
builder.
addCase(
fetchUserDataAsync.pending,(state)=>{
    state.status='loading'
}
).addCase(
fetchUserDataAsync.fulfilled,(state,action)=>{
    state.status='idle';
    state.user=action.payload;
}
)
    }
})
export const {user,status}=authSlice.actions
export const selectedUser=(state)=>(state.auth.user)
export default authSlice.reducer