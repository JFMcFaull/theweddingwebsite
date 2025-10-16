import React, { useState, useEffect } from "react";
import "./Home.css";
import CountFrom from "../../components/CountFrom";
import CountTo from "../../components/CountTo";
import { useTheme } from "../../components/ThemeContext";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    { id: "first", theme: "dark" },
    { id: "second", theme: "dark" },
    { id: "third", theme: "dark" },
    { id: "forth", theme: "dark" },
    { id: "fifth", theme: "light" },
  ];

  useEffect(() => {
    let timeout = 5000; 
    if (activeIndex === 0) {
      timeout = 1000;
    }
    if (activeIndex < sections.length - 1) {
      const timer = setTimeout(() => {
        setActiveIndex((prev) => prev + 1);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, sections.length]);

  useEffect(() => {
      document.body.setAttribute("data-theme", sections[activeIndex].theme);
  }, [activeIndex, sections]);


  return (
    <>
      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`${section.id} fade-section ${activeIndex === i ? "visible" : "hidden"}`}
        >
          <div className={`${section.id}container`}>

            {section.id === "first" && (
              <>
                <h1>This party has been</h1>
                <h1 className="since">
                  <CountFrom fromDate="2020-07-02" /> days
                </h1>
                <h1>in the making...</h1>
              </>
            )}

            {section.id === "second" && (
              <>
                <h1>This party has been</h1>
                <h1 className="since">
                  <CountFrom fromDate="2020-07-02" /> days
                </h1>
                <h1>in the making...</h1>
              </>
            )}

            {section.id === "third" && (
              <>
              <h1>... and in </h1>
                <h1 className="since">
                  <CountTo toDate="2026-09-05" /> days{" "}
                </h1>
                <h1>we hope you will come join us for a boogie ...</h1>
              </>
            )}

            {section.id === "forth" && (
              <h1>... as we start our biggest adventure together yet ...</h1>
            )}

            {section.id === "fifth" && (
              <>
                  <h1>We're tying the knot</h1>
                  <h2>05.09.2026</h2>
              </>
            )}
          </div>
        </section>
      ))}
    </>
  );
}