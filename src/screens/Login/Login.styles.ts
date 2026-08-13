import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
  },

  containerLight: {
    backgroundColor: "#f4f7f6",
  },

  containerDark: {
    backgroundColor: "#0f172a",
  },

  backgroundDecorationOne: {
    position: "absolute",
    width: 360,
    height: 360,
    borderRadius: 180,

    top: -150,
    left: -150,

    backgroundColor: "rgba(45, 147, 156, 0.12)",
  },

  backgroundDecorationTwo: {
    position: "absolute",
    width: 400,
    height: 400,
    borderRadius: 200,

    bottom: -190,
    right: -190,

    backgroundColor: "rgba(42, 78, 109, 0.12)",
  },

  scrollContainer: {
    flexGrow: 1,

    justifyContent: "center",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingTop: 100,
    paddingBottom: 30,
  },

  card: {
    width: "100%",
    maxWidth: 420,

    paddingHorizontal: 32,
    paddingVertical: 40,

    borderRadius: 16,

    borderWidth: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,

    elevation: 8,
  },

  cardLight: {
    backgroundColor: "#ffffff",
    borderColor: "rgba(0, 0, 0, 0.08)",
  },

  cardDark: {
    backgroundColor: "#1e293b",
    borderColor: "rgba(255, 255, 255, 0.1)",
  },

  title: {
    textAlign: "center",

    marginBottom: 24,

    fontSize: 32,
    fontWeight: "700",
    letterSpacing: -0.5,
  },

  titleLight: {
    color: "#2d939c",
  },

  titleDark: {
    color: "#4abeb6",
  },

  errorContainer: {
    backgroundColor: "rgba(239, 68, 68, 0.1)",

    padding: 10,

    borderRadius: 8,

    marginBottom: 20,
  },

  errorText: {
    color: "#ef4444",

    fontSize: 13,
    fontWeight: "500",

    textAlign: "center",
  },

  formGroup: {
    width: "100%",
    marginBottom: 16,
  },

  label: {
    marginBottom: 8,

    fontSize: 14,
    fontWeight: "500",
  },

  labelLight: {
    color: "#211f1f",
  },

  labelDark: {
    color: "#f8fafc",
  },

  input: {
    width: "100%",

    minHeight: 48,

    paddingHorizontal: 16,
    paddingVertical: 12,

    borderWidth: 1,
    borderRadius: 8,

    fontSize: 16,
  },

  inputLight: {
    backgroundColor: "#ffffff",

    borderColor: "#cccccc",

    color: "#211f1f",
  },

  inputDark: {
    backgroundColor: "#1e293b",

    borderColor: "rgba(255, 255, 255, 0.18)",

    color: "#f8fafc",
  },

  passwordWrapper: {
    width: "100%",

    minHeight: 48,

    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: 8,
  },

  passwordInput: {
    flex: 1,

    minHeight: 46,

    paddingHorizontal: 16,
    paddingVertical: 12,

    fontSize: 16,

    outlineStyle: "none",
  } as any,

  showPasswordButton: {
    minWidth: 76,

    paddingHorizontal: 12,
    paddingVertical: 12,

    alignItems: "center",
    justifyContent: "center",
  },

  showPasswordText: {
    fontSize: 13,
    fontWeight: "600",
  },

  showPasswordTextLight: {
    color: "#2a4e6d",
  },

  showPasswordTextDark: {
    color: "#4abeb6",
  },

  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",

    alignSelf: "flex-start",

    marginTop: 0,
    marginBottom: 24,
  },

  checkbox: {
    width: 18,
    height: 18,

    borderRadius: 4,

    borderWidth: 1,

    justifyContent: "center",
    alignItems: "center",

    marginRight: 8,
  },

  checkboxLight: {
    backgroundColor: "#ffffff",
    borderColor: "#94a3b8",
  },

  checkboxDark: {
    backgroundColor: "#0f172a",
    borderColor: "#64748b",
  },

  checkboxChecked: {
    backgroundColor: "#2d939c",
    borderColor: "#2d939c",
  },

  checkboxCheck: {
    color: "#ffffff",

    fontSize: 13,
    fontWeight: "700",
  },

  rememberText: {
    fontSize: 14,
  },

  rememberTextLight: {
    color: "#211f1f",
  },

  rememberTextDark: {
    color: "#f8fafc",
  },

  button: {
    width: "100%",

    backgroundColor: "#2d939c",

    paddingVertical: 14,

    borderRadius: 8,

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#2d939c",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 3,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: "#ffffff",

    fontSize: 16,
    fontWeight: "700",
  },

  footer: {
    marginTop: 24,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    flexWrap: "wrap",
  },

  footerText: {
    fontSize: 14,
  },

  footerTextLight: {
    color: "#6c757d",
  },

  footerTextDark: {
    color: "#94a3b8",
  },

  linkButton: {
    color: "#2a4e6d",

    fontSize: 14,
    fontWeight: "600",

    marginLeft: 5,

    textDecorationLine: "underline",
  },
});
