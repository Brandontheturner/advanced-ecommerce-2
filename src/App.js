import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import state from "./state";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";
import PropTypes from "prop-types";

// import from a separate file: if you see default in the export you can's use brackets.

function App(props) {
  const productsArr = state.products.filter(product => {
    let match = null;
    if (product.category === props.currentCategory) {
      match = product;
    }
    return match;
  });

  return (
    <div className="App">
      <div className="wrap">
        <Header />
        <SubHeader />
        <TopNav changeCategory={props.changeCategory} />
        <ImageSlider />
        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5>
                <span>FEATURED</span> PRODUCTS
              </h5>
              <div className="section group">
                {productsArr.map((product, i) => {
                  return <ProductDetail product={product} key={product.id} />;
                })}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

App.propTypes = {
  currentCategory: PropTypes.string,
  changeCategory: PropTypes.func
};

export default App;
