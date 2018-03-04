import styles from 'styles';


const rootClass = styled`
  display: block;
  position: relative;
  max-width: ${styles.maxContentWidth};
  margin: 0 auto;
  padding-bottom: ${styles.indentionBig};
`;


export default ({ children }) => <div className={rootClass()}>
  { children }
</div>