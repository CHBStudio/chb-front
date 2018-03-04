import { Route, Link } from 'react-router-dom';

import NavLink from 'components/NavLink';
import RedButton from 'components/RedButton';
import urls from 'config/urls';
import styles from 'styles';


const containerClass = styled`
  display: block;
  position: fixed;
  width: ${styles.leftBarWidth};
  left: ${styles.indentionBig};
  top: 30%;
  z-index: 1;
`;

const linkClass = styled`
  margin-bottom: ${styles.indentionSmall};
`;


export default () => {
  return <div className={containerClass()}>
    <NavLink
      to={urls.technologies}
      text="Технологии"
      className={linkClass()}
    />
    <br/>
    <NavLink
      to={urls.projects}
      text="Проекты"
      className={linkClass()}
    />
    <br/>
    <NavLink
      to={urls.workflow}
      text="Как мы работаем"
      className={linkClass()}
    />
    <br/>
    <br/>
    <br/>
    <br/>
    <Route path={urls.main}>{ props => !props.match && <NavLink to={urls.main} text="На главную"/> }</Route>
    <br/>
    <br/>
    <Route path={urls.main}>{ props => !props.match &&
      <Route path={urls.contact}>{props => !props.match &&
        <Link to={urls.contact}>
          <RedButton text="Напишите нам" isSmall={true}/>
        </Link>
      }</Route>
    }</Route>
  </div>
}