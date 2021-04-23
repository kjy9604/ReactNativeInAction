/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

// native
import Alert from './src/native/Alert';
import AppState from './src/native/AppState';
import AsyncStorage from './src/native/AsyncStorage';
import Clipboard from './src/native/Clipboard';
import Dimensions from './src/native/Dimensions';
import Geolocation from './src/native/Geolocation';
import Keyboard from './src/native/Keyboard';
import NetInfo from './src/native/NetInfo';
import PanResponder from './src/native/PanResponder';

// ios
import DatePickerIOS from './src/ios/DatePickerIOS';
import PickerIOS from './src/ios/PickerIOS';
import ProgressViewIOS from './src/ios/ProgressViewIOS';
import SegmentedControlIOS from './src/ios/SegmentedControlIOS';
import ActionSheetIOS from './src/ios/ActionSheetIOS';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ActionSheetIOS);
