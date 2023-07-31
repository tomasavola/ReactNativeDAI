import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import gonsalo from "./assets/gonsalo.jpg"

export default function App() {
  return (
    <>
    <View style={styles.hola}>
    <Text style={styles.hola1}>TanQra</Text>
    </View>
    <View style={styles.container}>
      <Image
              style={styles.container}
              source={require('./assets/gonsalo.jpg')}
            />
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    top:50,

    
  },
  hola1: {
    flex: 1,
    color: "#000000",
    fontSize:25,

    
  },
});
