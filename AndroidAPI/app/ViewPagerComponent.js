import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

let styles

class ViewPagerComponent extends Component {
    render() {
        const {pageStyle, page1Style, page2Style, textStyle} = styles

        return (
            <ViewPager style={{ flex: 1 }} initialPage={0}>
                <View style={[ pageStyle, page1Style ]}>
                    <Text style={textStyle}>First page</Text>
                </View>
                <View style={[ pageStyle, page2Style ]}>
                    <Text style={textStyle}>Second page</Text>
                </View>
            </ViewPager>
        )
    }
}

styles = {
    pageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flex: 1
    },
    page1Style: {
        backgroundColor: 'orange'
    },
    page2Style: {
        backgroundColor: 'red'
    },
    textStyle: {
        fontSize: 18,
        color: 'white'
    }
}

export default ViewPagerComponent