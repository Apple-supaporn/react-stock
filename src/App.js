import { Route, Routes } from "react-router-dom"; //Bring in Routing
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home/>}/>
        <Route
          path="/about"
          element={<About/>}/>
        <Route
          path="/stocks/:symbol"
          element={<Stock/>}/>
        <Route
          path="/stocks"
          element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
