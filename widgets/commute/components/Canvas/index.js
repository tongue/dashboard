import styled from 'styled-components';

export const Canvas = styled.canvas`
  position: ${({ absolute }) => absolute ? 'absolute' : 'relative'};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

export default Canvas;
