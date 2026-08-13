import { StyleSheet } from "react-native";

import { Colors } from "../../constants/theme";

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
    shadowOffset: {
      width: 0,
      height: 8,
    },
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
    width: "100%",

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

  passwordContainer: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: currentTheme.bgMain,

    borderWidth: 1,
    borderColor: currentTheme.border,

    borderRadius: 8,

    marginBottom: 14,
  },

  passwordInput: {
    flex: 1,

    color: currentTheme.textMain,

    paddingHorizontal: 16,
    paddingVertical: 14,

    fontSize: 16,

    outlineStyle: "none",
  } as any,

  showPasswordButton: {
    width: 50,
    height: "100%",

    justifyContent: "center",
    alignItems: "center",
  },

  showPasswordText: {
    fontSize: 19,
  },

  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",

    alignSelf: "flex-start",

    marginBottom: 18,
  },

  checkbox: {
    width: 21,
    height: 21,

    borderRadius: 5,

    borderWidth: 2,
    borderColor: currentTheme.border,

    backgroundColor: currentTheme.bgMain,

    justifyContent: "center",
    alignItems: "center",

    marginRight: 9,
  },

  checkboxChecked: {
    backgroundColor: currentTheme.primary,
    borderColor: currentTheme.primary,
  },

  checkboxCheck: {
    color: "#ffffff",

    fontSize: 14,
    fontWeight: "bold",

    lineHeight: 16,
  },

  rememberText: {
    color: currentTheme.textMuted,

    fontSize: 14,
    fontWeight: "500",
  },

  button: {
    backgroundColor: currentTheme.primary,

    paddingVertical: 14,

    borderRadius: 8,

    alignItems: "center",

    marginTop: 4,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: currentTheme.textLight,

    fontSize: 16,
    fontWeight: "bold",
  },
});
