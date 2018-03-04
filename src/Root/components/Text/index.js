import styles from 'styles';


const rootClass = styled`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  font-size: ${styles.fontSizeNormal};
  font-weight: ${styles.fontSizeNormal};
  margin-top: ${styles.indentionNormal};
  user-select: text;
`;


export default ({ children, className }) => <p className={cn(rootClass(), className)}>
  { children }
</p>