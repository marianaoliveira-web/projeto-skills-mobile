import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface AuthHeaderProps {
  isDark?: boolean;
  onToggleTheme?: () => void;
}

export default function AuthHeader({
  isDark = false,
  onToggleTheme,
}: AuthHeaderProps) {
  return (
    <View style={styles.authHeader}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Projeto Skills</Text>
      </View>

      <TouchableOpacity
        onPress={onToggleTheme}
        style={styles.themeToggleBtn}
        activeOpacity={0.8}
      >
        <Text style={styles.themeToggleText}>
          {isDark ? "☀️ Claro" : "🌙 Escuro"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  authHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#2d939c",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logoContainer: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  logoText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: 0.5,
  },
  themeToggleBtn: {
    marginLeft: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  themeToggleText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
});
