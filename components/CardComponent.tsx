import { StyleSheet, View, Text } from 'react-native';


export function CardComponent() {

    return (
        <View>
            <Text>Nombre: </Text>
            <Text>Edad: </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});