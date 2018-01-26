import React from 'react';
import { renderPanel } from './../../utils/dotmatrix';
import Canvas from './../Canvas';

class Panel extends React.Component {
  componentDidUpdate () {
    if (this.el) {
      setTimeout(() => {
        const { height, width } = this.props;
        renderPanel(this.el.getContext('2d'), width, height, height * 2);
      }, 0);
    }
  }

  render () {
    const { height, width, top } = this.props;

    return (
      <Canvas
        width={width}
        height={height * 2}
        top={top}
        innerRef={(ref) => this.el = ref}
        absolute
      />
    );
  }
}

export default Panel;
