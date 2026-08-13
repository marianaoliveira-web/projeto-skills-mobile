import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",

    paddingTop: 16,
    paddingBottom: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 5,
  },

  container: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
  },

  logo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: 0.5,
    marginBottom: 14,

    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
  },

  btnTheme: {
    alignSelf: "flex-start",

    backgroundColor: "rgba(255, 255, 255, 0.15)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",

    paddingHorizontal: 14,
    paddingVertical: 8,

    borderRadius: 8,

    marginBottom: 14,
  },

  btnThemeText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },

  userInfo: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  greeting: {
    flex: 1,

    color: "#ffffff",

    fontSize: 15,
    fontWeight: "500",

    marginRight: 12,
  },

  logoutButton: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",

    paddingHorizontal: 16,
    paddingVertical: 8,

    borderRadius: 8,
  },

  logoutButtonText: {
    color: "#ffffff",

    fontSize: 14,
    fontWeight: "600",
  },
});
