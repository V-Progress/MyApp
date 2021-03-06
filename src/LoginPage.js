/**
 * Sample React Native LoginPage
 * https://github.com/facebook/react-native
 * @flow
 */
import React,{Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    Image
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomePage from './HomePage';

export default class LoginPage extends React.Component<Props> {
    title = "Hello World";
    userName;
    password;
    static navigationOptions = {
        title: 'Login',//设置标题内容
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{fontSize: 20}}>
                        登录
                    </Text>
                    <Text style={{marginTop:8,height:0.1,width:340,backgroundColor:'#000000'}}/>
                </View>

                <TextInput
                    style={styles.textInput}
                    onChangeText={(userName) => {
                        this.setState({userName});
                        this.userName = userName;
                    }}
                    placeholder={"请输入用户名"}/>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(password) => {
                        this.setState({password});
                        this.password = password;
                    }}
                    placeholder={"请输入密码"}/>
                <Button
                    style={styles.button}
                    title="登录"
                    onPress={() => {
                        if (this.userName === undefined || this.password === undefined) {
                            Alert.alert("提示", "请输入用户名和密码");
                            return;
                        } else {
                            // Alert.alert("用户名：" + this.userName + "\n密码：" + this.password);
                            navigate('Home', {user: 'Lucy'});
                        }
                    }}/>
                <Image style={{width: 300, height: 300,marginTop: 20}}
                       source={{
                           cache:'force-cache',
                           uri:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=339281701,108535093&fm=26&gp=0.jpg'}}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 360,
        height: 50,
    },
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
    },
    textInput: {
        fontSize: 15,
        height: 50,
        width: 300
    },
    button: {
        marginTop:10,
        paddingLeft:100,
        paddingRight:100,
        width: 200,
        height: 60
    }
});

const SimpleApp = StackNavigator({
    Login: {screen: LoginPage},
    Home: {screen: HomePage},
});