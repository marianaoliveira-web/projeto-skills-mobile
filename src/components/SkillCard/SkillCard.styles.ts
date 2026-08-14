import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardWrapper: {
    width: "100%",
    marginBottom: 18,
    borderRadius: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 15,

    elevation: 5,
  },

  card: {
    width: "100%",
    minHeight: 390,

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",

    borderRadius: 16,

    padding: 22,

    alignItems: "center",

    overflow: "hidden",
  },

  imageContainer: {
    width: 76,
    height: 76,

    borderRadius: 14,

    backgroundColor: "rgba(255, 255, 255, 0.1)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",

    padding: 12,

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 14,
  },

  skillImage: {
    width: "100%",
    height: "100%",
  },

  skillName: {
    fontSize: 18,
    fontWeight: "700",

    color: "#ffffff",

    textAlign: "center",

    marginBottom: 8,

    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
  },

  skillDescription: {
    width: "100%",

    minHeight: 58,

    fontSize: 13,
    lineHeight: 19,

    fontWeight: "400",

    color: "rgba(255, 255, 255, 0.82)",

    textAlign: "center",

    marginBottom: 12,

    paddingHorizontal: 4,
  },

  levelBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,

    borderRadius: 20,

    borderWidth: 1,

    marginBottom: 12,
  },

  levelBadgeText: {
    fontSize: 12,
    fontWeight: "700",

    letterSpacing: 0.5,
  },

  batteryContainer: {
    flexDirection: "row",
    alignItems: "center",

    gap: 2,

    marginTop: 4,
    marginBottom: 16,
  },

  batteryBody: {
    width: 110,
    height: 28,

    padding: 4,

    flexDirection: "row",

    gap: 4,

    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.3)",

    borderRadius: 8,

    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },

  batteryNub: {
    width: 5,
    height: 14,

    backgroundColor: "rgba(255, 255, 255, 0.3)",

    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },

  segment: {
    flex: 1,

    height: "100%",

    borderRadius: 3,

    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },

  actions: {
    flexDirection: "row",

    gap: 10,

    width: "100%",

    marginTop: "auto",
    paddingTop: 6,
  },

  btnEdit: {
    flex: 1,

    paddingVertical: 9,

    borderRadius: 8,

    backgroundColor: "rgba(255, 255, 255, 0.1)",

    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",

    alignItems: "center",
    justifyContent: "center",
  },

  btnEditText: {
    color: "#ffffff",

    fontSize: 14,
    fontWeight: "600",
  },

  btnDelete: {
    flex: 1,

    paddingVertical: 9,

    borderRadius: 8,

    backgroundColor: "rgba(231, 76, 60, 0.15)",

    borderWidth: 1,
    borderColor: "rgba(231, 76, 60, 0.3)",

    alignItems: "center",
    justifyContent: "center",
  },

  btnDeleteText: {
    color: "#ff8a80",

    fontSize: 14,
    fontWeight: "600",
  },
});
