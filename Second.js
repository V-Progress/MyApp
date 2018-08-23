import { AppRegistry } from 'react-native';
import App from './App';

export default class Second extends Component<Props>{
    render(){
        return (
            <div>
                <Text style={styles.welcome}>
                    这是第二个界面
                </Text>
            </div>
        );
    };
}


const styles = StyleSheet.create({
    test:{
        flex:1,
        color:'#ff0000',
        fontSize:20
    }
});