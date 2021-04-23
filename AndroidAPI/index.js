import React from 'react';
import {
    AppRegistry,
    DrawerLayoutAndroid,
    Button,
    View
} from 'react-native';

import App from './app/App';
import Menu from './app/Menu';

import {name as appName} from './app.json';

class mycomponent extends React.Component {
    constructor() {
        super()
        this.state = {
            scene: 'Home'
        }

        this.jump = this.jump.bind(this)
        this.openDrawer = this.openDrawer.bind(this)
    }

    openDrawer() {
        // 드로어를 실행하는 메소드 만들기
        this.drawer.openDrawer()
    }
    
    // scene state 를 업데이트하는 메소드를 만들고 closeDrawer() 호출
    jump(scene) {
        this.setState({
            scene
        })
        this.drawer.closeDrawer()
    }

    render() {
        return (
            <DrawerLayoutAndroid 
                // 드로어의 참조(reference)를 만들어 컴포넌트의 메소드를 호출
                ref={drawer => this.drawer = drawer} 
                // 드로어의 폭에 300을 지정
                drawerWidth={300}
                // 드로어의 위치를 왼쪽으로 지정
                drawerPosition={'left'}
                // Menu 컴포넌트인 내비게이션 뷰를 화면에 표시
                renderNavigationView={() => <Menu onPress={this.jump} />}>
                <View style={{ margin: 15 }}>
                    <Button onPress={() => this.openDrawer()} title='Open Drawer' />
                </View>

                <App openDrawer={this.openDrawer}
                     jump={this.jump}
                     scene={this.state.scene} />
            </DrawerLayoutAndroid>
        )
    }
}

AppRegistry.registerComponent(appName, () => mycomponent)