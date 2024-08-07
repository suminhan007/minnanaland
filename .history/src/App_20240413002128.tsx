import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./pages/Colors";
import PPTEditor from "./pages/PPTEditor";
import MDEditor from "./pages/MDEditor";
import Crochet from "./pages/Crochet";
import ComponentPicker from "./pages/ComponentPicker";
import ThresholdMedia from "./pages/ThresholdMedia";
import "./style/reset.scss";
import "./style/atomic.scss";
import "./style/variable.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/md" element={<MDEditor />} />
        <Route path="/ppt" element={<PPTEditor />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/crochet" element={<Crochet />} />
      </Routes>
    </>
  );
}

export default App;
