import React, { useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import axios from "axios";
import classes from "./product.module.css";

const Product = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className={classes.products__container}>
      {products?.map((singleProduct) => (
        <ProductCards product={singleProduct} key={singleProduct.id} />
      ))}
    </section>
  );
};

export default Product;
