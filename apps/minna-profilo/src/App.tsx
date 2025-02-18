
import {Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import './style/index.scss';
import {Articles} from "./pages/Articles";
import ArticlesDetail from "./pages/Articles/ArticlesDetail.tsx";
import WebglProjects from "./pages/projects/webgl";
import AudioParticleVisualizer from "./pages/projects/webgl/pages/AudioParticleVisualizer.tsx";

function App() {

  return (
<>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/2025articles" element={<Articles/>}></Route>
        <Route path="/2025articles/details/:id" element={<ArticlesDetail/>}></Route>

        <Route path={'/webgl'} element={<WebglProjects/>}/>
        <Route path={'/webgl/audioParticleVisualizer'} element={<AudioParticleVisualizer/>}/>
    </Routes>
</>
  )
}

export default App
