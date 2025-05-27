import { StyleSheet, View, Text } from 'react-native';

interface CardComponentProps {
    name: string;
    age?: number;
}

export function CardComponent(props: CardComponentProps) {

    return (
        <View>
            <Text>Nombre: { props.name }</Text>
            <Text>Edad: { props.age }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});