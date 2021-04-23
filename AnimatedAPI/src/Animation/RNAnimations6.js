import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

export default class RNAnimations6 extends Component {
  constructor() {
    super();
    // 1,000개의 애니메이션효과를 포함한 배열 만들기, 초깃값은 0으로 지정
    this.animatedValues = [];
    for (let i = 0; i < 1000; i++) {
      this.animatedValues[i] = new Animated.Value(0);
    }

    // animatedValues 배열에 Animated.timing 이 적용된 애니메이션 배열 만들기
    this.animations = this.animatedValues.map(value => {
      return Animated.timing(value, {
        toValue: 1,
        duration: 6000,
      });
    });
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    // 15ms 간격으로 실행되는 애니메이션의 시작
    Animated.stagger(15, this.animations).start();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.animatedValues.map((value, index) => (
          <Animated.View key={index} style={[{opacity: value}, styles.box]} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: 15,
    height: 15,
    margin: 0.5,
    backgroundColor: 'red',
  },
});
