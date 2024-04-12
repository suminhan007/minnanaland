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
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/md" element={<MDEditor />} />
        <Route path="/ppt" element={<PPTEditor />} />
=======
        <Route path="/" element={<Colors />} />
        <Route path="/home" element={<Home />} />
        <Route path="/md" element={<MDEditor />} />
        <Route path="/ppt" element={<PPTEditor />} />
        <Route path="/component" element={<ComponentPicker />} />
        <Route path="/threshold-media" element={<ThresholdMedia />} />
>>>>>>> 592f892bf1466baa14eda465e899ca77f98d81f2
        <Route path="/colors" element={<Colors />} />
        <Route path="/crochet" element={<Crochet />} />
      </Routes>
    </>
  );
}

export default App;
