import { hex2rgba } from './color';
import CHARSET from './charset';

export const matrixShape = (height = 80, rows = 7, cols = 5, padding = 2) => {
  const tao = 6.283185307179586;

  const pixelPadding = 0.5;
  const pixelRadius = height / (2 * (rows + 2 * padding)) - pixelPadding;
  const pixelOffset = pixelPadding + pixelRadius;
  const pixelDistance = 2 * pixelOffset;

  const on = '#ffae00';
  const off = hex2rgba(on, 0.15);

  return {
    tao,
    panel: {
      height,
      rows,
      cols,
      padding
    },
    pixel: {
      padding: pixelPadding,
      radius: pixelRadius,
      offset: pixelOffset,
      distance: pixelDistance
    },
    color: {
      on,
      off
    }
  };
};

export function renderPanel (context, width, height, realHeight) {
  const shape = matrixShape(height);

  context.clearRect(0, 0, width, realHeight);
  for (let x = shape.pixel.offset; x < width; x += shape.pixel.distance) {
    for (let y = shape.pixel.offset; y < realHeight; y += shape.pixel.distance) {
      renderPixel(context, shape, x, y, shape.color.off);
    }
  }
}

export function renderText ({
  context,
  text,
  width,
  height,
  frame
}) {
  const shape = matrixShape(height);

  context.clearRect(0, 0, width, height);

  let pos = frame
    ? (width - shape.pixel.distance * frame)
    : shape.pixel.distance;
  let x = pos;
  let y = shape.pixel.offset;

  for (let i = 0; i < text.length; i++) {
    let char = CHARSET[text.charAt(i)] || CHARSET['?'];

    for (let j = 0; j < char.length; j++) {
      for (let k = 0; k < char[j].length && x < width; k++, x += shape.pixel.distance) {
        if (char[j].charAt(k) === '.') {
          renderPixel(context, shape, x, y, shape.color.on);
        }
      }

      x = pos;
      y += shape.pixel.distance;
    }

    pos += shape.pixel.distance * (shape.panel.cols + 1);
    x = pos;
    y = shape.pixel.offset;
  }

  const nextFrame = pos < 0 ? 0 : frame + 1;

  return nextFrame;
}

function renderPixel (context, shape, x, y, state) {
  context.beginPath();
  context.arc(x, y, shape.pixel.radius, 0, shape.tao);
  context.fillStyle = state;
  context.fill();
  context.closePath();
}
