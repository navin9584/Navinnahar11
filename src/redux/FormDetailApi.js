import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const FormDetailAction = createAsyncThunk('FormDetailAction', async (data) => {
    console.log('dataMMMMMMMMMMlocaLLLLL/////////////', data);
    // const value = [{"user_id":2,"block_name_number":"2","votarcode":"8jhjoo","booth_name_number":"ooo1","grampanchayat":"g1","village":"v1","toll":"tool1","name":"n1","fathername":"f1","jaati":"j1","age":"8","education":"e1","mobile":"m1","lat":"l1","long":"log1","address":"a1","gender":"gender1","vehicle":"vehicle1","group":"group1","government_employee":"government_employee8","parti":"parti80","code":"code7","servayid":"servayid","respect_for_women":"yes","farmer_loan_waiver":"farmer_loan_waiver","facebook":"facebook1","twitter":"twitter","instagram":"instagram","end_lat":"0.009090","end_long":"0.00","startdate":"2023-07-12","enddate":"2023-07-12"}]
    // const formData = new FormData();
    //         formData.append('datafrom', JSON.stringify(data));
    // let obj = {
    //     method: 'POST',
    //     body: formData,
    // };
    //  fetch('https://framedekho.in/servayapp/Api/bulkservay', obj)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     console.log('data??????????',data);
    //     return data
    //     // Do something with data
    // })
    
    // .catch((error) => {
    //   console.error(error);
    // });
  
    try {
    //     // data && data.map(async (value) => {
            // console.log('value>>>>>', value);
            const formData = new FormData();
            formData.append('datafrom', JSON.stringify(data));
    //         formData.append('datafrom', JSON.stringify(value));
    //         // formData.append('block_name_number', value.block);
    //         // formData.append('booth_name_number', value.booth);
    //         // formData.append('grampanchayat', value.grampanchayat);
    //         // formData.append('village', value.village);
    //         // formData.append('toll', value.toll);
    //         // formData.append('name', value.name);
    //         // formData.append('fathername', value.fatherName);
    //         // formData.append('jaati', value.cast);
    //         // formData.append('age', value.age);
    //         // formData.append('education', value.education);
    //         // formData.append('mobile', value.mobile);
    //         // formData.append('votarcode', value.voterId);
    //         // formData.append('address', value.address);
    //         // formData.append('gender', value.gender);
    //         // formData.append('vehicle', value.vehicle);
    //         // formData.append('group', value.group);
    //         // formData.append('government_employee', value.govtEmploye);
    //         // formData.append('parti', value.party);
    //         // formData.append('code', value.code);
    //         // formData.append('respect_for_women', value.nariSamman);
    //         // formData.append('farmer_loan_waiver', value.kisanLoan);
    //         // formData.append('image', value.capturedPhoto);
    //         // formData.append('lat', value.latitude);
    //         // formData.append('long', value.longitude);
    //         // formData.append('facebook', value.facebook);
    //         // formData.append('twitter', value.twitter);
    //         // formData.append('instagram', value.instagram);
            let obj = {
                method: 'POST',
                body: formData,
            };

            console.log('formData>>>>>>',obj);
            const res = await fetch('https://framedekho.in/servayapp/Api/bulkservay', obj);
            const result = await res.json()
            console.log('response////////////////////>>>>', result);
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