import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {

  goToBuzzerScreen=()=> {
      this.props.navigation.navigate('BuzzerScreen',{color:'blue'})
    }
  render(){
    return(
      <View>
        <AppHeader/>
          <TouchableOpacity 
            style={styles.button} 
            onPress={this.goToBuzzerScreen}>
            <Text style={styles.buttonText}>Go To Buzzer Screen</Text>
          </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:150,
    width : 200,
    height:50,
    backgroundColor:'green'
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})