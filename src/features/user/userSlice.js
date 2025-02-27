import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  error: null,
  user: {},
  cart: [],
  loading: false,
  isLogin: null,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) =>{
      state.loading = true;
      state.isLogin = null;
    },
    signInSuccess: (state) => {
      state.loading = false;
      state.isLogin = true;
    },
    signInFailure: (state) => {
      state.isLogin = false;
      state.loading = false;
    },
    logInStart: (state) =>{
      state.loading = true;
      state.isLogin = null;
    },
    logInSuccess: (state) => {
      state.loading = false;
      state.isLogin = true;
    },
    logInFailure: (state) => {
      state.isLogin = false;
      state.loading = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { signInStart, signInSuccess, signInFailure, logInStart, logInSuccess, logInFailure, setUser } = userSlice.actions;

export default userSlice.reducer;


export const myName = ()=> {
  return 'John Doe';
}