import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  authHeader: {
    width: "100%",

    minHeight: 68,

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 24,
    paddingVertical: 14,

    position: "absolute",
    top: 0,
    left: 0,

    zIndex: 1000,

    shadowColor: "#211f1f",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 6,
  },

  logoContainer: {
    position: "absolute",

    left: 0,
    right: 0,

    alignItems: "center",
    justifyContent: "center",

    pointerEvents: "none",
  },

  logoText: {
    fontSize: 20,
    fontWeight: "700",

    color: "#ffffff",

    letterSpacing: 0.5,
  },

  themeToggleBtn: {
    marginLeft: "auto",

    backgroundColor: "rgba(255, 255, 255, 0.15)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",

    paddingHorizontal: 14,
    paddingVertical: 7,

    borderRadius: 8,

    zIndex: 10,
  },

  themeToggleText: {
    color: "#ffffff",

    fontSize: 13,
    fontWeight: "500",
  },
});
