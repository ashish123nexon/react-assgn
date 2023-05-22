import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
const Resource = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      axios.get("https://engineering-task.elancoapps.com/api/resources")
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    //console.log(data)
    return(
        
        <div>
           {data && <table border="1" > <thead><tr><th>Names</th></tr></thead>
            {data.map((item, index)=>(
            <tbody key={index}><tr><td>{item}</td></tr></tbody>))}
            </table>}
        </div>

        
    )
}
export default Resource