import React, { useState } from "react";

function Rating({ rating }) {
//   const [color, setcolor] = useState("success");
  let color="danger";
//   console.log(typeof rating);
    // if (rating < 4.2) color="danger";
  return (
    <>
      {/* <div type="button" style={{"height":"30px" ,"width":"fit-content","borderRadius":"5px","color":"white","margin":"15px","padding":"5px","textAlign":"center"}} className={`bg-${color}`}>{rating} &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></div> */}
      <button type="button"  className={`btn btn-${color}`}>
        {rating} &nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      </button>
    </>
  );
}

export default Rating;
