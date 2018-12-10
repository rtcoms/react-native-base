import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

class TestMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onNameChange(text) {
    this.setState({ name: text });
  }

  onButtonPress() {
    this.props.onSubmit(this.state.name);
  }

  render() {
    return (
      <View>

        <Text>Message: {this.props.message}</Text>

        <TextInput
          onChangeText={this.onNameChange}
          value={this.state.name}
          testID="name-input"
        />

        <Button
          title="Submit"
          onPress={this.onButtonPress}
          testID="submit-button"
        />

      </View>
    );
  }
}

TestMe.propTypes = {
  message: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TestMe;
