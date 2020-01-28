import React, { Component } from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";
const API_KEY = "8042367a40d903407a2eee2c0cfa759a";

export default class App extends Component {
  state = {
    isLoadding: true
  };
  geolocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoadding: false });
    } catch (error) {
      Alert.alert("확인점..");
    }
  };
  getweather = async (latitude, longitude) => {
    const { data } = axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
  };
  componentDidMount() {
    this.geolocation();
  }
  render() {
    return this.state.isLoadding ? <Loading /> : null;
  }
}
