import React, {Component} from 'react';
import {
  TextInput,
  TouchableHighlight,
  getString,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Clipboard from '@react-native-community/clipboard';

let styles = {};

export default class App extends Component {
  constructor() {
    super();
    // state 에 clipboardData 라는 빈 배열을 지정
    this.state = {
      clipboardData: [],
    };

    this.pushClipboardToArray = this.pushClipboardToArray.bind(this);
  }

  componentDidMount() {
    // Clipboard 의 값을 업데이트
    Clipboard.setString('Hello World! ');
  }

  // updateClipboard 메소드는 기존의 Clipboard 의 값을 업데이트
  updateClipboard(string) {
    Clipboard.setString(string);
  }

  async pushClipboardToArray() {
    const {clipboardData} = this.state;
    var content = await Clipboard.getString();

    clipboardData.push(content);
    this.setState({clipboardData});
  }

  render() {
    const {clipboardData} = this.state;
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Testing Clipboard</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.updateClipboard(text)}
        />
        <TouchableHighlight
          onPress={this.pushClipboardToArray}
          style={styles.button}>
          <Text>Click to Add to Array</Text>
        </TouchableHighlight>

        {clipboardData.map((d, i) => {
          return <Text key={i}>{d}</Text>;
        })}
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 20,
  },
  input: {
    padding: 10,
    marginTop: 15,
    height: 60,
    backgroundColor: '#dddddd',
  },
  button: {
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 15,
  },
});
