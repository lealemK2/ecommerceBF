import {BrowserRouter, Routes, Route} from "react-router-dom";
import Products from "./pages/products/Products";
import Add from "./pages/products/Add";
import Update from "./pages/products/Update";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
