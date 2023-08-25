import React from "react";
import "../css/element.css";

function ImageComp({ src, ind }) {
//   console.log(ind);
  return (
    <div className={`carousel-item ${!ind && "active"}`}>
      <img src={src} className="d-block w-100 " alt="images" />
    </div>
  );
}

export default ImageComp;
