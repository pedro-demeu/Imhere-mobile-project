import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IParticipant {
    name: string
}
export function Participant({
    name
}: IParticipant) {
    const handleParticipantRemove = (name: string) => {
        console.log(`deleted ${name} user`);

    }
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleParticipantRemove(name)}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}