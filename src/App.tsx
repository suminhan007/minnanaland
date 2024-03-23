import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PPTEditor from './pages/PPTEditor'
import MDEditor from './pages/MDEditor'
import ComponentPicker from './pages/ComponentPicker'
import ThresholdMedia from './pages/ThresholdMedia'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ComponentPicker />} />
        <Route path='/home' element={<Home />} />
        <Route path='/md' element={<MDEditor />} />
        <Route path='/ppt' element={<PPTEditor />} />
        <Route path='/component' element={<ComponentPicker />} />
        <Route path='/threshold-media' element={<ThresholdMedia />} />
      </Routes>
    </>
  )
}

export default App
