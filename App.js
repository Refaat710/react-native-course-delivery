import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  TouchableOpacity,
  Linking,
  StatusBar,
  Alert,
  SafeAreaView,
} from "react-native";
import { HomeScreen } from "./src/screens";

export default function App() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <HomeScreen />
    </SafeAreaView>
  );
}
