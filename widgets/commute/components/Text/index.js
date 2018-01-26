import React from 'react';
import { renderText } from './../../utils/dotmatrix';
import Canvas from './../Canvas';

class Text extends React.Component {
  componentDidUpdate () {
    if (this.el) {
      const { height, children, width } = this.props;
      renderText({
        context: this.el.getContext('2d'),
        text: children,
        width,
        height
      });
    }
  }

  render () {
    const { height, width } = this.props;

    return (
      <Canvas
        width={width}
        height={height}
        innerRef={(ref) => this.el = ref}
      />
    );
  }
}

export default Text;
