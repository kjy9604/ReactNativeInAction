import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

export default class RNAnimations5 extends Component {
  componentDidMount() {
    // 컴포넌트가 마운트 될 때 animate 함수를 호출
    this.animate();
  }

  // 세 개의 애니멩이션 효과를 만들고 시작값으로 -30을 전달
  AnimatedValue1 = new Animated.Value(-30);
  AnimatedValue2 = new Animated.Value(-30);
  AnimatedValue3 = new Animated.Value(-30);

  // 새 timing 애니메이션을 만드는 함수를 반환하는 createAnimation 지정
  animate = () => {
    const createAnimation = value => {
      return Animated.timing(value, {
        toValue: 290,
        duration: 500,
      });
    };

    Animated.sequence([
      // 애니메이션 효과에 createAnimation 의 결과를 적용해서 순차적으로 실행
      createAnimation(this.AnimatedValue1),
      createAnimation(this.AnimatedValue2),
      createAnimation(this.AnimatedValue3),
    ]).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.Text style={[styles.text, {marginTop: this.AnimatedValue1}]}>
          1
        </Animated.Text>
        <Animated.Text style={[styles.text, {marginTop: this.AnimatedValue2}]}>
          2
        </Animated.Text>
        <Animated.Text style={[styles.text, {marginTop: this.AnimatedValue3}]}>
          3
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    marginHorizontal: 20,
    fontSize: 26,
  },
});
