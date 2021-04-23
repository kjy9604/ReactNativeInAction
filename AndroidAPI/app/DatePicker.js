import React, { Component } from 'react';
import { DatePickerAndroid, View, Text } from 'react-native';

let styles

class DatePicker extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
        this.openDatePicker = this.openDatePicker.bind(this)
    }

    openDatePicker() {
        DatePickerAndroid.open({
            date: this.state.date
        })
        .then((date) => {
            // DatePickerAndroid.open 은 promise 를 반환, promise 는 선택된 날짜/월/연도와 선택된 액션을 갖는 객체를 포함
            const { year, month, day, action } = date

            // 날짜를 선택하면, action 이 dateSetAction 이 되고 
            // 모달 대화 상자가 화면에서 사라지면 action 은 dismissedAction 이 된다
            if(action === 'dateSetAction') {
                this.setState({ date: new Date(year, month, day )})
            }
        })
    }

    render() {
        const { container, text } = styles

        return (
            <View style={container}>
                <Text onPress={this.openDatePicker} style={text}>
                    OpenDatepicker
                </Text>
                <Text style={text}>{this.state.date.toString()}</Text>
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

export default DatePicker