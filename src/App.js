import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import SingleCountry from "./components/SingleCountry";


function App() {
  return (
    <BrowserRouter >
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryName" element={<SingleCountry/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
