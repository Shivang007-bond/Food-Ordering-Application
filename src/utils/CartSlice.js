import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      

      //Redux-toolkit allows state mutation
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
      // state.items = [] This will not work
    },
  },
});


export  const { addItem , removeItem , clearCart} = CartSlice.actions ;

export default CartSlice.reducer ;

