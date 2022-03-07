import React, { useState, useEffect } from "react";
import "./App.css";
import implant from "./assets/implant.svg";
import tooth from "./assets/tooth.svg";
import abutment from "./assets/abutment.svg";
import screw from "./assets/screw.svg";
import brushing from "./assets/brushing.png";
import flossing from "./assets/flossing.png";
import mouthguard from "./assets/mouthguard.png";
import dentist from "./assets/dentist.png";
import Card from "./components/Card";
import Tooltip from "./components/Tooltip";
import VideoPlayer from "./components/VideoPlayer";
import {
  INTRO,
  COMPONENT_TOOTH,
  COMPONENT_ABUTMENT,
  COMPONENT_SCREW,
  MATERIALS,
  SOLUTIONS,
  INTRO_YT,
  COMPONENT_YT,
  HYGIENE_BRUSHING,
  HYGIENE_FLOSSING,
  HYGIENE_DENTIST,
  HYGIENE_MOUTHGUARD,
  FAILURE_YT,
  HYGIENE_YT,
  SOLUTIONS_YT,
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
      <div>
        <p className="leftAlign marginLeft10">{INTRO}</p>
        <VideoPlayer embedLink={INTRO_YT} />
      </div>
      <div className="spacer10" />
      <header className="subheader">Components</header>
      <div className="spacer10" />
      <div className="flex">
        <VideoPlayer embedLink={COMPONENT_YT} />
        <div className="components">
          {scrollPosition < 500 && (
            <div onClick={toggleShowComponents}>
              <img src={implant} alt="implant" />
            </div>
          )}
          {scrollPosition > 500 && (
            <div onClick={toggleShowComponents}>
              <div
                onClick={() =>
                  toggleShowComponents(isShowTooth, setIsShowTooth)
                }
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
                onClick={() =>
                  toggleShowComponents(isShowScrew, setIsShowScrew)
                }
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
      </div>
      <div className="spacer50" />
      <header className="subheader">Materials</header>
      <p>{MATERIALS}</p>
      <div className="spacer50" />
      <header className="subheader">Failure Modes</header>
      <div className="flex">
        <div>
          <p className="leftAlign">
            A number of things could go wrong with a tooth implant:
          </p>
          <ol className="leftAlign">
            <li>
              Implant becomes loose: failing osseointegration can be caused by
              allergic reaction, infection, or premature loading of the implant
            </li>
            <li>Abutment unable to fix the crown to the implant</li>
            <li>Abrasion of the crown</li>
            <li>
              Mechanical failure of components (e.g. of the implant due to
              overloading)
            </li>
          </ol>
        </div>
        <VideoPlayer embedLink={FAILURE_YT} />
      </div>
      <div className="spacer50" />
      <header className="subheader">Proposed Solutions</header>
      <VideoPlayer embedLink={SOLUTIONS_YT} />
      <p>{SOLUTIONS}</p>
      <div className="spacer50" />
      <header className="subheader">Dental Hygiene</header>
      <div className="flex">
        <div className="marginRight10">
          <p className="leftAlign">
            The best way to prevent failure in a tooth implant is proper upkeep
            and maintenance:
          </p>
          <Card
            image={brushing}
            imgAlt="brushing"
            description={HYGIENE_BRUSHING}
          />
          <Card
            image={flossing}
            imgAlt="flossing"
            description={HYGIENE_FLOSSING}
          />
          <Card
            image={dentist}
            imgAlt="dentist"
            description={HYGIENE_DENTIST}
          />
          <Card
            image={mouthguard}
            imgAlt="mouthguard"
            description={HYGIENE_MOUTHGUARD}
          />
        </div>
        <VideoPlayer className="marginLeft10" embedLink={HYGIENE_YT} />
      </div>
      <div className="spacer50" />
    </div>
  );
}

export default App;
