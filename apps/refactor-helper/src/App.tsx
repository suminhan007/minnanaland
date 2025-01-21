import './styles/reset.scss';
import './styles/atomic.scss';
import './styles/variable.scss';
import {LandContent, LandHeader, LandLayout} from "@suminhan/land-design";
import { Routes,Route, useNavigate} from "react-router-dom";
import {Nav_Data} from "./mock.ts";
import {useMemo} from "react";
import Home from "./pages/Home";

function App() {
  const navigate = useNavigate();
  const hash = useMemo(() => window.location.hash.split('/')[1], [window.location.hash]);
  return (
      <LandLayout>
        <LandHeader
            // logo={<LandTitle type={'h1'} title={'Refactor Helper'}></LandTitle>}
            menuProps={{
              data: Nav_Data,
              active: hash,
              onChange: (item) => navigate(item.href??'/')
            }}
            align={'end'}
        />
        <LandContent>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
        </LandContent>
      </LandLayout>
  )
}

export default App;
