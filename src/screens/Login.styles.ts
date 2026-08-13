import { StyleSheet } from "react-native";
import { Colors } from "../constants/theme";

const currentTheme = Colors.dark;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: currentTheme.bgMain,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: currentTheme.bgCard,
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: currentTheme.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: currentTheme.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: currentTheme.textMuted,
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    backgroundColor: currentTheme.bgMain,
    color: currentTheme.textMain,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: currentTheme.border,
  },
  button: {
    backgroundColor: currentTheme.primary,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: currentTheme.textLight,
    fontSize: 16,
    fontWeight: "bold",
  },
});
