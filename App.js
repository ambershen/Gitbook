import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import stackNav from './src/controller/stackNav';
import RepoScreen from './src/view/repositories';
import NotificationScreen from './src/view/notification';
import StarredScreen from './src/view/starred';
import ProfileScreen from './src/view/profile';
import HomeScreen from './src/view/home';

const TabNav = TabNavigator({
    Home: {
        screen: NotificationScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={"bell-o"} size={30} color={tintColor} />
        }
    },
    Starred: {
      screen: StarredScreen,
      navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={"star-o"} size={30} color={tintColor} />
        }
    },
    Repo: {
      screen: RepoScreen,
      navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={"file-code-o"} size={30} color={tintColor} />
        }
    },
    Profile: {
      screen: stackNav,
      navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name={"user-o"} size={30} color={tintColor} />
        }
    },

}, {
        tabBarOptions: {
            showLabel: false,
        }
});

export default class App extends React.Component {
  render() {
    return <TabNav />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
