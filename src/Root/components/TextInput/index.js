import styles from 'styles';


const rootClass = styled`
  display: inline-block;
  position: relative;
  width: 300px;
  height: auto;
  margin-right: ${styles.indentionSmall};
`;

const stubClass = styled`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 1;
  border-left: 10px solid ${styles.colorGray};
  transform: skewX(-15deg) scaleY(.5);
  transition: background ${styles.transitionNormal}, transform ${styles.transitionNormal};
`;

const inputClass = styled`
  display: block;
  position: relative;
  width: 100%;
  z-index: 2;
  height: 45px;
  line-height: 45px;
  background-color: transparent;
  font-size: ${styles.fontSizeNormal};
  font-weight: ${styles.fontWeightNormal};
  font-style: italic;
  color: ${styles.colorDarkGray};
  outline: none;
  border: none;
  padding: 0 ${styles.indentionSmall};
  
  transition: color ${styles.transitionNormal},
              font-style ${styles.transitionNormal};
  
  &:focus{
    color: #000;
    font-style: normal;
  }
  
  &:focus ~ .${stubClass()} {
    transform: skewX(-15deg) scaleY(1);
    background-color: ${styles.colotLightGray};
  }
`;


export default ({ className, placeholder='' }) => {
  return <div className={cn(rootClass(), className)}>
    <input type="text" className={inputClass()} placeholder={placeholder}/>
    <div className={stubClass()}/>
  </div>
}