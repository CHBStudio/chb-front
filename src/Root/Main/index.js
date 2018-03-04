import { Link as RouterLink } from 'react-router-dom';

import urls from 'config/urls';
import styles from 'styles';
import ContentPage from 'components/ContentPage';
import BiggestTitle from 'components/BiggestTitle';
import Text from 'components/Text';
import Link from 'components/Link';
import RedButton from 'components/RedButton';


const buttonClass = styled`
  margin-top: ${styles.indentionNormal};
`;

export default () => {
  return <ContentPage>
    <BiggestTitle isMain={true} text="CHB & co"/>
    <Text>
      Разработка web проектов любой сложности под ключ.
      <br/>
      <br/>
      Команда профессионалов с опытом работы <br/> над проектами для <Link to="#" text="VK"/>, <Link to="#" text="Mail.ru"/>, <Link to="#" text="Сбербанка"/> и
      других крупных компаний.
      <br/>
      <br/>
      <br/>
      <br/>
      Свяжитесь с нами, чтобы оценить проект, ознакомиться с портфолио или задать интересующие Вас вопросы.
    </Text>
    <RouterLink to={urls.contact}>
      <RedButton text="Напишите нам" className={buttonClass()}/>
    </RouterLink>
  </ContentPage>
}