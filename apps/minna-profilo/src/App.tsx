
import {Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import './style/index.scss';
import {Articles} from "./pages/Articles";
import ArticlesDetail from "./pages/Articles/ArticlesDetail.tsx";

function App() {

  return (
<>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/articles" element={<Articles/>}></Route>
        <Route path="/articles/details/:id" element={<ArticlesDetail/>}></Route>
    </Routes>
</>
  )
}

export default App
