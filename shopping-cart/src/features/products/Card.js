import React, { useState } from "react";
import styles from "./Products.module.css";
import { useDispatch } from "react-redux";
import { addCart } from "../cart/cartSlice";
export default function Card(props) {
  const dispatch = useDispatch();
  return (
    <ul className={styles.card}>
      <li key={props.id}>
        {props.isFreeShipping ? (
          <span className={styles.shipping}>Free Shipping</span>
        ) : (
          ""
        )}{" "}
        <br />
        <img className={styles.normalImg} src={props.normalImg} /> <br />
        <p>{props.title}</p> <br />
        {<p className={styles.yellowline}></p>}
        <br />
        {props.currencyFormat}
        {<span className={styles.price}>{props.price}</span>} <br />
        {<span className={styles.installPrice}>or {props.installments} x {props.currencyFormat}
        {props.installmentPrice}</span>}
        <br />
        <button
          className={styles.addBtn}
          onClick={() => dispatch(addCart(props.product))}
        >
          Add to cart
        </button>
      </li>
    </ul>
  );
}
