import { NavLink } from 'react-router-dom';

import LinkButton from 'components/LinkButton';


const navLinkClass = styled`
  display: inline-block;
  position: relative;
`;

const textClass = styled``;

const backStubClass = styled``;

const navLinkActiveClass = styled`
 & .${textClass()}{
  color: #000;
 }
 
 & .${backStubClass()}{
  border-color: #000;
 }
`;

export default ({ text, to, className }) => {
  return <NavLink
    to={to}
    className={cn(className, navLinkClass())}
    activeClassName={navLinkActiveClass()}
  >
    <LinkButton text={text} backStubClassName={backStubClass()} textClassName={textClass()}/>
  </NavLink>
};