import React, { useState, useEffect } from "react";
import "./App.css";
import { Accordion } from "react-bootstrap";
import implant from "./assets/implant.svg";
import tooth from "./assets/tooth.svg";
import abutment from "./assets/abutment.svg";
import screw from "./assets/screw.svg";
import brushing from "./assets/brushing.png";
import flossing from "./assets/flossing.png";
import mouthguard from "./assets/mouthguard.png";
import dentist from "./assets/dentist.png";
import failure from "./assets/failure.png";
import Card from "./components/Card";
import Tooltip from "./components/Tooltip";
import VideoPlayer from "./components/VideoPlayer";
import {
  INTRO,
  COMPONENT_TOOTH,
  COMPONENT_ABUTMENT,
  COMPONENT_SCREW,
  SOLUTION_A,
  SOLUTION_B,
  SOLUTION_MECH,
  INTRO_YT,
  COMPONENT_YT,
  OSSEOINTEGRATION,
  HYGIENE_BRUSHING,
  HYGIENE_FLOSSING,
  HYGIENE_DENTIST,
  HYGIENE_MOUTHGUARD,
  FAILURE_YT,
  HYGIENE_YT,
  SOLUTIONS_YT,
  FAILURE_MODES_LIST,
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
      <header className="subheader">Components/Materials/Procedure</header>
      <div className="spacer20" />
      Hover over each component to learn more.
      <div className="spacer50" />
      <div className="flex">
        <VideoPlayer embedLink={COMPONENT_YT} />
        <div className="components">
          {scrollPosition < 450 && (
            <div onClick={toggleShowComponents}>
              <img src={implant} alt="implant" />
            </div>
          )}
          {scrollPosition > 450 && (
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
                  header="IMPLANT POST"
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
      <div className="spacer20" />
      <Accordion
        className="accordion"
        defaultActiveKey={["0", "1", "2", "3", "4"]}
        alwaysOpen
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Step 1</Accordion.Header>
          <Accordion.Body>
            Tooth is damaged and requires replacing.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Step 2</Accordion.Header>
          <Accordion.Body>
            Tooth is removed; jaw bone regenerates (if necessary, bone grafting
            can be done to increase jaw strength) and gum heals.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Step 3</Accordion.Header>
          <Accordion.Body>
            Implant post is installed. Osseointegration must occur between the
            implant and jaw.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Step 4</Accordion.Header>
          <Accordion.Body>
            Abutment is installed. Gums are given time to heal.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Step 5</Accordion.Header>
          <Accordion.Body>
            Measurements and molds of patient's tooth is taken. Crown is
            custom-made and installed onto the abutment.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="spacer50" />
      <header className="subheader">Failure Modes</header>
      <div className="flex">
        <div>
          <p className="leftAlign">
            A number of things could go wrong with a tooth implant.
          </p>
          {FAILURE_MODES_LIST}
          <Card isImage={false} description={OSSEOINTEGRATION} />
        </div>
        <div className="marginLeft10">
          <img width={300} src={failure} alt="failure" />
          <VideoPlayer embedLink={FAILURE_YT} />
        </div>
      </div>
      <div className="spacer50" />
      <header className="subheader">Proposed Solutions</header>
      <div className="flex">
        <VideoPlayer embedLink={SOLUTIONS_YT} />
        <ul className="leftAlign">
          <li>{SOLUTION_A}</li>
          <li>{SOLUTION_B}</li>
          <li>{SOLUTION_MECH}</li>
        </ul>
      </div>
      <div className="spacer50" />
      <header className="subheader">Dental Hygiene</header>
      <div className="flex">
        <div className="marginRight10">
          <p className="leftAlign">
            The best way to prevent failure in a tooth implant is proper upkeep
            and maintenance:
          </p>
          <Card
            isImage
            image={brushing}
            imgAlt="brushing"
            description={HYGIENE_BRUSHING}
          />
          <Card
            isImage
            image={flossing}
            imgAlt="flossing"
            description={HYGIENE_FLOSSING}
          />
          <Card
            isImage
            image={dentist}
            imgAlt="dentist"
            description={HYGIENE_DENTIST}
          />
          <Card
            isImage
            image={mouthguard}
            imgAlt="mouthguard"
            description={HYGIENE_MOUTHGUARD}
          />
        </div>
        <VideoPlayer className="marginLeft10" embedLink={HYGIENE_YT} />
      </div>
      <div className="spacer50" />
      <div className="spacer50" />
      <header className="subheader">Citations</header>
      <div className="leftAlign">
        <b>Introduction</b>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.reuters.com/article/us-health-dentalimplants-patient-percept-idUSKCN0PJ2GQ20150709"
            >
              Patients can spot trouble with new dental implants
            </a>
          </li>
        </ul>
        <b>Components/Materials/Procedure</b>
        <ul>
          <li>a</li>
          <li>b</li>
        </ul>
        <b>Failure Modes</b>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.nature.com/articles/bdj.2007.74"
            >
              Failures in implant dentistry
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bexleydental.com.au/dental-implants/7-factors-that-cause-implant-failure/"
            >
              7 Factors That Cause a Dental Implant Failure
            </a>
          </li>
        </ul>
        <b>Proposed Solutions</b>
        <ul>
          <li>a</li>
          <li>b</li>
        </ul>
        <b>Dental Hygiene</b>
        <ul>
          <li>a</li>
          <li>b</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
