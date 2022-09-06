import React, { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

const StoreorderList = () => {
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
      <div className="form-group" style={{float:'right'}}>
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
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
              <td><input type='Number' value={storedata.StoreOrderDetails[0]?.currQty ? storedata.StoreOrderDetails[0]?.currQty:0} readOnly></input> </td>
              <td><input type='Number' value={storedata.StoreOrderDetails[0]?.newQty ? storedata.StoreOrderDetails[0]?.newQty :0 } readOnly ></input></td>
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
export default StoreorderList;

//product-create-start
//import React, { useState, useEffect } from "react";
//what is useEffect? - it is a hook that runs after the component is rendered
//what is useState? - it is a hook that runs before the component is rendered

//import React, { useState } from "react";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
//import axios from "axios";
//what is axios? - it is a library that allows us to make requests to a server

//this is the constructor- assiging objects to the state
//product
//what is setProduct? - it is a function that takes in an object and sets the state to that object

/* const CreateProduct = () => {
  const [Product, setProduct] = useState({
    skuid: "",
    product: "",
    origin: "",
    price: 0,
    isActive: true,
    datetime: new Date(),

    username: "helllo",
    description: "",
    duration: 0,
    date: new Date(),
 
  });

 */ //user is not being used
//const [Users, setUsers] = useState([]);
/* 
  const onSubmit = () => {
    axios.post("http://localhost:5000/products/add", Product);
  };
 */ //user is not being used in this form. We will use in StoreOrder
/*   useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      res.data.map((user) => {
        
        what is setUsers? - it is a function that takes in an array and sets the state to that array
        what is oldArray? - it is the old state
        what is ...oldArray? - it is the old state
        what is [...oldArray, user.username]? - it is the old state plus the new user
        
        why is it returning 0? - it is returning 0 so that it will not break the code
      
        setUsers((oldArray) => [...oldArray, user.username]);
        return 0;
      });
    });
  }, []);
 */

/* return (
    <div>
      <h3>Create New Product </h3>
      <form onSubmit={onSubmit}>
         {  <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={Product.username}
            
            what is onChange? - it is a function that takes in an event and sets the state to that event
            what is e.target.value? - it is the value of the event

            onChange={(e) =>
              setProduct({ ...Product, username: e.target.value })
            }
          >
          what is Users.map? - it is a function that takes in a function and returns a new array
          what is user? - it is the current user
            {Users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
 
        <div className="form-group">
          <label>skuid: </label>
          <input
            type="text"
            required
            className="form-control"
            value={Product.skuid}
            onChange={(e) => setProduct({ ...Product, skuid: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>product: </label>
          <input
            type="text"
            required
            className="form-control"
            value={Product.product}
            onChange={(e) =>
              setProduct({ ...Product, product: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>origin: </label>
          <input
            type="text"
            required
            className="form-control"
            value={Product.origin}
            onChange={(e) => setProduct({ ...Product, origin: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>price (in numbers): </label>
          <input
            type="text"
            className="form-control"
            value={Product.price}
            onChange={(e) => setProduct({ ...Product, price: e.target.value })}
          />
        </div>
 
         <div className="form-group">
          <label>isActive: true</label>
          <input
            type="hidden"
            className="form-control"
            value={(Product.isActive = true)}
          />
        </div>
         <div className="form-group">
          <label>datetime: {new Date()}</label> 
          how to create a date at runtime 
          <label>datetime: will be added at the time of creation</label>

          <input
            type="hidden"
            className="form-control"
            value={(Product.datetime = new Date())}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Product"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default CreateProduct;
 */
