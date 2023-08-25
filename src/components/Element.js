import React from "react";
import Rating from "./Rating";
import "../css/element.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Element(props) {
  const {  title, description, price, rating, brand, category, images } = props;
  return (
    <div className="container element-body">
      <h2 className="text-center">{title}</h2>

      <div className="container">
        <Carousel showThumbs={false}>
          {images.map((source) => (
            <div key={source}>
              <img src={source} className="image-body" alt="noimage" />
            </div>
          ))}
        </Carousel>
      </div>
      <p>{description}</p>
      <h4>Brand - {brand}</h4>
      <p>
        <strong>Category -</strong>
        <span className="badge  rounded-pill text-bg-warning"> {category}</span>
      </p>
      {/* <Rating rating={3.3}/> */}
      <div className="row ">
        <div className="col-md-4">
          <h3>₹ {price}</h3>
        </div>
        <div className="col-md-4 offset-md-4">
          <Rating rating={rating} />
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-dark">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Element;
