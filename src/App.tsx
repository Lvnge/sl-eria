import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Diseños from "./pages/Diseños";
import NavBar from "./components/navBar/NavBar";
import Proyectos from "./pages/Proyectos";
import Mision from "./pages/Mision";

// Define the transition duration in one place
const TRANSITION_DURATION = 400; // milliseconds

function App() {
  const [isDark, setIsDark] = useState<boolean | null>(null); // Initialize state with `null`
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  // Toggle theme function with centralized transition
  const toggleTheme = () => {
    // Start transition
    setIsTransitioning(true);
    document.body.classList.add("theme-transition");

    // Toggle theme
    const newTheme = !isDark;
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    setIsDark(newTheme);

    // Remove transition class after transition completes to prevent affecting other animations
    setTimeout(() => {
      document.body.classList.remove("theme-transition");
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  };

  if (isDark === null) return <div>Loading...</div>; // Render a loading state until the theme is determined

  return (
    <>
      <NavBar
        isDark={isDark}
        toggleTheme={toggleTheme}
        isTransitioning={isTransitioning}
      />
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
