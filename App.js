import React, { useState } from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
 
export default function app(){
  const [name, setName] = useState('yogya');
  const [person, setPerson] = useState({name: 'mario', age: 18})
  const clickhandler = () => {
    setName('golu ');
    setPerson({name: 'golduck', age:99});
  }
  return(
    <View style = {styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style = {styles.btncontainer}>
        <Button title = 'update status' onPress= {clickhandler} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldfont: {
    fontWeight: 'bold',
  },
  btncontainer: {
    margin: 20,
  }
})