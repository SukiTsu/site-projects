import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import './assets/style/styleGlobal.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
