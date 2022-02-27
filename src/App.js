import React, { useState, useEffect } from "react";
import "./App.css";
import implant from "./assets/implant.svg";
import tooth from "./assets/tooth.svg";
import abutment from "./assets/abutment.svg";
import screw from "./assets/screw.svg";
import Tooltip from "./components/Tooltip";
import {
  INTRO,
  COMPONENT_TOOTH,
  COMPONENT_ABUTMENT,
  COMPONENT_SCREW,
  MATERIALS,
  FAILURE_MODES,
  SOLUTIONS,
} from "./components/Copy.js";

function App() {
  const [isShowTooth, setIsShowTooth] = useState(false);
  const [isShowAbutment, setIsShowAbutment] = useState(false);
  const [isShowScrew, setIsShowScrew] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleShowComponents = (variable, setter) => {
    setter(!variable);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="spacer100" />
      <header className="main-header">Tooth Implant</header>
      <p>{INTRO}</p>
      <div className="spacer10" />
      <header className="subheader">Components</header>
      <div className="spacer10" />
      <div>
        {scrollPosition < 150 && (
          // {(scrollPosition < 100 || scrollPosition > 500) && (
          <div onClick={toggleShowComponents}>
            <img src={implant} alt="implant" />
          </div>
        )}
        {scrollPosition > 150 && (
          // {scrollPosition > 100 && scrollPosition < 500 && (
          <div onClick={toggleShowComponents}>
            <div
              onClick={() => toggleShowComponents(isShowTooth, setIsShowTooth)}
            >
              <Tooltip
                header="CROWN"
                content={COMPONENT_TOOTH}
                direction="right"
              >
                <img src={tooth} alt="tooth" className="bounce" />
              </Tooltip>
            </div>

            <div className="spacer50" />
            <div
              onClick={() =>
                toggleShowComponents(isShowAbutment, setIsShowAbutment)
              }
            >
              <Tooltip
                header="ABUTMENT"
                content={COMPONENT_ABUTMENT}
                direction="right"
              >
                <img src={abutment} alt="abutment" className="bounce" />
              </Tooltip>
            </div>
            <div className="spacer50" />
            <div
              onClick={() => toggleShowComponents(isShowScrew, setIsShowScrew)}
            >
              <Tooltip
                header="IMPLANT BODY"
                content={COMPONENT_SCREW}
                direction="right"
              >
                <img src={screw} alt="screw" className="bounce" />
              </Tooltip>
            </div>
          </div>
        )}
      </div>
      <div className="spacer50" />
      <header className="subheader">Materials</header>
      <p>{MATERIALS}</p>
      <div className="spacer50" />
      <header className="subheader">Failure Modes</header>
      <p>{FAILURE_MODES}</p>
      <div className="spacer50" />
      <header className="subheader">Proposed Solutions</header>
      <p>{SOLUTIONS}</p>
      <div className="spacer50" />
    </div>
  );
}

export default App;
