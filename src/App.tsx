// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diseños from "./pages/Diseños";
import NavBar from "./components/navBar/NavBar";
import Proyectos from "./pages/Proyectos";
import Mision from "./pages/Mision";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diseños" element={<Diseños />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/misión" element={<Mision />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
