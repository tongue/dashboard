import React from 'react';
import Text from './../Text';
import Flex from './../Flex';
import Box from './../Box';

class NextDeparture extends React.Component {
  constructor () {
    super();
    this.state = {
      destinationWidth: 0,
      timeWidth: 0
    };
  }

  componentDidMount () {
    if (this.destination && this.time) {
      setTimeout(() => {
        this.setState({
          destinationWidth: this.destination.clientWidth,
          timeWidth: this.time.clientWidth
        });
      }, 0);
    }
  }

  render () {
    const {
      height,
      destination,
      time,
      line
    } = this.props;
    const {
      destinationWidth,
      timeWidth
    } = this.state;

    return (
      <Flex>
        <Box
          innerRef={(ref) => this.destination = ref}
          width={1 / 10}
        >
          <Text
            width={destinationWidth}
            height={height}
          >
            {line}
          </Text>
        </Box>
        <Box
          innerRef={(ref) => this.destination = ref}
          width={7 / 10}
        >
          <Text
            width={destinationWidth}
            height={height}
          >
            {destination}
          </Text>
        </Box>
        <Box
          innerRef={(ref) => this.time = ref}
          width={2 / 10}
        >
          <Text
            width={timeWidth}
            height={height}
          >
            {time}
          </Text>
        </Box>
      </Flex>
    );
  }
}

export default NextDeparture;
