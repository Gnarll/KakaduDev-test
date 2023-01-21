import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { GetDataBtn } from "./components/GetDataBtn";
import { DataTable } from "./components/DataTable";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GetDataBtn />
        <DataTable />
      </div>
    </Provider>
  );
}

export default App;
