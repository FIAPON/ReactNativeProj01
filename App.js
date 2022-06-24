import React from 'react';
import {
  StyleSheet,
  View,
  Text} from 'react-native';

  class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.textInfo}> Hello World </Text>
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
