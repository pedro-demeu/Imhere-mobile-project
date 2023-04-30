import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IParticipant {
    name: string,
    onRemove: (name: string) => void;
}
export function Participant({
    name,
    onRemove
}: IParticipant) {
  
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}