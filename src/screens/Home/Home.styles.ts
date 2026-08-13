import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },

  homeContainerDark: {
    backgroundColor: "#0f172a",
  },

  homeContainerLight: {
    backgroundColor: "#f8fafc",
  },

  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
  },

  titleContainerDark: {
    borderBottomColor: "rgba(255, 255, 255, 0.15)",
  },

  titleContainerLight: {
    borderBottomColor: "#e2e8f0",
  },

  pageTitle: {
    fontSize: 26,
    fontWeight: "800",
  },

  pageTitleDark: {
    color: "#f8fafc",
  },

  pageTitleLight: {
    color: "#0f172a",
  },

  btnAddSkill: {
    backgroundColor: "#2d939c",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: "#2d939c",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },

  btnAddSkillText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },

  skillsGrid: {
    paddingBottom: 30,
  },

  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 48,
    padding: 30,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: "dashed",
  },

  emptyMessageDark: {
    color: "#f8fafc",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.25)",
  },

  emptyMessageLight: {
    color: "#334155",
    backgroundColor: "#ffffff",
    borderColor: "#cbd5e1",
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 12,
    fontSize: 16,
  },

  loadingTextDark: {
    color: "#f8fafc",
  },

  loadingTextLight: {
    color: "#334155",
  },
});
