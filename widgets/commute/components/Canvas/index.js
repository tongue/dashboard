import styled from 'styled-components';

export const Canvas = styled.canvas`
  position: absolute;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  top: ${({ top }) => top ? `${top}px` : 0}
`;

export default Canvas;
