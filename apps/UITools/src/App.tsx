import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Colors from "./pages/Colors";
import Crochet from "./pages/Crochet";
import "./style/reset.scss";
import "./style/atomic.scss";
import "./style/variable.scss";
import "./style/animation.scss";
import UITest from "./pages/UITest";
import Articles from "./pages/Articles";
import UIAutoTool from "./pages/UIAutoTool";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UIAutoTool />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ui-test" element={<UITest />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/crochet" element={<Crochet />} />
        <Route path="/ui-auto" element={<UIAutoTool />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
