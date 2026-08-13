import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
}

export function Input({ label, secureTextEntry, ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = secureTextEntry;
  const isSecure = isPassword && !showPassword;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          secureTextEntry={isSecure}
          placeholderTextColor="#6c757d"
          {...rest}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.toggleButton}
            activeOpacity={0.7}
          >
            <Text style={styles.toggleButtonText}>
              {showPassword ? "Ocultar" : "Mostrar"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontWeight: "500",
    color: "#211f1f",
    fontSize: 14,
  },
  inputWrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#ffffff",
    color: "#211f1f",
  },
  toggleButton: {
    position: "absolute",
    right: 12,
    padding: 4,
  },
  toggleButtonText: {
    fontSize: 14,
    color: "#2a4e6d",
    fontWeight: "600",
  },
});
