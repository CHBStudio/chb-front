import styles from 'styles';
import BiggestTitle from 'components/BiggestTitle';


const titleClass = styled`
  font-size: ${styles.fontSizeBig};
  text-shadow: 2px 2px 0 ${props => props.color};
  margin: 0;
`;


export default ({ text, className, color=styles.colorLightBlue }) => <BiggestTitle text={text} className={cn(titleClass({ color }), className)}/>