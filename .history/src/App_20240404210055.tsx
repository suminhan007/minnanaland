import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import Colors from "./pages/Colors";
// import PPTEditor from "./pages/PPTEditor";
// import MDEditor from "./pages/MDEditor";
// import ComponentPicker from "./pages/ComponentPicker";
// import ThresholdMedia from "./pages/ThresholdMedia";
import "./style/reset.scss";
import "./style/atomic.scss";
import "./style/variable.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Colors />} />
        <Route path="/colors" element={<Colors />} />
      </Routes>
    </>
  );
}

export default App;
