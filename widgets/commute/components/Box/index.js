import styled from 'styled-components';

export const Box = styled.div`
  width: ${({ width }) => `${width * 100}%`};
`;

export default Box;
