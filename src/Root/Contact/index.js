import ContentPage from 'components/ContentPage';
import BiggestTitle from 'components/BiggestTitle';
import Text from 'components/Text';
import TextInput from 'components/TextInput';
import RedButton from 'components/RedButton';


export default () => {
  return <ContentPage>
    <BiggestTitle text="Связаться"/>
    <Text>
      Мы свяжемся с Вами чтобы обсудить проект, начать его оценку или ответить на интересущие Вас вопросы.
    </Text>
    <br/>
    <br/>
    <br/>
    <TextInput placeholder="Телефон или почта"/>
    <br/>
    <br/>
    <TextInput placeholder="Имя"/>
    <br/>
    <br/>
    <br/>
    <RedButton text="Отправить"/>
  </ContentPage>
}