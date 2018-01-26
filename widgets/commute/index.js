import React from 'react';
import Widget from '../../components/widget';
import Platform from './components/Platform';

const data = {
  'NorthEvents': [
    {
      'Line': '14',
      'Name': 'Mörby centrum',
      'Value': 'Nu'
    },
    {
      'Line': '13',
      'Name': 'Ropsten',
      'Value': '4 min'
    },
    {
      'Line': '14',
      'Name': 'Mörby centrum',
      'Value': '7 min'
    }
  ],
  'SouthEvents': [
    {
      'Line': '14',
      'Name': 'Liljeholmen',
      'Value': 'Nu'
    },
    {
      'Line': '14',
      'Name': 'Fruängen',
      'Value': '3 min'
    },
    {
      'Line': '13',
      'Name': 'Norsborg',
      'Value': '6 min'
    }
  ]
};

class Commute extends React.Component {
  constructor () {
    super();
    this.state = {
      width: 0,
      height: 80
    };
  }

  componentDidMount () {
    this.setState({ width: this.widget.clientWidth });
  }

  render () {
    const { width, height } = this.state;
    return (
      <Widget innerRef={(ref) => this.widget = ref} width={1} style={{ position: 'relative' }}>
        <Platform width={width} height={height} data={data.NorthEvents} />
        <Platform width={width} height={height} data={data.SouthEvents} top={height * 2} />
      </Widget>
    );
  }
}

export default Commute;
