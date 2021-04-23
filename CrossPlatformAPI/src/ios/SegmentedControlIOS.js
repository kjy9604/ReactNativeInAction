import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SegmentedControlIOS from '@react-native-community/segmented-control';

// SegmentedControlIOS 에서 사용할 값으 ㅣ배열 만들기
const values = ['One', 'Two', 'Three']

class App extends Component {

    constructor() {
        super()
        this.state = {
            selectedIndex: 0,
        }
    }

    render() {
        const { selectedIndex } = this.state

        // 변수를 만들고 values 배열의 selectedIndex의 값을 지정
        let selectedItem = values[selectedIndex]

        return (
            <View style={{ marginTop: 40, padding: 20 }}>
                <SegmentedControlIOS 
                    values={values} 
                    selectedIndex={this.state.selectedIndex} 
                    onChange={(event) => {
                        this.setState({selectedIndex:
                          event.nativeEvent.selectedSegmentIndex});
                    }}
                />
                <Text>{selectedItem}</Text>
            </View>
        )
    }
}

export default App