import { Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home() {

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
            <StatusBar />
        </View>
    );
}