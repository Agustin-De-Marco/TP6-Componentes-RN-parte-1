import React from "react";
import { Button, TouchableOpacity, Pressable, Text, StyleSheet, Animated } from "react-native";

const CustomButton = ({ type, title, onPress }) => {
  let buttonComponent;

  switch (type) {
    case "button":
      buttonComponent = <Button title={title} onPress={onPress} />;
      break;
    case "touchable":
      buttonComponent = (
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );
      break;
    case "pressable":
      buttonComponent = (
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            { backgroundColor: pressed ? "red" : "green" }
          ]}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
      );
      break;
    default:
      buttonComponent = <Button title={title} onPress={onPress} />;
  }

  return buttonComponent;
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: "violet",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  pressable: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default CustomButton;