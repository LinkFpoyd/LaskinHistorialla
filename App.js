import { StyleSheet, Text, View, Button, TextInput, FlatList } from'react-native';
import  React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState(0);

  /* yllä alkuperäisen laskintehtäväni muuttujat, alla flatlistia varten luodut. Laitoin aluksi kaikki muuttujat tilamuuttujiksi,  
  mutta silloin tuohon textiin päivittyi jostain syystä laskutoimituksen tulos vasta kolmannella renderillä, ja listaan
  tuli merkintöjä väärillä tuloksilla siitä johtuen. Minulle ei ole ihan täysin selvää, miksi koodi käyttäyty näin? Ehkä
  en ollut react opintojen alussa tarpeeksi hereillä :D*/

  var tulos = 0;
  const [data, setData] = useState([]);
  var text = '';
  

  const addNumbers = () => {
    tulos = parseInt(a) + parseInt(b);
    setC(tulos);
    text = a + ' + ' + b + ' = ' + tulos;
    addHistory();
  }

  function subtractNumbers(){
    tulos = parseInt(a) - parseInt(b);
    setC(tulos);
    text = a + ' - ' + b + ' = ' + tulos;
    addHistory();
  }

  const addHistory = () => {
    setData([...data, { title: text }]);
  }


  return (
    <View style={styles.container}>
        <Text>Tulos: {c}</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={input => setA(input)}></TextInput>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={input => setB(input)}></TextInput>
      <View style={styles.buttons}> 
        <View style={styles.button}>
          <Button onPress={addNumbers} title='+'/>
        </View>
        <View style={styles.button}>
          <Button onPress={subtractNumbers} title='-'/>
        </View>
      </View>
      <Text>Historia:</Text>
      <FlatList syle={styles.list}
        data={data}
        renderItem={({ item }) => <Text>{item.title}</Text>}   
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    marginTop: 20,
    width: 100,
    height: 40,
    borderColor: 'gray', 
    borderWidth: 1
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    width: '10%',
    margin: 10
  }
});
