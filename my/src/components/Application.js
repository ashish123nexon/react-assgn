import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const Application = () => {
  const [data, setData] = useState(null);
  const [select, setSelect] = useState("");
  const [appDetails, setAppDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://engineering-task.elancoapps.com/api/applications")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleSubmit = async () => {
    await axios
      .get(`https://engineering-task.elancoapps.com/api/applications/${select}`)
      .then((response) => {
        setAppDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //console.log(data)
  return (
    <div>
      {data && (
        <div>
          {" "}
          <select onChange={(e) => setSelect(e.target.value)} id="appname">
            {" "}
            {data.map((item, index) => (
              <option key={index} name={item}>
                {item}
              </option>
            ))}
          </select>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {appDetails && (
        <table border="1">
          <thead>
            <tr>
              <th>Date</th>
              <th>Consumed Quantity</th>
              <th>Cost</th>
              <th>Instance ID</th>
              <th>Meter Category</th>
              <th>Resource Group</th>
              <th>Resource Location</th>
              <th>App Name</th>
              <th>Environment</th>
              <th>Business Unit</th>
              <th>Unit of Measure</th>
              <th>Location</th>
              <th>Service Name</th>
            </tr>
          </thead>
          <tbody>
            {appDetails.map((details, index) => (
              <tr key={index}>
                <td>{details.Date}</td>
                <td>{details.ConsumedQuantity}</td>
                <td>{details.Cost}</td>
                <td>{details.InstanceId}</td>
                <td>{details.MeterCategory}</td>
                <td>{details.ResourceGroup}</td>
                <td>{details.ResourceLocation}</td>
                <td>{details.Tags["app-name"]}</td>
                <td>{details.Tags.environment}</td>
                <td>{details.Tags["business-unit"]}</td>
                <td>{details.UnitOfMeasure}</td>
                <td>{details.Location}</td>
                <td>{details.ServiceName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default Application;
