import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./pages/Colors";
import Crochet from "./pages/Crochet";
import "./style/reset.scss";
import "./style/atomic.scss";
import "./style/variable.scss";
import UITest from "./pages/UITest";

function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<UITest />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ui-test" element={<UITest />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/crochet" element={<Crochet />} />
      </Router>
    </>
  );
}

export default App;
