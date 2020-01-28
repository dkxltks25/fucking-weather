import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Loadding() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Getting the fucking weather</Text>
    </View>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor:"#FDF6A4",
    paddingHorizontal:30,
    paddingVertical:100,
  },
  Text: {
    fontSize:30,
    color:"#2c2c2c"
  }
});
