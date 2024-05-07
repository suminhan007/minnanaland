import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./pages/Colors";
import PPTEditor from "./pages/PPTEditor";
import MDEditor from "./pages/MDEditor";
import Crochet from "./pages/Crochet";
import R3Fmagic from "./pages/R3Fmagic";
import "./style/reset.scss";
import "./style/atomic.scss";
import "./style/variable.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<R3Fmagic />} />
        <Route path="/home" element={<Home />} />
        <Route path="/md" element={<MDEditor />} />
        <Route path="/ppt" element={<PPTEditor />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/crochet" element={<Crochet />} />
        <Route path="/r3f" element={<R3Fmagic />} />
      </Routes>
    </>
  );
}

export default App;
