import styles from 'styles';


const backClass = styled`
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #fff;
  transform: skewX(-15deg) scaleY(.5);
  box-shadow: 0 0 0 #FFE2E2;
  transition: background-color ${styles.transitionNormal}, box-shadow ${styles.transitionNormal}, transform ${styles.transitionNormal};
  border-left: 10px solid #FD9898;
`;

const textClass = styled`
  display: inline-block;
  position: relative;
  width: auto;
  height: 45px;
  line-height: 45px;
  font-size: ${styles.fontSizeNormal};
  color: #000;
  
  transition: color ${styles.transitionNormal};
  
  &:after{
    content: "!";
    opacity: 0;
  }
`;

const rootClass = styled`
  display: inline-block;
  position: relative;
  padding: 0 ${styles.indentionSmall};
  cursor: pointer;
  transition: transform ${styles.transitionNormal};
  
  &:hover .${backClass()}{
    box-shadow: 5px 5px 0 #FFE2E2;
    background-color: #FD9898;
    transform: skewX(-15deg) scaleY(${props => props.isSmall ? '.75' : '1'});
  }
  
  &:hover .${textClass()}:after{
    content: "!";
    opacity: 1;
  }
  
  &:active{
    transform: translate(5px, 5px);
  }
  
  &:active .${backClass()}{
    box-shadow: 0 0 0 #FFE2E2;
  }
`;


export default ({ text, onClick=()=>{}, isSmall=false, className }) => <div
  className={cn(rootClass({ isSmall }), className)}
  onClick={onClick}
>
  <div className={backClass()}/>
  <div className={textClass()}>{ text }</div>
</div>