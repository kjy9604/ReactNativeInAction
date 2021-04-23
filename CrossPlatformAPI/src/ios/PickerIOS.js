import React, {Component} from 'react';
import {Text, View, PickerIOS} from 'react-native';

const people = [
  {
    name: 'Nader Dabit',
    age: 36,
  },
  {
    name: 'Christina Jones',
    age: 39,
  },
  {
    name: 'Amanda Nelson',
    age: 22,
  },
];

const PickerItem = PickerIOS.Item;

class App extends Component {
  // 선택한 picker 값을 state에 초깃값으로 지정
  constructor() {
    super();
    this.state = {
      value: 'Christina Jones',
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(value) {
    this.setState({value});
  }

  render() {
    return (
      <View style={{marginTop: 50}}>
        <PickerIOS
          onValueChange={this.onValueChange}
          selectedValue={this.state.value}>
          {people.map((p, i) => {
            return (
                <PickerItem 
                    key={i} 
                    value={p.name} 
                    label={p.name} 
                />
            )
          })}
        </PickerIOS>
        <Text style={{marginTop: 40, textAlign: 'center'}}>
          {this.state.value}
        </Text>
      </View>
    );
  }
}

export default App;
