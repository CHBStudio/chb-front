import { Route, Switch, Redirect } from 'react-router-dom';

import urls from 'config/urls';
import styles from 'styles';

import LeftBar from './LeftBar';
import Main from './Main';
import Technologies from './Technologies';
import Projects from './Projects';
import Workflow from './Workflow';
import Contact from './Contact';


const rootClass = styled`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 ${styles.indentionBig};
`;

const contentClass = styled`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  padding-left: calc(${styles.leftBarWidth} + ${styles.indentionBig});
  top: 30%;
`;


export default () => (
    <div className={rootClass()}>
      <LeftBar/>
      <div className={contentClass()}>
        <Switch>
          <Route path={urls.main} component={Main}/>
          <Route path={urls.contact} component={Contact}/>
          <Route path={urls.technologies} component={Technologies}/>
          <Route path={urls.workflow} component={Workflow}/>
          <Route path={urls.projects} component={Projects}/>
          <Redirect to={urls.main}/>
        </Switch>
      </div>
    </div>
)