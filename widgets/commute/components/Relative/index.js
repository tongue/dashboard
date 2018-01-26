import styled from 'styled-components';

export const Relative = styled.div`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

export default Relative;
