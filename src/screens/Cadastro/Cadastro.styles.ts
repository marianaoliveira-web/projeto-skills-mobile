import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerLight: {
    backgroundColor: "#f4f7f6",
  },

  containerDark: {
    backgroundColor: "#0f172a",
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
    shadowOpacity: 0.12,
    shadowRadius: 20,
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
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
  },

  successContainer: {
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },

  successText: {
    color: "#2d939c",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "600",
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
    color: "#211f1f",
    borderColor: "#cccccc",
  },

  inputDark: {
    backgroundColor: "#1e293b",
    color: "#f8fafc",
    borderColor: "rgba(255, 255, 255, 0.2)",
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
    paddingLeft: 16,
    paddingRight: 8,
    fontSize: 16,
    outlineStyle: "none",
  } as any,

  showPasswordButton: {
    paddingHorizontal: 14,
    minHeight: 46,
    justifyContent: "center",
    alignItems: "center",
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

  button: {
    width: "100%",
    minHeight: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#2d939c",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  buttonDisabled: {
    opacity: 0.6,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  footer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 4,
  },

  footerText: {
    fontSize: 14,
  },

  footerTextLight: {
    color: "#64748b",
  },

  footerTextDark: {
    color: "#94a3b8",
  },

  linkText: {
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },

  linkTextLight: {
    color: "#2a4e6d",
  },

  linkTextDark: {
    color: "#4abeb6",
  },
});
