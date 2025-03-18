import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Diseños from "./pages/Diseños";
import NavBar from "./components/navBar/NavBar";
import Proyectos from "./pages/Proyectos";
import Mision from "./pages/Mision";

function App() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  // Initialize theme from localStorage or default to light mode
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setIsDark(currentTheme === "dark" || false);
  }, []);

  // Apply theme class when isDark changes
  useEffect(() => {
    if (isDark !== null) {
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;

    // Save preference
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    // Update iOS status bar
    const metaTag = document.getElementById("apple-status-bar-style");
    if (metaTag) {
      metaTag.setAttribute(
        "content",
        newTheme ? "black-translucent" : "default"
      );
    }

    // Force iOS repaint
    document.body.style.display = "none";
    requestAnimationFrame(() => {
      document.body.style.display = "";
    });

    // Update theme state
    setIsDark(newTheme);
  };

  if (isDark === null) return null; // Simpler loading state

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
