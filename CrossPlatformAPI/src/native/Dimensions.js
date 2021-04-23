import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

let styles = {};

// width 와 height 를 비구조화하기
const {width, height} = Dimensions.get('window');

// width 객체 속성을 직접 참조
const windowWidth = Dimensions.get('window').width;

const App = () => (
  // View 컴포넌트에서 Dimensions.get 메소드로 확인한 디바이스 정보를 포함한
  // 변수에 저장된 디바이스 크기 정보를 뷰에 렌더링
  <View style={styles.container}>
    <Text>{width}</Text>
    <Text>{height}</Text>
    <Text>{windowWidth}</Text>
  </View>
);

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
