import React from 'react';
import {
    View
} from 'react-native';
import ToolbarAndroid from '@react-native-community/toolbar-android'

class Toolbar extends React.Component {
    render() {

        // index 를 전달받아 값이 1이면 this.props.openDrawer 호출,
        // actions 의 배열을 갖고 각각의 action 은 자신이 눌리면 이 메소드를 호출하고 자신의 인덱스를 전달
        const onActionSelected = (index) => {
            if(index === 1) {
                this.props.openDrawer()
            }
        }

        return (
            <View style={{ flex: 1 }}>
                <ToolbarAndroid 
                    subtitleColor='white' 
                    titleColor='white' 
                    style={{ height: 56, backgroundColor: '#52998c' }} 
                    title='React Native in Action' 
                    subtitle='ToolbarAndroid' 
                    // actions 배열을 전달, action 을 누르면 자신의 배열 인덱스를 인수로 각 액션을 호출
                    actions={[ { title: 'Options', show: 'always' },
                        { title: 'Menu', show: 'always' } ]} 
                    // onActionSelected 속성에 onActionSelected 함수를 전달
                    onActionSelected={onActionSelected}
                />
            </View>
        )
    }
}

export default Toolbar