import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function IndexScreen() {
  const [inputNumber, setInputNumber] = useState("");
  const [fromBase, setFromBase] = useState("decimal");
  const [toBase, setToBase] = useState("binary");
  const [result, setResult] = useState("");

  const bases: any = {
    decimal: 10,
    binary: 2,
    octal: 8,
    hexadecimal: 16,
  };

  const convertNumber = () => {
    try {
      const decimalValue = parseInt(inputNumber, bases[fromBase]);
      if (isNaN(decimalValue)) {
        setResult(" Invalid input for " + fromBase);
        return;
      }
      const converted =
        toBase === "decimal"
          ? decimalValue.toString(10)
          : decimalValue.toString(bases[toBase]);
      setResult(converted.toUpperCase());
    } catch {
      setResult("⚠️ Conversion error");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/app.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.card}>
          <Text style={styles.title}>NUMBER SYSTEM CONVERTER</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter number"
            value={inputNumber}
            onChangeText={setInputNumber}
            keyboardType="default"
          />

          <Text style={styles.label}>From:</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={fromBase}
              onValueChange={(item) => setFromBase(item)}
              style={styles.picker}
            >
              <Picker.Item label="Decimal" value="decimal" />
              <Picker.Item label="Binary" value="binary" />
              <Picker.Item label="Octal" value="octal" />
              <Picker.Item label="Hexadecimal" value="hexadecimal" />
            </Picker>
          </View>

          <Text style={styles.label}>To:</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={toBase}
              onValueChange={(item) => setToBase(item)}
              style={styles.picker}
            >
              <Picker.Item label="Decimal" value="decimal" />
              <Picker.Item label="Binary" value="binary" />
              <Picker.Item label="Octal" value="octal" />
              <Picker.Item label="Hexadecimal" value="hexadecimal" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.button} onPress={convertNumber}>
            <Text style={styles.buttonText}>Convert</Text>
          </TouchableOpacity>

          {result !== "" && <Text style={styles.result}> RESULT: {result}</Text>}
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)", 
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    maxWidth: 350,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#2d3436",
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: "500",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#fafafa",
    marginBottom: 10,
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginVertical: 5,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#0984e3",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  result: {
    fontSize: 20,
    marginTop: 25,
    textAlign: "center",
    fontWeight: "700",
    color: "#00b894",
  },
});
