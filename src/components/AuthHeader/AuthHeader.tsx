import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../contexts/ThemeContext";
import { styles } from "./AuthHeader.styles";

export default function AuthHeader() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <LinearGradient
      colors={["#233653", "#2d939c", "#3fb7a0"]}
      locations={[0, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.authHeader}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Projeto Skills</Text>
      </View>

      <TouchableOpacity
        onPress={toggleTheme}
        style={styles.themeToggleBtn}
        activeOpacity={0.8}
      >
        <Text style={styles.themeToggleText}>
          {isDark ? "☀️ Claro" : "🌙 Escuro"}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
