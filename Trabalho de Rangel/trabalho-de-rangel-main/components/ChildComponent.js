import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const ChildComponent = ({ phoneNumber, message, onNumberChange, onMessageChange }) => {
  return (
    <View>
      <TextInput
        placeholder="Número (Ex: 5588999991234)"
        value={phoneNumber}
        onChangeText={onNumberChange}
        style={styles.input}
      />
      <TextInput
        placeholder="Mensagem"
        value={message}
        onChangeText={onMessageChange}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default ChildComponent;
