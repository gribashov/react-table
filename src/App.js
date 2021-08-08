import React, {useState} from "react";
import moment from "moment";

import {Button} from "./components/Button";
import {Table} from "./components/Table";

import "./App.css";
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
              moment().subtract(1, "months").format("MM-DD-YYYY") <
              moment(element.date).add(1, "days").format("MM-DD-YYYY")
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

  console.log(
    tableElements.map((element) => moment(element.date).format("MM"))
  );
  console.log(moment().format("MM"));

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
