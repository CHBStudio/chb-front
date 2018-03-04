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
    <BiggestTitle text="Как мы работаем"/>
  </ContentPage>
}