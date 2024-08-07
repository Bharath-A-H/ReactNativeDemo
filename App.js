// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text,  View } from 'react-native';

// export default function App() {
//   const handlePress = () => console.log("Text pressed")
//   return (
//     <View style={styles.container}>
       
//       <Text numberOfLines={1} onPress={handlePress}>Welcome to android app in react native </Text>
      
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image,  View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
       
      <Text >Welcome to android app in react native </Text>
      <Image 
      source={{
        width:200,
        height:300,
        uri:"https://picsum.photos/200/300"}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

