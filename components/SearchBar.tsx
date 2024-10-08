import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchBarProps {
  val: string;
  onChange: (text: string) => any;
}

export function SearchBar({val, onChange }: SearchBarProps) {
  return (
    <View>
      <TextInput
        value={val}
        style={styles.input}
        placeholder="Type Here"
        onChangeText={(newText) => onChange(newText)}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },

  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#0f0",
    borderRadius: 30,
    overflow: "hidden",
    fontSize: 20,
  },
});


