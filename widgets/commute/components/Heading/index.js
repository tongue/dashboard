import styled from 'styled-components';

const bgColor = 'rgb(70, 68, 80)';

const Heading = styled.h1`
  border: 2px solid rgba(70, 68, 80, 0.5);
  padding: 1em 0.3em 0.3em;
  text-align: center;
  font-size: 4em;
  color: #fff;
  margin: 0;
  background: ${({ lineColor }) => `linear-gradient(to bottom, ${lineColor} 0%, ${lineColor} 20%,  ${bgColor} 20%, ${bgColor} 100%)`};
  background-repeat: no-repeat;
  font-weight: normal;
`;

export default Heading;
