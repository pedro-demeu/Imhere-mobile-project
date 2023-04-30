import { Text, View, StatusBar, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../components/Participant';
export default function Home() {

    const participants = [
        'Lourenço',
        'Julio Cezar',
        'Valdemir',
        "Pedro Miguel",
        "Wagninho",
        'Lourenço',
        'Julio Cezar',
        'Valdemir',
        "Pedro Miguel",
        "Wagninho",
    ]

    const handleParticipantAdd = () => {
        console.log("clicked!");

    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento</Text>
            <Text style={styles.eventDate}>Domingo, 30 de abril de 2023</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor="#6B6B6B"
                    keyboardType='default'
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (<Participant name={item} key={item} />)}
                ListEmptyComponent={() => <Text style={styles.haveNoParticipantText}>Não há participantes no momento!</Text>}
            >
            </FlatList>
        </View>
    );
}