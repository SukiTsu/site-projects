import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Site from "./components/projet/site";
import Danse from "./components/projet/danse/danse";
import Dessin from "./components/projet/dessin/dessin";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<Site />} />
        <Route path="/dance" element={<Danse />} />
        <Route path="/dessin" element={<Dessin />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
