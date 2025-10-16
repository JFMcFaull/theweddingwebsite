import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Location from "./pages/location/location";
import Header from "./header";
import { useEffect } from "react";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
   useEffect(() => {
    const lightFavicon = "/FaviconLight.png";
    const darkFavicon = "/FaviconDark.png";

    const setFavicon = (isDark) => {
      const link =
        document.querySelector("link[rel~='icon']") ||
        document.createElement("link");
      link.rel = "icon";
      link.href = isDark ? darkFavicon : lightFavicon;
      document.head.appendChild(link);
    };

    const darkModeMedia = window.matchMedia("(prefers-color-scheme: dark)");
    setFavicon(darkModeMedia.matches);

    darkModeMedia.addEventListener("change", (e) => {
      setFavicon(e.matches);
    });
  }, []);

  return (
  <BrowserRouter>
    <ThemeProvider>
  <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
