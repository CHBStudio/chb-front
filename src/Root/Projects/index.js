import styles from 'styles';
import ContentPage from 'components/ContentPage';
import BiggestTitle from 'components/BiggestTitle';
import Text from 'components/Text';

import mailLogo from './img/mailru.svg';
import nescafeLogo from './img/nescafe.svg';
import sberbankLogo from './img/sberbank.svg';
import vkLogo from './img/vk.svg';


const textClass = styled`
  margin-top: 0 !important;
`;

const logoClass = styled`
  display: inline-block;
  position: relative;
  height: 75px;
  margin-right: ${styles.indentionNormal};
  margin-bottom: ${styles.indentionSmall};
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  
  ${props => props.mail && css`
    background-image: url(${mailLogo});
    width: 100px;
  `}
  
  ${props => props.nescafe && css`
    background-image: url(${nescafeLogo});
    width: 110px;

  `}
  
  ${props => props.sberbank && css`
    background-image: url(${sberbankLogo});
    width: 120px;
  `}
  
  ${props => props.vk && css`
    background-image: url(${vkLogo});
    width: 45px;
  `}
`;


export default () => {
  return <ContentPage>
    <BiggestTitle text="Проекты"/>
    <Text>
      Мы создаем веб-сайты, ботов и мобильные приложения и бла бла
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur autem, deleniti dolor earum facilis fugiat hic itaque magnam maxime nihil odit quia quidem quos sapiente similique, sint, velit voluptates!
    </Text>
    <br/>
    <br/>
    <br/>
    <br/>
    <Text className={textClass()}>
      Наша команда имеет работы на проектами для следующих компаний
    </Text>
    <br/>
    <div className={logoClass({ mail: true })}/>
    <div className={logoClass({ nescafe: true })}/>
    <div className={logoClass({ sberbank: true })}/>
    <div className={logoClass({ vk: true })}/>
  </ContentPage>
}