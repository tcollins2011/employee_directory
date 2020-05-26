  
import React from "react";


function ListRender(props) {
  return (
    <table className ='table'>
      <thead>
        <tr>
            <th scope="col" onClick ={() => props.newOrder()}>Name</th>
            <th scope="col">Company</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((employee) => {
          if(employee[0].includes(props.search)){
          return (
          <tr>
            <td>
              {employee[0]} 
            </td>
            <td>
              {employee[1]}
            </td>
            <td>
              {employee[2]}
            </td>
            <td>
              {employee[3]}
            </td>
            <td>
              {employee[4]}
            </td>
          </tr>
        )}}
        )}
      </tbody>
    </table>
  );
}

export default ListRender;