import React, { Component} from 'react';
import { View, Text, Pano, AppRegistry, asset} from 'react-vr';
const api_key = 'a212e95b9f9ce3a31b608d74b24c94d4';

class WeatherSimulation extends Component {
  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&APPID=${api_key}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => console.log('json',json));
  }
  render(){
    return (
      <View>
        <Pano source={asset('lombard-vr.jpg')}></Pano>
      </View>
    )
  }
}

AppRegistry.registerComponent('WeatherSimulation', () => WeatherSimulation);
