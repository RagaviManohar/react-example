import "./App.css";

import HooksExample from "./ReactHookExamples/HooksExample";
import SetInternalWithUseState from "./ReactHookExamples/SetInternalWithUseState";
import {
  SideMenuStyles,
  TopDownMenuStyles,
  CommonStyles,
} from "./CommonStyles/SideMenuStyles";

function App() {
  return (
    <CommonStyles>
      <SideMenuStyles type="right" width={"100px"} />
      <TopDownMenuStyles type="top">
        <HooksExample />
        <SetInternalWithUseState />
      </TopDownMenuStyles>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </CommonStyles>
  );
}

export default App;
