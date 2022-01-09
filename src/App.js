import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Weather from "./components/Weather/Weather";
import SingleDay from "./components/SingleDay/SingleDay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      <Route path="/weather/:id" element={<SingleDay />} />
    </Routes>
  );
}

export default App;
