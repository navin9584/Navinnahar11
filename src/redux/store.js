import {configureStore} from '@reduxjs/toolkit'
import LoginSlice from './login'
import formDetailSlice from './FormDetailApi'
import SearchDataListSlice from './SearchWithVoterApi'
import FormListlSlice from './FormListApi'
import userFormDetailSlice from './userFormApi'


export const store = configureStore({
    reducer: {
        loginData: LoginSlice,
        formData: formDetailSlice,
        FormSearchData: SearchDataListSlice,
        FormListData: FormListlSlice,
        userFormData: userFormDetailSlice
    }
  });