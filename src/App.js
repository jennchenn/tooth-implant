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
import osseointegration from "./assets/osseointegration.jpg";
import bone_loss from "./assets/bone_loss.png";
import ha_coating from "./assets/ha_coating.png";
import background from "./assets/background.png";

import Card from "./components/Card";
import Tooltip from "./components/Tooltip";
import VideoPlayer from "./components/VideoPlayer";

import {
  INTRO,
  COMPONENT_TOOTH,
  COMPONENT_ABUTMENT,
  COMPONENT_SCREW,
  SOLUTION_A,
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
  CONCLUSION_YT,
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
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="spacer100" />
      <header className="main-header">Tooth Implant</header>
      <p className="names">
        ME4253 | Jennifer Chen, Tristan Leroux Kuhn, Marius Tacke, Ho Lin Ying,
        Isabel Eva Wleugel
      </p>
      <div className="spacer50" />
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
      <header className="subheader">Failure Mode</header>
      <div className="flex">
        <div>
          <p className="leftAlign">
            There are a number of things that could go wrong with a tooth
            implant. But the by far most relevant in practice is failing
            osseointegration.
          </p>
          <Card isImage={false} description={OSSEOINTEGRATION} />
          {FAILURE_MODES_LIST}
        </div>
        <div className="marginLeft10">
          <img
            className="marginBottom5"
            width={300}
            src={osseointegration}
            alt="osseointegration"
          />
          <img
            className="marginBottom5"
            width={300}
            src={bone_loss}
            alt="bone loss"
          />
          <VideoPlayer embedLink={FAILURE_YT} />
        </div>
      </div>
      <div className="spacer50" />
      <header className="subheader">Proposed Solution</header>
      <div className="flex">
        <div>
          <VideoPlayer embedLink={SOLUTIONS_YT} />
          <img width={300} src={ha_coating} alt="HA coating" />
        </div>
        <div className="leftAlign marginLeft20">
          Our following proposal here aims to improve the osseointegration of
          tooth implants:
          {SOLUTION_A}
        </div>
      </div>
      <div className="spacer50" />
      <header className="subheader">Failure Prevention</header>
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
      <VideoPlayer embedLink={CONCLUSION_YT} />
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
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.casadental.com.sg/dental-implant-procedure/"
            >
              What is a dental implant procedure?
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dentaldesigns.com.sg/dental-crowns-what-materials-are-there-and-whats-best-for-you/"
            >
              Dental Crowns - What Materials Are There and What's Best For You
            </a>
          </li>
        </ul>
        <b>Failure Mode</b>
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
        <b>Proposed Solution</b>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.colgate.com/en-us/oral-health/implants/zirconia-vs-titanium-implants-which-one-is-right-for-you"
            >
              Zirconia vs. Titanium Implants: Which One Is Right for You?
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.beverlyhillsladentist.com/blog/are-zirconia-implants-better-than-titanium/"
            >
              Zirconia Dental Implants Vs. Titanium Implants
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.kirklandpremierdentistry.com/blog/dental-implants-materials-an-introduction"
            >
              Materials Used in Dental Implants: A Comparison
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.straumann.com/sg/en/dental-professionals/science/literature/roxolid.html"
            >
              Straumann Roxolid
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.himed.com/blog/benefits-hydroxyapatite-coatings-ortho-dental-implants"
            >
              A Basic Guide to Key Benefits of Hydroxyapatite Coatings for
              Orthopedic and Dental Implants
            </a>
          </li>
        </ul>
        <b>Failure Prevention</b>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.badiedental.com/blog/dental-implant-failure-common-causes-and-how-to-prevent-implants-from-failing"
            >
              Dental Implant Failure: Common Causes and How to Prevent Implants
              from Failing
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
