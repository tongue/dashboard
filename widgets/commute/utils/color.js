export function hex2rgba(hex, opacity = 1) {
  const result = /^#?([\dA-Fa-f]{2})([\dA-Fa-f]{2})([\dA-Fa-f]{2})$/i.exec(hex);
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return ['rgba','(',r,',',g,',',b,',',opacity,')'].join('');
}
