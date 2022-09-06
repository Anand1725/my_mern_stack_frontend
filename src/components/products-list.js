import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

const ProductList = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products/").then((response) => {
      response.data.map((data) => {
        console.log(data);
        setData((oldArray) => [...oldArray, data]);
        return 0;
      });
    });
  }, []);

  /* const deleteProduct = (id) => {
    axios.delete("http://localhost:5000/products/" + id).then((response) => {
      console.log(response.data);
    });

    setData(
      Data.filter((el) => {
        return el._id !== id;
      })
    );
  }; */
  return (
    <div>
      <h3>Product List</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>skuid</th>
            <th>product</th>
            <th>origin</th>
            <th>price</th>

            <th>datetime</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((data, index) => (
            <tr key={index}>
              <td>{data.skuid}</td>
              <td>{data.product}</td>
              <td>{data.origin}</td>
              <td>{data.price}</td>

              <td>{data.datetime.substring(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductList;
