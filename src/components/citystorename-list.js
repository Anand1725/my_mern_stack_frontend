import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CitynameList = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://mern-stack-backend-test.herokuapp.com/citystorename/").then((response) => {
      response.data.map((data) => {
        setData((oldArray) => [...oldArray, data]);
        return 0;
      });
    });
  }, []);

  const deleteCityname = (id) => {
    axios
      .delete("https://mern-stack-backend-test.herokuapp.com/citystorename/" + id)
      .then((response) => {
        console.log(response.data);
      });

    setData(
      Data.filter((el) => {
        return el._id !== id;
      })
    );
  };
  return (
    <div>
      <h3>City storename List</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>City Name</th>
            <th>City Storename</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((data, index) => (
            <tr key={index}>
              <td>{data.cityname}</td>
              <td>{data.citystorename}</td>
              {/* <td>{data.date.substring(0, 10)}</td> */}
              <td>
                <Link className="btn btn-primary" to={"/edit/" + data._id}>
                  edit
                </Link>
                <button
                  className="btn btn-danger"
                  href="/"
                  onClick={() => {
                    deleteCityname(data._id);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CitynameList;
