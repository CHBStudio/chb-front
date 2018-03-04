import styles from 'styles';


const titleClass = styled`
  display: block;
  position: relative;
  font-size: ${props => props.isMain ? '140px' : '110px'};
  font-weight: bold;
  margin-top: -35px;
  margin-left: -5px;
  
  text-shadow: 5px 5px 0 ${styles.colorLightBlue};
  
  word-wrap: break-word;
  
  user-select: text;
`;


export default ({ text='', isMain=false, className }) => <h1 className={cn(titleClass({ isMain }), className)}>
  { text }
</h1>