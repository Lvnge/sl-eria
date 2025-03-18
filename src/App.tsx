import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Diseños from "./pages/Diseños";
import NavBar from "./components/navBar/NavBar";
import Proyectos from "./pages/Proyectos";
import Mision from "./pages/Mision";

function App() {
  const [isDark, setIsDark] = useState<boolean | null>(null); // Initialize state with `null`

  // This will apply the theme based on the localStorage value, both on load and when the `isDark` state changes
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setIsDark(currentTheme === "dark");
    } else {
      // If no theme is stored, default to light mode
      setIsDark(false);
    }
  }, []); // This effect only runs once when the app first loads

  // Apply the theme to the document
  useEffect(() => {
    if (isDark !== null) {
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, [isDark]); // This effect runs every time the `isDark` state changes

  // Toggle theme function
  const toggleTheme = () => {
    // Add transition class to body
    document.body.classList.add("theme-transition");

    // Toggle dark mode
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    // Remove transition class after transition completes
    window.setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 400); // Match your transition duration
  };

  if (isDark === null) return <div>Loading...</div>; // Render a loading state until the theme is determined

  return (
    <>
      <NavBar isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diseños" element={<Diseños />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/misión" element={<Mision />} />
      </Routes>
    </>
  );
}

export default App;
