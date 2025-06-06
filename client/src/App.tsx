import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "@routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
