import React from 'react';
import { renderText } from './../../utils/dotmatrix';
import Canvas from './../Canvas';

class Marquee extends React.Component {
  constructor () {
    super();
    this.state = {
      context: null,
      frame: 0
    };
  }

  componentDidMount () {
    this.setState({
      context: this.el.getContext('2d')
    });
  }

  componentDidUpdate (previousProps, previousState) {
    if (this.el) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => this.scroll(), 20);
    }
  }

  componentWillUnmount () {
    clearTimeout(this.timeout);
  }

  scroll () {
    const { width, height, children } = this.props;
    const { context, frame } = this.state;
    const nextFrame = renderText({
      width,
      height,
      text: children,
      context,
      frame
    });
    this.setState({
      frame: nextFrame
    });
  }

  render () {
    const { height, width, top } = this.props;

    return (
      <Canvas
        width={width}
        height={height}
        top={top}
        innerRef={(ref) => this.el = ref}
        style={{ transform: 'translateY(-5%)' }}
      />
    );
  }
}

export default Marquee;
