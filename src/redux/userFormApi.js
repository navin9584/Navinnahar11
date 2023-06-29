import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const UserFormDetailAction = createAsyncThunk('FormDetailAction', async (data) => {
    // console.log('dataMMMMMMMMMM',data);
    try{
    const formData = new FormData();
    formData.append('user_id',  data.user_id);
    formData.append('block_name_number',  data.block);
    formData.append('booth_name_number',  data.booth);
    formData.append('grampanchayat',  data.grampanchayat);
    formData.append('village',  data.village);
    formData.append('toll',  data.toll);
    formData.append('name',  data.name);
    formData.append('fathername',  data.fatherName);
    formData.append('jaati',  data.cast);
    formData.append('age',  data.age);
    formData.append('education',  data.education);
    formData.append('mobile',  data.mobile);
    formData.append('votarcode',  data.voterId);
    formData.append('address',  data.address);
    formData.append('gender',  data.gender);
    formData.append('vehicle',  data.vehicle);
    formData.append('group',  data.group);
    formData.append('government_employee',  data.govtEmploye);
    formData.append('parti',  data.party);
    formData.append('code',  data.code);
    formData.append('respect_for_women', data.nariSamman);
    formData.append('farmer_loan_waiver', data.kisanLoan);
    formData.append('image',  data.capturedPhoto);
    formData.append('lat',  data.latitude);
    formData.append('long',  data.longitude);
    formData.append('servayid',  'own');
    // console.log('data>>>>>', formData);
    
    let obj = {
        method: 'POST',
        body: formData,
      };
     
    const res = await fetch('https://framedekho.in/servayapp/Api/servaydata', obj);
    const result = await res.json()
    // console.log('response>>>>', result);
    return result;
    }catch(error){
        console.log('error>>>>',error)
    }
    

})


const UserFormDetailSlice = createSlice({
    name: 'products',
    initialState: {
        data: null,
        isLoader: false,
        isError: false
    },
    extraReducers: builder => {
        builder.addCase(UserFormDetailAction.pending, (state, action) => {
            state.isLoader = true;
        });
        builder.addCase(UserFormDetailAction.fulfilled, (state, action) => {
            state.isLoader = false;
            state.data = action.payload;
        });
        builder.addCase(UserFormDetailAction.rejected, (state, action) => {
            state.isLoader = false;
            state.isError = true;
        })


    }
})

export default UserFormDetailSlice.reducer;