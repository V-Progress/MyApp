/**
 * Created by Administrator on 2017/3/31 0031.
 */

'use strict'
import React from 'react';
import {
    AppRegistry,
    Text, View, Button,
} from 'react-native';
//StackNavigator用于实现各个页面间的跳转。TabNavigator切换组建，实现同一页面上不同界面的切换。
import {StackNavigator} from 'react-navigation';
import LoginPage from './src/LoginPage';

class RootPage extends React.Component {
    static navigationOptions = {
        title: 'Welcome',//设置标题内容
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Login', {user: 'Lucy'})}
                    title="Chat with Lucy"/>

            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Root: {screen: RootPage},
    Login: {screen: LoginPage},
});

export default SimpleApp;