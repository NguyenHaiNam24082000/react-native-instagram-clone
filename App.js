import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image, SafeAreaView } from "react-native";

const Tab = createBottomNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <SafeAreaView style={{flex: 1}}>
       
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
