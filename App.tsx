import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const checkApiHelth = async () => {
    try {
        const response = await fetch("http://192.168.0.113:8000/");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on yosfsdfsfur app!</Text>
            <StatusBar style="auto" />
            <Button title="Click me" onPress={checkApiHelth} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
