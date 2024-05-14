import React, { useState } from 'react';
import { View, Button, Linking, StyleSheet } from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (phoneNumber.startsWith('55') && phoneNumber.length >= 11) {
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      Linking.openURL(url);
    } else {
      (phoneNumber.length <11)
        alert('Número invalido, o número deve começa com 55 é ter pelo menos 11 caracteres.')
    }
  };

  return (
    <View style={styles.container}>
      <ChildComponent
        phoneNumber={phoneNumber}
        message={message}
        onNumberChange={setPhoneNumber}
        onMessageChange={setMessage}
      />
      <Button title="Enviar mensagem" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default ParentComponent;
