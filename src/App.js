import "./App.css";
import React from "react";

function App() {
  const [tableElements, setTableElements] = React.useState([]);

  React.useEffect(() => {
    fetch("./db.json")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        setTableElements(json);
      });
  }, []);

  console.log(tableElements);

  return (
    <>
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
      <div className="">
        <button type="button" className="btn btn-light w-100 mb-3">
          Доход
        </button>
        <button type="button" className="btn btn-light w-100 mb-3">
          Расход
        </button>
        <button type="button" className="btn btn-light w-100 mb-3">
          За последний месяц
        </button>
        <button type="button" className="btn btn-light w-100 mb-3">
          Более 1000 рублей
        </button>
      </div>
    </>
  );
}

export default App;
