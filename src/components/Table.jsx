import React, {useContext, useState} from "react";
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
        {tableElements.map((item) => (
          <tr>
            <th scope="row">{item.id}</th>
            <td>{item.value}</td>
            <td>{item.type}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
