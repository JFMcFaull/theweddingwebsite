import React, { useState, useEffect } from "react";
import "./Home.css";
import CountFrom from "../../components/countFrom/CountFrom";
import CountTo from "../../components/countTo/CountTo";
import { useTheme } from "../../components/themes/ThemeContext";
import edinburgh from "../../assets/photos/edinburgh.jpg"

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setTheme } = useTheme();

  const sections = [
    { id: "blank", theme: "dark" },
    { id: "first", theme: "dark" },
    { id: "second", theme: "dark" },
    { id: "third", theme: "dark" },
    { id: "forth", theme: "light" },
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
    setTheme(sections[activeIndex].theme);
  }, [activeIndex, sections, setTheme]);


  return (
    <>
      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={`${section.id} fade-section ${activeIndex === i ? "visible" : "hidden"}`}
        >
          <div className={`${section.id}container`}>

            {section.id === "blank" && (
              <>
              </>
            )}

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
                <h1 className="since">...and in <CountTo toDate="2026-09-05" /> days{" "}
                </h1>
                <h1>we hope you will come join us</h1>
                <h1>for a boogie...</h1>
              </>
            )}

            {section.id === "third" && (
              <>
              <h1>... as we start </h1>
              <h1>our biggest adventure together</h1>
              <h1>yet ...</h1>
              </>
            )}

            {section.id === "forth" && (
              <>
              <div className="lastContainer">
                <div className="stackedContainer">
                <img src={edinburgh} alt="House image" className="edinburgh" />
                <p className="song">I put my palms before her eyes and she told me my truth. Laid the road for me, a rich man's destiny but she saw it without you. She's a liar, she has no clue, you're the one thing I will not lose. I'll turn the tide, pull down the moon, run rivers dry, battle fate for you. Let's burn the pages, we'll start anew, right through the ages, to prove fate don't know you like I do. Like I do. I'm gonna make you feel my love, leave you no room for doubt. No other hope for me, you're my destiny. Won't go nowhere without you, you're my fire, that much is true. You're the one thing I will not lose. I'll turn the tide, pull down the moon, run rivers dry, battle fate for you. Let's burn the pages, we'll start anew, right through the ages, to prove fate don't know you like I do, oh-oh-oh. Like I do, Like I do. You're my fire, they have no clue, you're the one thing I will not lose. I will not lose. I'll turn the tide, pull down the moon, run rivers dry, battle fate for you. Let's burn the pages, we'll start anew, right through the ages, fate don't know you like I do. Oh-oh-oh-oh, know you like I do, fate don't know you like I do.</p>
                </div>
                <div className="lastTextContainer">
                  <h1>We're tying the knot</h1>
                  <h2>05.09.2026</h2>
                </div>
              </div>
              </>
            )}
          </div>
        </section>
      ))}
    </>
  );
}