import styles from 'styles';


const textClass = styled`
  display: inline-block;
  position: relative;
  width: auto;
  height: auto;
  z-index: 1;
  font-size: ${styles.fontSizeNormal};
  font-weight: ${styles.fontWeightNormal};
  color: #000;
  transition: color ${styles.transitionNormal};
  white-space: nowrap;
`;

const backStubClass = styled`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 9px;
  transform: skewX(-15deg);
  border-left: 3px solid ${styles.colorBlue};
  border-right: 3px solid ${styles.colorBlue};
  background-color: transparent;
  z-index: 0;
  transition: border-color ${styles.transitionNormal};
`;

const rootClass = styled`
  display: inline-block;
  position: relative;
  width: auto;
  height: auto;
  cursor: pointer;
  padding-left: ${styles.indentionSmall};
  
  &:hover .${textClass()}{
    color: ${styles.colorBlue};
  }
`;


export default ({ text, className, backStubClassName, textClassName }) => {
  return <div className={cn(rootClass(), className)}>
    <div className={cn(backStubClass(), backStubClassName)}/>
    <div className={cn(textClass(), textClassName)}>
      {text}
    </div>
  </div>
}