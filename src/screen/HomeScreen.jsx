import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Add friends here!</Text>
            <Button title="Formulário"
                onPress={() => navigation.navigate("Formulário")} />
        </View>
    );

};



