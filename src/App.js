import "./App.css";

function App() {
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
          <tr>
            <th scope="row">1</th>
            <td>2095</td>
            <td>Доход</td>
            <td>3-07-2021 01:47:00</td>
          </tr>
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
