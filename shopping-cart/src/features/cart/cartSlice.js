import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart:[],
    total: 0,
    totalPrice:0,
  },

  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    addCart: (state, action) => {
      const product = { ...action.payload };
      const foundProduct = state.cart.find((item) => item.id == product.id);

      if (!foundProduct) {
        state.cart.push({ ...product, qty: 1 });
        state.total += 1;
        state.totalPrice += product.price
        console.log("test");
      } else {
        foundProduct.qty = foundProduct.qty + 1;
        state.total += 1;
        state.totalPrice += foundProduct.price
      }
      //   console.log(state.total);
      //   logger(state);
      // const logger=(v) =>consloe.log(JSON.parse(JSON.stringify(v)))
    },
    decreProduct: (state, action) => {
        const product = { ...action.payload };
        const foundProduct = state.cart.find((item) => item.id == product.id);
        foundProduct.qty -=1;  
        state.totalPrice -= product.price
      },
      increProduct: (state, action) => {
        const product = { ...action.payload };
        const foundProduct = state.cart.find((item) => item.id == product.id);
        foundProduct.qty +=1; 
        state.totalPrice += product.price 
      },
    removeFromCart: (state, action) => {
      
      const removedProduct = action.payload;
      console.log(removedProduct);
      state.cart = state.cart.filter((item) => item.id != removedProduct.id);
    },
  },
});

export const { addCart, removeFromCart ,decreProduct,increProduct} = cartSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const cartAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(addCart());
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = (state) => state.cart.cart;
export const selectTotal = (state) => state.total.total
export const selectTotalPrice = (state) => state.totalP.totalPrice
// export const selectCartVisibility = (state) => state.cartV.cartVisibility;

export default cartSlice.reducer;
