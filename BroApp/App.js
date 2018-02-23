import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

function broButtonPressed() {
    console.log("Bro Button Pressed!")
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Bro App Testing </Text>
        <Button
            onPress={ broButtonPressed }
            title="BRO"
            color="#ff0000"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
