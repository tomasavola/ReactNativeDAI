import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import gonsalo from "./assets/gonsalo.jpg"

export default function App() {
  return (
    <>
    <View style={styles.hola}>
      <Text style={[styles.hola1, { opacity: 0.5 }]}>TanQra</Text>
      <Text style={[styles.pulguitaText, { opacity: 0.7 }]}>pulguita</Text>
    </View>
    <ImageBackground
      style={styles.container}
      source={require('./assets/gonsalo.jpg')}
    >
      <StatusBar style="auto" />
    </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    width: '100%',
  },
  hola: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    top: 50,
  },
  hola1: {
    flex: 1,
    color: "#000000",
    fontSize: 25,
  },
  pulguitaText: {
    color: "#FF0000",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
  },
});
