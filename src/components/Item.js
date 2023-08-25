import React, { useEffect, useState } from "react";
import Element from "./Element";
import { sortByName, sortByPrice } from "../services/filters";

function Item() {
  const [category, setCategory] = useState([]);
  const [itemArray, setItemArray] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const rangeArray = [50, 100, 200, 500, 1000, 5000, 10000, 25000];

  const getdata = async () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setItemArray(res.products);
        setAllItems(res.products);
      });

    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => setCategory(res));
  };

  const filterByCategory = (data) => {
    fetch(`https://dummyjson.com/products/category/${data}`)
      .then((res) => res.json())
      .then((res) => setItemArray(res.products));
  };

  const filterByRange = (range) => {
    setItemArray(allItems.filter((val) => val.price <= range));
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container-fluid">
      <div className="container row">
        <div className="col container">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
              Filter By category
            </button>

            <ul className="dropdown-menu">
              {category.map((data) => (
                <li key={data}>
                  <button
                    type="button"
                    value={data}
                    onClick={() => filterByCategory(data)}
                    className="dropdown-item"
                  >
                    {data}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
              Filter By Range
            </button>

            <ul className="dropdown-menu">
              {rangeArray.map((data) => (
                <li key={data}>
                  <button
                    type="button"
                    value={data}
                    onClick={() => filterByRange(data)}
                    className="dropdown-item"
                  >
                    Upto {data}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col">
          <button
            type="button"
            onClick={() => setItemArray(allItems)}
            className="btn btn-secondary"
          >
            Reset filter
          </button>
        </div>
        <div className="col">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
              Sort By
            </button>

            <ul className="dropdown-menu">
              <li>
                <button
                  type="button"
                  value="price"
                  onClick={() => setItemArray(sortByPrice(allItems))}
                  className="dropdown-item"
                >
                  Price
                </button>
              </li>

              <li>
                <button
                  type="button"
                  value="name"
                  onClick={() => setItemArray(sortByName(allItems))}
                  className="dropdown-item"
                >
                  Name
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="col"></div> */}
      </div>
      <div className="container-fluid">
        {itemArray.map((data) => (
          <Element key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default Item;
