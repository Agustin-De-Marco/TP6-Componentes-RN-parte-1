import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [clave, setClave] = useState("");

  const handlePress = () => {
    console.log({
      Nombre: nombre,
      Teléfono: telefono,
      Email: email,
      Clave: clave,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Teléfono:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su teléfono"
        keyboardType="phone-pad"
        value={telefono}
        onChangeText={setTelefono}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Clave:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su clave"
        secureTextEntry
        value={clave}
        onChangeText={setClave}
      />

      <CustomButton type="button" title="Enviar con Button" onPress={handlePress} />
      <CustomButton type="touchable" title="Enviar con TouchableOpacity" onPress={handlePress} />
      <CustomButton type="pressable" title="Enviar con Pressable" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default Form;