import React, { useState } from "react";
import axios from "axios";

const CreateCityname = () => {
  const [Cityname, setCityname] = useState("");

  const onSubmit = () => {
    axios
      .post("http://localhost:5000/cityname/add", { cityname: Cityname })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h3>Create New Cityname</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Cityname: </label>
          <input
            type="text"
            required
            className="form-control"
            value={Cityname}
            onChange={(e) => setCityname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Cityname"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default CreateCityname;
