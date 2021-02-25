import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
 
  },
  reducers: {
    
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
          
             //fectch products as follows
export const productsAsync = () => (dispatch) => {
  fetch("http://localhost:3001/products")
    .then((response) => response.json())
    .then((data) => {
      dispatch(setProducts(data));
    
      console.log(data);
    });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducts = (state) => state.product.products;

export default productsSlice.reducer;
