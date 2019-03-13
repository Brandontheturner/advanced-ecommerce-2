import React, { Component } from "react";
import PropTypes from "prop-types";
import State from "../state";

const ProductDetail = props => {
  // render() {
  return (
    <div>
      <div className="grid_1_of_5 images_1_of_5">
        <img src>{props.imgUrl}</img>
        <h3>{props.product}</h3>
        <p>{props.description}</p>
        <h4>{props.price}</h4>
        <div className="button">
          <span>
            <a href="singlepage.html">Read More</a>
          </span>
        </div>
      </div>
    </div>
  );
};
// };

ProductDetail.PropTypes = {
  product: PropTypes.array.isRequired
  // id: PropTypes.number,
  // name: PropTypes.string,
  // description: PropTypes.string,
  // price: PropTypes.number,
  // imgUrl: PropTypes.any,
  // category: PropTypes.string,
  // rating: PropTypes.number,
  // reviews: PropTypes.string
};

export default ProductDetail;
