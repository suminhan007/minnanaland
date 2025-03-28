
import {Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import './style/index.scss';
import {Articles} from "./pages/Articles";
import ArticlesDetail from "./pages/Articles/ArticlesDetail.tsx";
import WebglProjects from "./pages/projects/webgl";
import AudioParticleVisualizer from "./pages/projects/webgl/pages/AudioParticleVisualizer.tsx";
import Works from "./pages/projects/works/Works.tsx";
import Earth from "./pages/projects/webgl/pages/Earth.tsx";
import ImgEffect from "./pages/projects/ImgEffect";
import PickMainColors from "./pages/projects/ImgEffect/pages/PickMainColors.tsx";
import ImgPixel from "./pages/projects/ImgEffect/pages/ImgPixel.tsx";
import ImgWaterMark from "./pages/projects/ImgEffect/pages/ImgWaterMark.tsx";
import ImgColorChange from "./pages/projects/ImgEffect/pages/ImgColorChange.tsx";

function App() {

  return (
<>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/2025articles" element={<Articles/>}></Route>
        <Route path="/2025articles/details" element={<ArticlesDetail/>}></Route>

        <Route path={'/works'} element={<Works/>}/>

        <Route path={'/webgl'} element={<WebglProjects/>}/>
        <Route path={'/webgl/audioParticleVisualizer'} element={<AudioParticleVisualizer/>}/>
        <Route path={'/webgl/earth'} element={<Earth/>}/>

        <Route path={'/imgEffect'} element={<ImgEffect/>}/>
        <Route path={'/imgEffect/pickMainColors'} element={<PickMainColors/>}/>
        <Route path={'/imgEffect/imgPixel'} element={<ImgPixel/>}/>
        <Route path={'/imgEffect/imgColorChange'} element={<ImgColorChange/>}/>
        <Route path={'/imgEffect/imgWaterMark'} element={<ImgWaterMark/>}/>
    </Routes>
</>
  )
}

export default App
