import React, {Component} from 'react';
import {TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

let styles = {};

// Person 객체를 생성하고 사용자 정보를 저장
const person = {
  name: 'James Garfield',
  age: 50,
  occupation: 'President of the United States',
};
// AsyncStorage 에 데이터를 저장하고 삭제할 때 사용할 키 만들기
const key = 'president';

class App extends Component {
  constructor() {
    super();

    this.state = {
      person: {},
    };

    this.getPerson = this.getPerson.bind(this);
  }

  async componentDidMount() {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(person));
    } catch (err) {
      console.log('err: ', err);
    }

    // AsyncStorage.setItem 을 호출하고 key 와 person 을 인수로 전달.
    // AsyncStorage 에 저장할 값은 문자열이어야 하므로 JSON.stringify 를 호출해 문자열로 변경
    // AsyncStorage.setItem(key, JSON.stringify(person))
    //   .then(() => console.log('item stored...'))
    //   .catch(err => console.log('err: ', err));
  }

  async getPerson() {
    try {
      var data = await AsyncStorage.getItem(key);
      var person = await data;
      this.setState = {person: JSON.parse(person)};
    } catch (err) {
      console.log('err: ', err);
    }

    /*
        AsyncStorage.getItem 을 호출하고 이전에 만든 key 를 전달.
        AsyncStorage 에서 가져온 데이터를 포함한 콜백 함수를 받기
     */
    // AsyncStorage.getItem(key)
    //   .then(res => this.setState({person: JSON.parse(res)})) // JSON.parse 로 문자열을 JS의 객체로 변환 후에 state 로 지정
    //   .catch(err => console.log('err: ', err));
  }

  render() {
    const {person} = this.state;

    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Testing AsyncStorage</Text>
        <TouchableHighlight onPress={this.getPerson} style={styles.button}>
          <Text>Get President</Text>
        </TouchableHighlight>
        <Text>{person.name}</Text>
        <Text>{person.age}</Text>
        <Text>{person.occupation}</Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  button: {
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    height: 55,
    backgroundColor: '#dddddd',
  },
});

export default App;
