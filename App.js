import ButtonsMatrix from './ButtonsMatrix';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const altura = [100, 200, 25];
  const largura = [100, 200, 25];
  const teste = './Kuma/Kuma9.png'
  return (
    <ButtonsMatrix/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  }
});

export default App;

/*import ButtonsRow from './ButtonsRow';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
  const palavras = ['banana', 'cachorro', 'cerveja', 'borracha', 'gato', 'mac', 'lampada', 'agua', 'garrafa'];
  const [numeroPalavra, setNumero] = useState(0)
  function aleat() {
    setNumero(Math.floor(Math.random() * 9));
  }
  return (
    <View style={styles.container}>
      <Text>{palavras[numeroPalavra]}</Text>
      <TouchableOpacity onPress={aleat}>
        <Text>Botao</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;*/