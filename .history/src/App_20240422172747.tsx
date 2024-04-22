import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./pages/Colors";
import PPTEditor from "./pages/PPTEditor";
import MDEditor from "./pages/MDEditor";
import Crochet from "./pages/Crochet";
import "./style/reset.scss";
import "./style/atomic.scss";
import "./style/variable.scss";
import UITest from "./pages/UITest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Colors />} />
        <Route path="/home" element={<Home />} />
      <UITest/>
        <Route path="/colors" element={<Colors />} />
        <Route path="/crochet" element={<Crochet />} />
      </Routes>
    </>
  );
}

export default App;
