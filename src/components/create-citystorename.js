import React, { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

//this is the constructor- assiging objects to the state
const CreateCityStorename = () => {
  const [CityStorename, setCityStorename] = useState({
    cityname: "",
    citystorename: "",
    date: new Date(),
  });

  const [Cityname, setCityname] = useState([]);

  const onSubmit = () => {
    axios.post("https://mern-stack-backend-test.herokuapp.com/citystorename/add", CityStorename);
  };

  useEffect(() => {
    axios.get("https://mern-stack-backend-test.herokuapp.com/cityname").then((res) => {
      res.data.map((cityname) => {
        setCityname((oldArray) => [...oldArray, cityname.cityname]);
        return 0;
      });
    });
  }, []);

  return (
    <div>
      <h3>Create New Store Name in a City</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Cityname: </label>
          <select
            required
            className="form-control"
            value={CityStorename.cityname}
            onChange={(e) =>
              setCityStorename({ ...CityStorename, cityname: e.target.value })
            }
          >
            {Cityname.map(function (cityname) {
              return (
                <option key={cityname} value={cityname}>
                  {cityname}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Store Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={CityStorename.citystorename}
            onChange={(e) =>
              setCityStorename({
                ...CityStorename,
                citystorename: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Store Name in a City"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default CreateCityStorename;
