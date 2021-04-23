import React, {Component} from 'react';
import {Text, View, ProgressViewIOS} from 'react-native';

class App extends Component {
    
    constructor() {
        super()
        
        // progress 상태 초깃값을 0으로 지정
        this.state = {
            progress: 0,
        }
    }

    componentDidMount() {
        // setInterval 메소드를 저장하고, 매 1100초마다 progress 상태를 0.01 만큼 증가,
        // this.state.progress 가 1보다 크거나 같으면 clearInterval 을 호출해서 interval 을 취소
        this.interval = setInterval(() => {
            if (this.state.progress >= 1) {
                return clearInterval(this.interval)
            }
            this.setState({
                progress: this.state.progress + .01
            })
        }, 10)
    }

    render() {
        return (
            <View style={{ marginTop: 50 }}>
                <ProgressViewIOS progress={this.state.progress} />
                <Text style={{ marginTop: 10, textAlign: 'center'}}>
                    {Math.floor(this.state.progress * 100)}% Complete
                </Text>
            </View>
        )
    }
}

export default App