import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const FormListApi = createAsyncThunk('FormListApi', async (data) => {
    // console.log('dataMMMMMMMMMM',data);
    try{
    const formData = new FormData();
    formData.append('user_id',  data.user_id);
    
    let obj = {
        method: 'POST',
        body: formData,
      };
     
    const res = await fetch('https://framedekho.in/servayapp/Api/list', obj);
    const result = await res.json()
    console.log('responseformlist>>>>', result);
    return result;
    }catch(error){
        console.log('errorlistdatarequest>>>>',error)
    }
    

})


const FormListlSlice = createSlice({
    name: 'products',
    initialState: {
        data: null,
        isLoader: false,
        isError: false
    },
    extraReducers: builder => {
        builder.addCase(FormListApi.pending, (state, action) => {
            state.isLoader = true;
        });
        builder.addCase(FormListApi.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(FormListApi.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        })


    }
})

export default FormListlSlice.reducer;