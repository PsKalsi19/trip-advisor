import { Route,  Routes } from "react-router-dom";
import "./App.css";
import Continent from "./pages/Continent";
import Country from "./pages/Country";
import Detail from "./pages/Detail";
import List from "./pages/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Continent />} />
        <Route path="/country" element={<Country />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
