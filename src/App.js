import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ReactHookExamples from './ReactHookExamples';
import ReachHookFormExamples from './ReactHookFormExamples/index';
import StyledCompExample from './StyledCompExample/index';
import ReactCloneElementExample1 from './ReactCloneElementExample/index.example1';
import ReactCloneElementExample2 from './ReactCloneElementExample/example2-parent';
import FileUpload from './ReactCropper';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="mt-4">
        <Switch>
          <Route exact path="/" component={ReactHookExamples} />

          <Route exact path="/react-hook-form-examples" component={ReachHookFormExamples} />

          <Route exact path="/styled-comp-example" component={StyledCompExample} />

          <Route exact path="/react-clone-element-example1" component={ReactCloneElementExample1} />

          <Route exact path="/react-clone-element-example2" component={ReactCloneElementExample2} />

          <Route exact path="/react-file-upload" component={FileUpload} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
