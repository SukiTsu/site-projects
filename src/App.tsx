import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projets from "./page/project";
import Home from "./page/home";
import Contact from "./page/contact";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
