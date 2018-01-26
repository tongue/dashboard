import React from 'react';
import NextDeparture from './../NextDeparture';
import Layout from './../Layout';
import Panel from './../Panel';
import Marquee from './../Marquee';
import Relative from './../Relative';

const Platform = ({ width, height, data, top }) => {
  const next = data[0];
  const rest = data.slice(1);

  const message = rest.map(
    ({ Line, Name, Value }) => `${Line} ${Name}  ${Value}`
  ).join('   ');

  return (
    <Layout top={top}>
      <Relative width={width} height={height}>
        <Panel width={width} height={height} />
        <NextDeparture
          height={height}
          destination={next.Name}
          time={next.Value}
          line={next.Line}
        />
      </Relative>
      <Relative width={width} height={height}>
        <Panel
          width={width}
          height={height}
          top={height}
        />
        <Marquee
          width={width}
          height={height}
          top={height}
        >
          {message}
        </Marquee>
      </Relative>
    </Layout>
  );
};

export default Platform;
