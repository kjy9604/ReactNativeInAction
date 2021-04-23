import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      connectionInfo: {},
    };
  }

  componentDidMount() {
    // 초기 연결 상태를 파악하고 state 에 저장
    NetInfo.fetch().then(connectionInfo => {
      console.log('Connection type', connectionInfo.type);
      console.log('Is connected?', connectionInfo.isConnected);
      this.setState(connectionInfo);
    });

    // 새로운 여결 상태를 파악하고 state 에 저장
    NetInfo.addEventListener(connectionInfo => {
      console.log('Changed Connection type', connectionInfo.type);
      console.log('Is connected?', connectionInfo.isConnected);
      this.setState(connectionInfo);
    });
  }

  // 연결 상태를 화면에 렌더링
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
