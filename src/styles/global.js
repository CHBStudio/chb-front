import { injectGlobal } from 'styled-classnames';

import styles from 'styles';


injectGlobal`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: normal;
    user-select: none;
  }
  
  #root{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: ${styles.screenMinWidth};
  }
`;