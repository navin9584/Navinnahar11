import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const SearchDataFromListApi = createAsyncThunk('FormListApi', async (data) => {
    // console.log('dataMMMMMMMMMM',data);
    try{
    const formData = new FormData();
    formData.append('user_id',  data.user_id);
    formData.append('search',  data.search);
    
    let obj = {
        method: 'POST',
        body: formData,
      };
     
    const res = await fetch('https://framedekho.in/servayapp/Api/searchwithvoter', obj);
    const result = await res.json()
    console.log('response>>>>//////////////////', result);
    return result;
    }catch(error){
        console.log('error>>>>',error)
    }
    

})


const SearchDataListSlice = createSlice({
    name: 'products',
    initialState: {
        data: null,
        isLoader: false,
        isError: false
    },
    extraReducers: builder => {
        builder.addCase(SearchDataFromListApi.pending, (state, action) => {
            state.isLoader = true;
        });
        builder.addCase(SearchDataFromListApi.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(SearchDataFromListApi.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        })


    }
})

export default SearchDataListSlice.reducer;