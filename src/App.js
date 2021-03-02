
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import './App.css';

import ReactHookExamples from './ReactHookExamples';
import ReachHookFormExamples from './ReactHookFormExamples/index';
import ReactCloneElementExample1 from './ReactCloneElementExample/index.example1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/react-hook-form-examples" className="btn btn-primary">React Hook Form Example</Link>

        <div className="mt-2">
          <Switch>
            <Route exact path="/react-hook-form-examples" component={ReachHookFormExamples} />
            <Route exact path="/" component={ReactHookExamples} />

            <Route exact path="/react-clone-element-example1" component={ReactCloneElementExample1} />

            <Route exact path="/react-clone-element-example2" component={ReactCloneElementExample1} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
