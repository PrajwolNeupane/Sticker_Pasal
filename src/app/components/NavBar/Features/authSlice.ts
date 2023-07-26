import { createSlice,PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    token:String | null
}

const initialState:InitialState = {
    token: null 
}
const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        setToken:(state,action: PayloadAction<string>) => {
            state.token = action.payload;
        }
    }, 
});

export default AuthSlice.reducer;
export const {setToken} = AuthSlice.actions; 