import ReactDOM from "react-dom";

import styled from 'styled-components';




const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  
  transform: scale(1.2);
  
  :hover{
    background: deepskyblue;
  }
`;




class HelloMessage extends Component {
  render() {
    return <Wrapper>
      <Title>
        Hello World, this is my first styled component!
      </Title>
    </Wrapper>
  }
}

console.warn(HelloMessage);

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="sdkjfn" />, mountNode);