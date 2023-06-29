import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const FormDetailAction = createAsyncThunk('FormDetailAction', async (data) => {
    console.log('dataMMMMMMMMMMlocaLLLLL',data);
    const value = data 
  
    try{
        
        data && data.map(async(value)=>{
            console.log('value>>>>>',value);
    const formData = new FormData();
    formData.append('user_id',  value.user_id);
    formData.append('block_name_number',  value.block);
    formData.append('booth_name_number',  value.booth);
    formData.append('grampanchayat',  value.grampanchayat);
    formData.append('village',  value.village);
    formData.append('toll',  value.toll);
    formData.append('name',  value.name);
    formData.append('fathername',  value.fatherName);
    formData.append('jaati',  value.cast);
    formData.append('age',  value.age);
    formData.append('education',  value.education);
    formData.append('mobile',  value.mobile);
    formData.append('votarcode',  value.voterId);
    formData.append('address',  value.address);
    formData.append('gender',  value.gender);
    formData.append('vehicle',  value.vehicle);
    formData.append('group',  value.group);
    formData.append('government_employee',  value.govtEmploye);
    formData.append('parti',  value.party);
    formData.append('code',  value.code);
    formData.append('respect_for_women', value.nariSamman);
    formData.append('farmer_loan_waiver', value.kisanLoan);
    formData.append('image',  value.capturedPhoto);
    formData.append('lat',  value.latitude);
    formData.append('long',  value.longitude);
    formData.append('facebook',  value.facebook);
    formData.append('twitter',  value.twitter);
    formData.append('instagram',  value.instagram);
     let obj = {
        method: 'POST',
        body: formData,
      };
      const res = await fetch('https://framedekho.in/servayapp/Api/servaydata', obj);
    const result = await res.json()
    console.log('response>>>>', result);
    return result;
})
    // console.log('data>>>>>', formData)
    }catch(error){
        console.log('errorformdatarequest>>>>',error)
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