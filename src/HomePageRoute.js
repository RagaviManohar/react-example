import { Switch, Route } from 'react-router-dom'

import ReactHookExamples from './ReactHookExamples';
import ReachHookFormExamples from './ReactHookFormExamples/index';
import StyledCompExample from './StyledCompExample/index';
import ReactCloneElementExample1 from './ReactCloneElementExample/index.example1';
import ReactCloneElementExample2 from './ReactCloneElementExample/example2-parent';
import FileUpload from './ReactCropper';
import FormExample from './Form';
import DynamicFormExample from './DynamicForm/Example';
import DropZone from './DropZone/index';
import ReactCompOldWayExample from './ReactComponentNewWay/ReactCompOldWayExample';
import ReactCompNewWayExample from './ReactComponentNewWay/ReactCompNewWayExample';

import routes from './routes';

export const HomePageRoute = () => (
  <div className="mt-4">
    <Switch>
      <Route exact path={routes.default} component={ReactHookExamples} />

      <Route exact path={routes.reactHookFormExamples} component={ReachHookFormExamples} />

      <Route exact path={routes.styledCompExample} component={StyledCompExample} />

      <Route exact path={routes.reactCloneElementExample1} component={ReactCloneElementExample1} />

      <Route exact path={routes.reactCloneElementExample2} component={ReactCloneElementExample2} />

      <Route exact path={routes.reactFileUpload} component={FileUpload} />

      <Route exact path={routes.form} component={FormExample} />

      <Route exact path={routes.dynamicForm} component={DynamicFormExample} />

      <Route exact path={routes.reactDropZoneExample} component={DropZone} />

      <Route exact path={routes.reactCompWay1} component={ReactCompOldWayExample} />
      
      <Route exact path={routes.reactCompWay2} component={ReactCompNewWayExample} />
    </Switch>
  </div>
);

export default HomePageRoute;
