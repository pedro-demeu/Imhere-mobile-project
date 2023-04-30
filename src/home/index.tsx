import React from 'react'
import { Text, View, StatusBar, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../components/Participant';

export default function Home() {
    const [participants, setParticipants] = React.useState<string[]>([]);
    const [participantName, setParticipantName] = React.useState('');

    const handleParticipantAdd = () => {
        if (participants.includes(participantName)) {
            return Alert.alert('Ops!', "Participante já está na lista! ")
        }
        setParticipants([...participants, participantName]);
        setParticipantName('')
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
                    onChangeText={setParticipantName}
                    value={participantName}
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