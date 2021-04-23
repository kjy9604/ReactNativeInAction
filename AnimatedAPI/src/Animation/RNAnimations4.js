import React, {Component} from 'react';
import {
  Easing,
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class RNAnimations4 extends Component {
  // 클래스를 생성할 때 세개의 애니메이션 값도 같이 생성
  animatedTitle = new Animated.Value(-200);
  animatedSubtitle = new Animated.Value(600);
  animatedButton = new Animated.Value(800);

  componentDidMount() {
    // componentDidMount() 시에 애니메이션도 시작되도록
    this.animate();
  }

  // 세 개의 애니메이션이 동시에 실행되도록 Animated.parallel 호출하고 세 개의 Animated.timing 을 전달
  animate = () => {
    Animated.parallel([
      Animated.timing(this.animatedTitle, {
        toValue: 200,
        duration: 800,
      }),
      Animated.timing(this.animatedSubtitle, {
        toValue: 0,
        duration: 1400,
        delay: 800,
      }),
      Animated.timing(this.animatedButton, {
        toValue: 0,
        duration: 1000,
        delay: 2200,
      }),
    ]).start();
  };

  render() {
    return (
      // 움직이는 각각의 애니메이션을 컴폰넌트에 추가해서 확인
      <View style={styles.container}>
        <Animated.Text style={[styles.title, {marginTop: this.animatedTitle}]}>
          Welcome
        </Animated.Text>
        <Animated.Text
          style={[styles.subTitle, {marginLeft: this.animatedSubtitle}]}>
          Thanks for visiting our app!!!
        </Animated.Text>
        <Animated.View style={{marginTop: this.animatedButton}}>
          <TouchableHighlight style={styles.button}>
            <Text>Get Started</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 12,
  },
  subTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    opacity: 0.8,
  },
  button: {
    marginTop: 25,
    backgroundColor: '#ddd',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
