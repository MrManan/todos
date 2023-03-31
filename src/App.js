import "./App.css";
import Create from "./components/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Create />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
