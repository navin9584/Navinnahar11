import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchApi =createAsyncThunk(async()=>{
const res = await fetch('api');
const result = res.json()
return result;

})


const dataSlice = createSlice({
    name:'products',
    initialState:{
        data:null,
        isLoader:false,
        isError:false
    },
    extraReducers:builder=>{
        builder.addCase(fetchApi.pending, (state, action )=>{
            state.isLoader = true;
        });
        builder.addCase(fetchApi.fulfilled, (state, action )=>{
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(fetchApi.rejected, (state, action )=>{
            state.isLoader = false;
            state.isError = true;
        })


    }
})

export default dataSlice.reducer;