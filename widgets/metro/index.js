import { Component } from 'react';
import PropTypes from 'prop-types';
import Widget from '../../components/widget';
import styled from 'styled-components';

const Heading = styled.span`
  font-size: 1.3em;
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
  margin-left: 2em;
`;

const Text = styled.span`
  border-radius: 5px;
  color: black;
  font-size: 20px;
  padding: 5px;
  text-align: center;
  margin-bottom: 20px;
`;

const LineNumber = styled.span`
  background: #019cd5;
  border-radius: 5px;
  font-size: 15px;
  height: 15px;
  padding: 5px;
  width: 15px;
`;

const Info = styled.span`
  background: orange;
  border-radius: 5px;
  color: black;
  font-size: 15px;
  height: 15px;
  padding: 5px;
  width: 15px;
`;

const Time = styled.span`
  background: orange;
  border-radius: 5px;
  color: black;
  font-size: 15px;
  height: 15px;
  padding: 5px;
  width: 15px;
`;

const Image = styled.img`
  color: #cf9815;
  text-align: center;
  width: 100px;
  margin-bottom: 10px;
`;

class Metro extends Component {
  /**
   * Default state.
   */
  state = {
    ResponseData: {
      Metros: []
    }
  };

  /**
   * Start interval on mount.
   */
  componentDidMount () {
    this.fetch();
    const { interval } = this.props;
    this.interval = setInterval(this.fetch.bind(this), interval);
  }

  /**
   * Clear interval on unmount.
   */
  componentWillUnmount () {
    clearInterval(this.interval);
  }

  /**
   * Fetch stats.
   */
  fetch () {
    fetch('/proxy?url=' + encodeURIComponent(this.props.url))
      .then(r => r.json())
      .then(r => this.setState(r));
  }

  findMetro(d, metros) {
    const min = 5;
    const ms = metros.filter(m => m.JourneyDirection === d);
    for (let i = 0, l = ms.length; i < l; i++) {
      const d = parseInt(ms[i].DisplayTime.split(' ')[0], 10);
      if (d >= min) {
        return ms[i];
      }
    }
    return ms[0];
  }

  /**
   * Render component.
   */
  render () {
    if (!this.state.ResponseData.Metros.length) {
      return (
        <Widget>
          <Text>Loading...</Text>
        </Widget>
      );
    }

    const metros = this.state.ResponseData.Metros;
    const left = this.findMetro(2, metros);
    const right = this.findMetro(1, metros);

    return (
      <Widget>
        <Image src="http://www.emoji.co.uk/files/google-emojis/travel-places-android/7702-metro.png" />
        <Text>
          {this.props.heading}
        </Text>
        {left ?
        <Heading>
          <LineNumber>{left.LineNumber}</LineNumber> <Info>{left.Destination}: {left.DisplayTime}</Info>
        </Heading>:null}
        {right ?
        <Heading>
          <LineNumber>{right.LineNumber}</LineNumber> <Info>{right.Destination}: {right.DisplayTime}</Info>
        </Heading>:null}
      </Widget>
    );
  }
}

Metro.propTypes = {
  heading: PropTypes.string,
  interval: PropTypes.number,
  url: PropTypes.string
};

Metro.defaultProps = {
  heading: '',
  interval: 60000,
  url: ''
};

export default Metro;
