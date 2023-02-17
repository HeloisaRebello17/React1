import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { ImageBackground } from 'react-native-web';

export const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Add friends here!</Text>
            <Button title="Formulário" 
                onPress={() => navigation.navigate("Formulário")} 
                style={{backgroundColor: 'grey', width: '100px'}}
                >Clique aqui</Button>
        </View>
    );

};



