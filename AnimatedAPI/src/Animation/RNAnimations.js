import React, {Component} from 'react';
import {StyleSheet, View, Animated, Button} from 'react-native';

export default class RNAnimations extends Component {
  // marginTop 이라는 클래스 속성을 만들고 애니메이션 효과를 만들고, 시작값을 전달(여기선 20)
  marginTop = new Animated.Value(20);

  // 애니메이션 효과를 실행하는 함수
  animate = () => {
    Animated.timing(this.marginTop, {
      toValue: 200,
      duration: 500,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Animate Box" onPress={this.animate} />
        <Animated.View style={[styles.box, {marginTop: this.marginTop}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});
