import React from 'react';
import {
  StyleSheet,
  View,
  Text} from 'react-native';

  class App extends React.Component {
    render() {
      const teste = "Hello World";

      const testeJSX = <Text> Outro Código </Text>
      return (
        <View style={styles.container}>
          <Text style={styles.textInfo}> {teste} </Text>
          { testeJSX }
        </View>
      )
    }
  }

  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',    
    },
    textInfo: {
      fontSize: 50,
      textAlign: 'center',
    }
  });

  
  export default App;
