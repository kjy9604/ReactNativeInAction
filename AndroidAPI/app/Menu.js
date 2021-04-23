import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

let styles

const Menu = ({ onPress }) => {
    const {
        button
    } = styles
    return (
        <View style={{ flex: 1 }}>
            <View style={button}>
                <Button onPress={() => onPress('Home')} title='Home' />
            </View>
            <View style={button}>
                <Button onPress={() => onPress('Toolbar')} title='Toolbar Android' />
            </View>
            <View style={button}>
                <Button onPress={() => onPress('ViewPager')} title='ViewPager Android' />
            </View>
            <View style={button}>
                <Button onPress={() => onPress('DatePicker')} title='DatePicker Android' />
            </View>
            <View style={button}>
                <Button onPress={() => onPress('TimePicker')} title='TimePicker Android' />
            </View>
            <View style={button}>
                <Button onPress={() => onPress('Toast')} title='Toast Android' />
            </View>
        </View>
    )
}

styles = StyleSheet.create({
    button: {
        margin: 10,
        marginBottom: 0
    }
})

export default Menu