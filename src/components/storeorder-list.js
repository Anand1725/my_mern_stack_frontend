import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

const StoreorderListshow = () => {
  const [StoreorderData, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/storeorder/").then((response) => {
      response.data.map((storedata) => {
        console.log(storedata.StoreOrderDetails)
        setData((oldArray) => [...oldArray, storedata]);
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
            <th>Store current Qty</th>
            <th>Store new Qty</th>
            <th>Store Suby</th>
            <th>price</th>
            <th>price</th>
            <th>datetime</th>
          </tr>
        </thead>
        <tbody>
          {StoreorderData.map((storedata, index) => (
           
            <tr key={index}>
              <td>{storedata.skuid}</td>
              <td>{storedata.product}</td>
              <td>{storedata.origin}</td>
              <td>{storedata.price}</td>
{/* {console.log(storedata.StoreOrderDetails)} */}
              <td>{storedata.StoreOrderDetails[0]?.currQty ? storedata.StoreOrderDetails[0]?.currQty:0 } </td>
              <td>{storedata.StoreOrderDetails[0]?.newQty ? storedata.StoreOrderDetails[0]?.newQty :0 }</td>
              <td>{storedata.StoreOrderDetails[0]?.subBy}</td>
              <td>{storedata.datetime.substring(0, 10)}</td>
              <td>{storedata.StoreOrderDetails.storeName}</td>
              <td>{storedata.StoreOrderDetails[0]?.cityName}</td>

              {/* <td>{storedata.StoreOrderDetails["currQty"]}</td>
              <td>{storedata.StoreOrderDetails.newQty}</td>
              <td>{storedata.StoreOrderDetails.suBy}</td>
              <td>{storedata.datetime.substring(0, 10)}</td>
              <td>{storedata.StoreOrderDetails.storeName}</td>
              <td>{storedata.StoreOrderDetails.cityName}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default StoreorderListshow;