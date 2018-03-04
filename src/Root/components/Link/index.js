import { Link } from 'react-router-dom';

import styles from 'styles';


const rootClass = styled`
  display: inline-block;
  position: relative;
  font-size: inherit;
  font-weight: ${styles.fontWeightBold};
  color: ${styles.colorBlue};
  transition: color ${styles.transitionNormal};
  text-decoration: none;
  
  &:hover{
    color: ${styles.colorDarkBlue};
  }
`;


export default ({ to, text, className }) => <Link to={to} className={cn(rootClass(), className)}>
  { text }
</Link>