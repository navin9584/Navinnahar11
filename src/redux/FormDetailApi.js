import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const FormDetailAction = createAsyncThunk('FormDetailAction', async (data) => {
    console.log('dataMMMMMMMMMMlocaLLLLL/////////////', data); 
    try {
            const formData = new FormData();
            formData.append('datafrom', JSON.stringify(data));
            let obj = {
                method: 'POST',
                body: formData,
            };

            console.log('formData>>>>>>',obj);
            const res = await fetch('https://umangsinghar.org/DataCollector/Api/bulkservay', obj);
            const result = await res.json()
            return result;
        // })
        // console.log('data>>>>>', formData)
    } catch (error) {
        console.log('errorformdatarequest>>>>', error)
    }


})


const FormDetailSlice = createSlice({
    name: 'products',
    initialState: {
        data: null,
        isLoader: false,
        isError: false
    },
    extraReducers: builder => {
        builder.addCase(FormDetailAction.pending, (state, action) => {
            state.isLoader = true;
        });
        builder.addCase(FormDetailAction.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(FormDetailAction.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        })


    }
})

export default FormDetailSlice.reducer;