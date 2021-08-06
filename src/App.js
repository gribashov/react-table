import "./App.css";
import React, {useState} from "react";

import {Button} from "./components/Button";
import {Table} from "./components/Table";

const btnData = [
  {title: "Доход"},
  {title: "Расход"},
  {title: "За последний месяц"},
  {title: "Более 1000 рублей"},
];

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

  console.log(tableElements);

  return (
    <AppContext.Provider value={{tableElements}}>
      <Table />

      {btnData.map((item) => (
        <Button title={item.title} />
      ))}
    </AppContext.Provider>
  );
}

export default App;
