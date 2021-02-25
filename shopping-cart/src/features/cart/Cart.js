import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, cartAsync ,selectCartVisibility,setCartVisibility} from "./cartSlice";
import { FaShoppingCart } from "react-icons/fa";


import styles from "./Cart.module.css";

export default function Cart() {
  const cart = useSelector(selectCart);
//   const cartVisibility= useSelector(selectCartVisibility)
  const dispatch = useDispatch();
  const [cartVisibility, setCartVisibility] = useState(false);
  useEffect(() => {
    dispatch(cartAsync());
    setCartVisibility()
  }, []);
  //   console.log(cartVisibility);

  //   console.log(cart);
  function subtotal(qty, price) {
    return qty * price;
  }
  return (
    <aside>
      <div
        className={styles.shoppingcart}
        onClick={() => dispatch(setCartVisibility(true))}
      >
        <FaShoppingCart />
        
      </div>

      <div className={styles.sideNav} id={styles.mySideNav} style={{width:cartVisibility ? "400px":"400px"} }>
        <a
          href="#"
          class={styles.closeBtn}
          onclick={() => dispatch(setCartVisibility(false))}
        >
          &times;
        </a>
        <div className={styles.cartHeader}>
          <FaShoppingCart /> Cart
          <span>{cart.length}</span>
        </div>

        <div
          className={styles.cartlist}
          
        >
          <ul>
            {cart.map((item) => (
                 
              <li className={styles.cartItem}>
              
                {item.availableSizes} | {item.style}<br />
                 {item.title} ${item.price} 
                 <br />
                Quantity:{item.qty} 
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer}>
          <p>subtotal:</p>
          <button className={styles.checkOut}>Check Out</button>
        </div>
      </div>
    </aside>
  );
}
