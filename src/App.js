import logo from "./logo.svg";
import "./App.css";
import { Main } from "./Component/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Component/Details";
import { Addcart } from "./Component/Addcart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>

          <Route path="/favt" element={<Addcart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
