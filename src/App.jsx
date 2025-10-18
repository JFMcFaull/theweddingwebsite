import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/themes/ThemeContext";
import Header from "./components/header/header"
import Home from "./pages/home/Home";
import RVSP from "./pages/rvsp/RVSP"
import OurStory from "./pages/ourstory/OurStory"
import Itinerary from "./pages/itinerary/Itinerary"
import Location from "./pages/location/Location"


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
        <Route path="/rvsp" element={<RVSP />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
