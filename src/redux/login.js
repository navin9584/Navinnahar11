import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {setLoginCred} from '../component/localStorage'
export const LoginAction = createAsyncThunk('fetchApi', async (data) => {
    try{
    const formData = new FormData();
    formData.append('email',  data.email);
    formData.append('password',  data.password);
    // console.log('data>>>>>', formData);
    
    let obj = {
        method: 'POST',
        body: formData,
      };
     
    const res = await fetch('https://framedekho.in/servayapp/Api/login', obj);
    const result = await res.json()
    if(result.error == false){
        await setLoginCred(result.userdata)
    }
    // console.log('response>>>>', result);
    return result;
    }catch(error){
        // console.log('error>>>>',error)
    }
    

})


const LoginSlice = createSlice({
    name: 'products',
    initialState: {
        data: null,
        isLoader: false,
        isError: false
    },
    extraReducers: builder => {
        builder.addCase(LoginAction.pending, (state, action) => {
            state.isLoader = true;
        });
        builder.addCase(LoginAction.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(LoginAction.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        })


    }
})

export default LoginSlice.reducer;