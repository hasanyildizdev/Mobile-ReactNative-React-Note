/**
 * @format
 */

import {AppRegistry} from 'react-native';
import rootNavigation from './App';
//import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => rootNavigation);
