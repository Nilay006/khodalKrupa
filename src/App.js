import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Taxtchange from "./components/Taxtchange";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const data = {
    logo: "New React",
    list1: "Home",
    list2: "About Us",
    list3: "Taxtchange",
  };
  return (
    <>
      <BrowserRouter>
        <Navbar data={data} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/taxtchange" element={<Taxtchange />} />
          <Route index path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
