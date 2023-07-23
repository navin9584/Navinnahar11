import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const UserFormDetailAction = createAsyncThunk('FormDetailAction', async (alldata) => {
     const data = alldata[0]
     console.log('dataMMMMMMMMMM',data);
    try{
    const formData = new FormData();
    formData.append('user_id',  data.user_id);
    formData.append('block_name_number',  data.block_name_number);
    formData.append('boothName',  data.boothName);
    formData.append('boothNumber',  data.boothNumber);
    formData.append('grampanchayat',  data.grampanchayat);
    formData.append('village',  data.village);
    formData.append('toll',  data.toll);
    formData.append('name',  data.name);
    formData.append('fathername',  data.fathername);
    formData.append('jaati',  data.jaati);
    formData.append('age',  data.age);
    formData.append('education',  data.education);
    formData.append('mobile',  data.mobile);
    formData.append('votarcode',  data.votarcode);
    formData.append('address',  data.address);
    formData.append('gender',  data.gender);
    formData.append('vehicle',  data.vehicle);
    formData.append('group',  data.group);
    formData.append('government_employee',  data.government_employee);
    formData.append('parti',  data.parti);
    formData.append('code',  data.code);
    formData.append('respect_for_women', data.respect_for_women);
    formData.append('farmer_loan_waiver', data.farmer_loan_waiver);
    formData.append('image',  data.image);
    formData.append('servayid',  data.servayid);
    formData.append('lat',  data.lat);
    formData.append('long',  data.long);
    formData.append('instagram',  data.instagram);
    formData.append('twitter',  data.twitter);
    formData.append('facebook',  data.facebook);
     formData.append('end_lat',  data.end_lat);
    formData.append('end_long',  data.end_long);
    formData.append('startdate',  data.enddate);
     formData.append('enddate',  data.enddate);
      
    // console.log('data>>>>>', formData);
    
    let obj = {
        method: 'POST',
        body: formData,
      };
     
    const res = await fetch('https://umangsinghar.org/DataCollector/Api/servaydata', obj);
    const result = await res.json()
    console.log('responseuserform>>>>>>>>>', result);
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