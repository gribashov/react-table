import React, {useContext} from "react";
import {AppContext} from "../App";

export const Table = () => {
  const {tableElements} = useContext(AppContext);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">value</th>
          <th scope="col">type</th>
          <th scope="col">date</th>
        </tr>
      </thead>
      <tbody>
        {tableElements.map((element) => (
          <tr>
            <th scope="row">{element.id}</th>
            <td>{element.value}</td>
            <td>{element.type}</td>
            <td>{element.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
