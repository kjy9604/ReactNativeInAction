import React, { Component } from 'react';
import { TimePickerAndroid, View, Text } from 'react-native';
import moment from 'moment';

let styles

class TimePicker extends Component {
    constructor() {
        super()

        // time state 를 만들고 초깃값으로 'h:mm a' 시간 형식을 지정, 시간:분:오전 또는 시간:분:오후
        this.state = {
            time: moment().format('h:mm a')
        }
        this.openTimePicker = this.openTimePicker.bind(this)
    }

    openTimePicker() {
        TimePickerAndroid.open({
            time: this.state.time
        })
        .then((time) => {
            const { hour, minute, action } = time
            if (action === 'timeSetAction') {
                const time = moment().minute(minute).hour(hour).format('h:mm a')
                this.setState({ time })
            }
        })
    }

    render() {
        const { container, text } = styles

        return (
            <View style={container}>
                <Text onPress={this.openTimePicker} style={text}>Open Time Picker</Text>
                <Text style={text}>{this.state.time.toString()}</Text>
            </View>
        )
    }
}

styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginBottom: 15,
        fontSize: 20
    }
}

export default TimePicker