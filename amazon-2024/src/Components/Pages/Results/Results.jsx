import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import classes from "./results.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../../Api/endPoints";
import ProductCards from "../../Product/ProductCards";

const Results = () => {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  // console.log(categoryName);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => setResults(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <h2 style={{ padding: "30px" }}>Category/{categoryName}</h2>
        <hr />
        <div className={classes.products__container}>
          {results?.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Results;
