import React from "react";
import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCart,
  selectTotal,
  selectTotalPrice,
  removeFromCart,
  increProduct, 
  decreProduct
} from "./cartSlice";
import { FaShoppingCart } from "react-icons/fa";

import styles from "./Cart.module.css";

export default function Cart() {
  const cart = useSelector(selectCart);
  const total = useSelector(selectTotal);
  const totalPrice = useSelector(selectTotalPrice)
  //   const cartVisibility= useSelector(selectCartVisibility)
  const dispatch = useDispatch();
  const [cartVisibility, setCartVisibility] = useState(false);
  //   useEffect(() => {
  //     dispatch(cartAsync());
  //   }, []);
  console.log(cart);

  
  
  return (
    <aside className={styles.test}>
      <div
        className={styles.sideNav}
        id={styles.mySideNav}
        style={{ width: cartVisibility ? "400px" : "0" }}
      >
        <a
          href="#"
          class={styles.closeBtn}
          onClick={() => setCartVisibility(false)}
        >
          &times;
        </a>
        <div className={styles.cartHeader}>
          <FaShoppingCart /> Cart
          <span>{total}</span>
        </div>

        <div className={styles.cartlist}>
          <ul>
            {cart.map((item) => (
              <li className={styles.cartItem}>
                <img src={item.img.thumb} />
                {item.availableSizes[0]} | {item.style} <br />
                {item.title} ${item.price.toFixed(2)}
                <br />
                Quantity:{item.qty}
               
                <button onClick={() => dispatch(removeFromCart(item))}>
                  X
                </button>
                <button className={item.qty
                    ?styles.hiddenDere:""}onClick={() =>dispatch(decreProduct(item))}>-</button>
                <button onClick={() =>dispatch(increProduct(item))}>+</button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer}>
          <p>Subtotal:{totalPrice.toFixed(2)}</p>
          <button className={styles.checkOut}>Check Out</button>
        </div>
      </div>
      <div
        className={styles.shoppingcart}
        onClick={() => setCartVisibility(true)}
        // onClick={() => setCartVisibility(!cartVisibility)}
      >
        {/* cartVisibility == true ? false : true */}
        <FaShoppingCart />
      </div>
    </aside>
  );
}
