import React from "react";
import classes from "./category.module.css";
import { Link } from "react-router-dom";

const CategoryCards = ({ data }) => {
  return (
    <div className={classes.category}>
      <Link to={`/category/${data.title}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCards;
