import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, productsAsync } from "./productsSlice";
import Card from "./Card";
import styles from "./Products.module.css";

export default function Products() {
  //   const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(productsAsync());
  }, []);

  //console.log(products);
  function installmentPrice(price, installNum) {
    return (price / installNum).toFixed(2);
  }

  return (
    <div>
      <header> () Product(s) found</header>

      <div className={styles.cardContainer} id={styles.main}>
        {products.map((item) => (
          <Card
            product={item}
            normalImg={item.img.normal}
            title={item.title}
            price={item.price}
            currencyFormat={item.currencyFormat}
            installments={item.installments}
            installmentPrice={installmentPrice(item.price, item.installments)}
            isFreeShipping={item.isFreeShipping}
          />
        ))}
      </div>
    </div>
  );
}
