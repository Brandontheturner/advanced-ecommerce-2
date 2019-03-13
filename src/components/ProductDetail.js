import React, { Component } from "react";
import PropTypes from "prop-types";

const ProductDetail = props => {
  return (
    <div>
      <div className="grid_1_of_5 images_1_of_5">
        <img src="images/g1.jpg" />
        <h3>Lorem Ipsum is simply </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
          reprehenderit.
        </p>
        <h4>$300.00</h4>
        <div className="button">
          <span>
            <a href="singlepage.html">Read More</a>
          </span>
        </div>
      </div>
      <div className="grid_1_of_5 images_1_of_5">
        <img src="images/g2.jpg" />
        <h3>Lorem Ipsum is simply </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
          reprehenderit.
        </p>
        <h4>$120.00</h4>
        <div className="button">
          <span>
            <a href="singlepage.html">Read More</a>
          </span>
        </div>
      </div>
      <div className="grid_1_of_5 images_1_of_5">
        <img src="images/g3.png" />
        <h3>Lorem Ipsum is simply </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
          reprehenderit.
        </p>
        <h4>$500.00</h4>
        <div className="button">
          <span>
            <a href="singlepage.html">Read More</a>
          </span>
        </div>
      </div>
      <div className="grid_1_of_5 images_1_of_5">
        <img src="images/g4.jpg" />
        <h3>Lorem Ipsum is simply</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, in
          reprehenderit.
        </p>
        <h4>$120.00</h4>
        <div className="button">
          <span>
        </span>
    </div>
  );
};

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
