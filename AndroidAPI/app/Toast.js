import React from 'react';
import { ToastAndroid, View, Text } from 'react-native';

let styles

const Toast = () => {
    let { container, button } = styles

    const basicToast = () => {
        ToastAndroid.show('Hello World!', ToastAndroid.LONG)
    }

    const gravityToast = () => {
        ToastAndroid.showWithGravity('Toast with Gravity!', ToastAndroid.LONG, ToastAndroid.CENTER)
    }

    return (
        <View style={container}>
            <Text style={button} onPress={basicToast}>
                Open basic toast
            </Text>
            <Text style={button} onPress={gravityToast}>
                Open gravity toast
            </Text>
        </View>
    )
}

styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginBottom: 10,
        color: 'blue'
    }
}

export default Toast