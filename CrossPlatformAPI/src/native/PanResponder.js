import React, {Component} from 'react';
import {
  Dimensions,
  TouchableHighlight,
  PanResponder,
  TextInput,
  View,
  Text,
  StyleSheet,
} from 'react-native';

// window 의 width 와 height 정보를 변수에 저장
const {width, height} = Dimensions.get('window');
let styles = {};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // oPosition 객체를 생성해서 정사각형의 원래 위치의 x 축과
      // y 축의 정보를 state 에 저장, 화면의 정 중앙에 위치하도록 설정
      oPosition: {
        x: width / 2 - 100,
        y: height / 2 - 100,
      },
      // position 객체를 생성해서 정사각형의 실제( actual ) 위치의 x 축과 y 축의
      // 정보를 state 에 저장, 화면의 정 중앙에 위치하도록 설정
      position: {
        x: width / 2 - 100,
        y: height / 2 - 100,
      },
    };

    this._handlePanResponderMove = this._handlePanResponderMove.bind(this);
    this._handlePanResponderRelease = this._handlePanResponderRelease.bind(
      this,
    );

    // PanResponder 를 생성하고, onStartShouldSetPanResponder 에 true 값을
    // 반환하고, onPanResponderMove와 onPanResponderRelease 메소드를 설정
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderRelease,
    });
  }

  // 움직임이 시작된 위치와 시작 위치에서 현재 위치까지의 거리를 계산해
  // 전체 이동 거리의 x와 y를 알아내고 알아낸 x와 y 값을 position state 에 업데이트
  _handlePanResponderMove(evt, gestureState) {
    let ydiff = gestureState.y0 - gestureState.moveY;
    let xdiff = gestureState.x0 - gestureState.moveX;
    this.setState({
      position: {
        y: this.state.oPosition.y - ydiff,
        x: this.state.oPosition.x - xdiff,
      },
    });
  }

  // oPosition state 에 뷰에 업데이트된 위치를 지정
  _handlePanResponderRelease() {
    this.setState({
      oPosition: this.state.position,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.positionDisplay}>
          x: {this.state.position.x} y: {this.state.position.y}
        </Text>

        <View
          {...this._panResponder.panHandlers} //|
          style={[
            styles.box,
            {
              marginLeft: this.state.position.x,
              marginTop: this.state.position.y,
            },
          ]}
        />
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  positionDisplay: {
    textAlign: 'center',
    marginTop: 50,
    zIndex: 1,
    position: 'absolute',
    width,
  },
  box: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
});
