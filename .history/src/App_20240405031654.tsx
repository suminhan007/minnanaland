import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "@/pa";
import PPTEditor from "./pages/PPTEditor";
import MDEditor from "./pages/MDEditor";
import "./style/reset.scss";
import "./style/atomic.scss";
import "./style/variable.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Colors />} />
        <Route path="/home" element={<Home />} />
        <Route path="/md" element={<MDEditor />} />
        <Route path="/ppt" element={<PPTEditor />} />
        <Route path="/colors" element={<Colors />} />
      </Routes>
    </>
  );
}

export default App;
