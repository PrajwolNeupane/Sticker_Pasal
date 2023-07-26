import { UserType } from '@/app/const/interface';
import { createSlice,PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    auth:UserType | null;
}

const initialState:InitialState = {
    auth:null
}
const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        setAuth:(state,action:PayloadAction<UserType | null>) => {
            state.auth = action.payload
        }
    }, 
});

export default AuthSlice.reducer;
export const {setAuth} = AuthSlice.actions; 