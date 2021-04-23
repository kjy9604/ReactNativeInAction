import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Button,
  TextInput,
  Text,
} from 'react-native';

export default class RNAnimations2 extends Component {
  // animatedWidth 변수와 애니메이션 초깃값 만들기
  animatedWidth = new Animated.Value(200);

  // animatedWidth 속성에 애니메이션 효과를 함수로 만들기
  animate = value => {
    Animated.timing(this.animatedWidth, {
      toValue: value,
      duration: 750,
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{width: this.animatedWidth}}>
          <TextInput
            style={[styles.input]}
            onBlur={() => this.animate(200)}
            onFocus={() => this.animate(325)}
            ref={input => (this.input = input)}
          />
        </Animated.View>
        <Button title="submit" onPress={() => this.input.blur()} />
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
  input: {
    height: 50,
    marginHorizontal: 15,
    backgroundColor: '#ededed',
    marginTop: 10,
    paddingHorizontal: 9,
  },
});
