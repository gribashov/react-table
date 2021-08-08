import "./App.css";
import React, {useState} from "react";

import {Button} from "./components/Button";
import {Table} from "./components/Table";

export const AppContext = React.createContext({});

function App() {
  const [tableElements, setTableElements] = useState([]);

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

  const data = [
    {
      title: "Доход",
      filter: () => {
        setTableElements(
          tableElements.filter((element) => element.type === "Доход")
        );
      },
    },
    {
      title: "Расход",
      filter: () => {
        setTableElements(
          tableElements.filter((element) => element.type === "Расход")
        );
      },
    },
    {
      title: "За последний месяц",
      filter: () =>
        setTableElements(
          tableElements.filter(
            (element) =>
              new Date(element.date) <
              new Date().setMonth(new Date().getMonth() - 1)
          )
        ),
    },
    {
      title: "Более 1000 рублей",
      filter: () =>
        setTableElements(
          tableElements.filter((element) => element.value > 1000)
        ),
    },
  ];

  console.log(new Date().getMonth());

  return (
    <AppContext.Provider value={{tableElements}}>
      <Table />

      {data.map((item) => (
        <Button title={item.title} filter={item.filter} />
      ))}
    </AppContext.Provider>
  );
}

export default App;
