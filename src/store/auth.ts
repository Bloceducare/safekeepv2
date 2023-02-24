import { createSlice } from "@reduxjs/toolkit";
  
const initialAuth = {
    address:null,
    accessToken:null
} 

export const Auth = createSlice({
  name: "auth",
  initialState: {
    auth:initialAuth, 
  },
  reducers: {  
    login: (state, {payload}) => {  
        console.log(payload, "payload!!!!") 
        state.auth = payload        
    },
    logout: (state) => {    
        state.auth = initialAuth    
   },
   },
});


// Action creators are generated for each case reducer function
export const {
 login,
 logout
} = Auth.actions;

export default Auth.reducer;