import styles from 'styles';
import ContentPage from 'components/ContentPage';
import BiggestTitle from 'components/BiggestTitle';
import Text from 'components/Text';
import Title from 'components/Title';


const textClass = styled`
  margin-top: 0 !important;
`;

export default () => {
  return <ContentPage>
    <BiggestTitle text="Технологии"/>
    <Text>
      Мы используем новейшие техники и технологии создания веб-проектов.
    </Text>
    <br/>
    <br/>
    <br/>
    <Title text="Frontend" color={styles.colorYellow}/>
    <br/>
    <Text className={textClass()}>
      React, Redux, Babel, ES6, SCSS, PostCSS, Webpack, Parcel, Styled Components.
    </Text>
    <br/>
    <br/>
    <Title text="Backend" color={styles.colorPurple}/>
    <br/>
    <Text className={textClass()}>
      Python, AsyncIO, Tornado, Django, Node.js, MySQL, MongoDB, PostgreSQL, Nginx, Tarantool, Redis.
    </Text>
  </ContentPage>
}