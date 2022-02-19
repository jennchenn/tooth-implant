import { useState } from "react";
import "./App.css";
import implant from "./assets/implant.svg";
import tooth from "./assets/tooth.svg";
import abutment from "./assets/abutment.svg";
import screw from "./assets/screw.svg";

function App() {
  const [isShowComponents, setIsShowComponents] = useState(false);
  const toggleShowComponents = () => {
    setIsShowComponents(!isShowComponents);
  };

  return (
    <div className="App">
      <header className="App-header">Tooth Implant</header>
      <div>
        {!isShowComponents && (
          <div onClick={toggleShowComponents}>
            <img src={implant} alt="implant" />
          </div>
        )}
        {isShowComponents && (
          <div onClick={toggleShowComponents}>
            <div>
              <img src={tooth} alt="tooth" />
            </div>
            <div className="abutment">
              <img src={abutment} alt="abutment" />
            </div>
            <div>
              <img src={screw} alt="screw" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
