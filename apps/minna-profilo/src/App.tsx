
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import './style/index.scss';
import {Articles} from "./pages/Articles";

function App() {

  return (
<>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/articles" element={<Articles/>}></Route>
    </Routes>
</>
  )
}

export default App
