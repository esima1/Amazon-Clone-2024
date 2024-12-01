import React, { useEffect, useState } from "react";
import classes from "./productDetail.module.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../../Api/endPoints";
import ProductCards from "../../Product/ProductCards";

const ProductDetail = () => {
  const [product, setproduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <ProductCards product={product} />
    </Layout>
  );
};

export default ProductDetail;
