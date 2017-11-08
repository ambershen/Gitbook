import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";
import RepoScreen from '../view/repositories';
import HomeScreen from '../view/home';
import ProfileScreen from '../view/profile';
import FollowersScreen from '../view/followers';
import FollowingScreen from '../view/following';
import UserScreen from '../view/user';

const stackNav = StackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: (props)=>({
            title: "Profile",
        })
    },
    Repo: {
        screen: RepoScreen,
        navigationOptions: (props) => ({
            title: "Repositories",
            user: 'login',
        })
    },
    
    Followers: {
        screen: FollowersScreen,
        navigationOptions: (props)=>({
            title: "Followers",
        })
    },
    Following: {
        screen: FollowingScreen,
        navigationOptions: (props)=>({
            title: "Following",
        })
    },
    User: {
        screen: UserScreen,
        navigationOptions: ({navigation})=>({
            title: `${navigation.state.params.login}`,
        })
    },
})

export default stackNav;