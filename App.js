import React from 'react';
import {StyleSheet,Text, View} from 'react-native'



// Method-1

export default function App(){
  return(
    <View style={styles.container}>
    <View style = {styles.header}>
    <Text>hello world</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'pink',
    padding: 20,
  },
});

// Method-2

// const Helloworldapp = () =>{
//   return (
//     <View
//       style = {{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // backgroundColor: 'black',
        
//       }}>
//         <Text>ram ram</Text>
//       </View>
//   )
// }

// export default Helloworldapp;