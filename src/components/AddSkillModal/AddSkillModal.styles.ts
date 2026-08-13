import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modal: {
    width: "100%",
    maxHeight: "85%",
    borderRadius: 20,
    padding: 24,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },

  modalLight: {
    backgroundColor: "#ffffff",
  },

  modalDark: {
    backgroundColor: "#162f46",
  },

  scrollContent: {
    paddingBottom: 4,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  title: {
    flex: 1,
    fontSize: 21,
    fontWeight: "700",
  },

  titleLight: {
    color: "#0f172a",
  },

  titleDark: {
    color: "#ffffff",
  },

  closeButton: {
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },

  closeButtonLight: {
    backgroundColor: "#f1f5f9",
  },

  closeButtonDark: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },

  closeButtonText: {
    fontSize: 28,
    lineHeight: 30,
    fontWeight: "400",
  },

  closeButtonTextLight: {
    color: "#64748b",
  },

  closeButtonTextDark: {
    color: "#cbd5e1",
  },

  formGroup: {
    marginBottom: 22,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },

  labelLight: {
    color: "#334155",
  },

  labelDark: {
    color: "#e2e8f0",
  },

  loadingContainer: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
  },

  inputLight: {
    borderColor: "#cbd5e1",
    backgroundColor: "#ffffff",
  },

  inputDark: {
    borderColor: "rgba(255, 255, 255, 0.15)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },

  loadingText: {
    marginLeft: 10,
    fontSize: 14,
  },

  secondaryTextLight: {
    color: "#64748b",
  },

  secondaryTextDark: {
    color: "#94a3b8",
  },

  skillsSelector: {
    gap: 8,
  },

  skillOption: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderRadius: 10,
  },

  skillOptionLight: {
    borderColor: "#cbd5e1",
    backgroundColor: "#ffffff",
  },

  skillOptionDark: {
    borderColor: "rgba(255, 255, 255, 0.15)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },

  skillOptionSelected: {
    borderColor: "#2d939c",
    backgroundColor: "rgba(45, 147, 156, 0.12)",
  },

  skillOptionText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
  },

  skillOptionTextLight: {
    color: "#334155",
  },

  skillOptionTextDark: {
    color: "#e2e8f0",
  },

  skillOptionTextSelected: {
    color: "#2d939c",
    fontWeight: "700",
  },

  selectedIcon: {
    marginLeft: 10,
    color: "#2d939c",
    fontSize: 18,
    fontWeight: "700",
  },

  noSkillsText: {
    fontSize: 14,
    lineHeight: 20,
    paddingVertical: 8,
  },

  levelSelector: {
    flexDirection: "row",
    gap: 8,
  },

  levelBtnLight: {
    flex: 1,
    height: 48,
    borderWidth: 2,
    borderColor: "#e2e8f0",
    borderRadius: 10,
    backgroundColor: "#f8fafc",
    justifyContent: "center",
    alignItems: "center",
  },

  levelBtnDark: {
    flex: 1,
    height: 48,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    justifyContent: "center",
    alignItems: "center",
  },

  levelBtnSelectedRed: {
    flex: 1,
    height: 48,
    borderWidth: 2,
    borderColor: "#ef4444",
    borderRadius: 10,
    backgroundColor: "#ef4444",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#ef4444",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4,
  },

  levelBtnSelectedYellow: {
    flex: 1,
    height: 48,
    borderWidth: 2,
    borderColor: "#f59e0b",
    borderRadius: 10,
    backgroundColor: "#f59e0b",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#f59e0b",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4,
  },

  levelBtnSelectedGreen: {
    flex: 1,
    height: 48,
    borderWidth: 2,
    borderColor: "#10b981",
    borderRadius: 10,
    backgroundColor: "#10b981",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#10b981",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4,
  },

  levelBtnText: {
    fontSize: 17,
    fontWeight: "700",
  },

  levelBtnTextLight: {
    color: "#64748b",
  },

  levelBtnTextDark: {
    color: "#cbd5e1",
  },

  levelBtnTextSelected: {
    color: "#ffffff",
  },

  levelDescription: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
  },

  errorContainer: {
    marginBottom: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fef2f2",
    borderWidth: 1,
    borderColor: "#fee2e2",
  },

  error: {
    color: "#ef4444",
    fontSize: 13,
    lineHeight: 18,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
    marginTop: 6,
  },

  btnCancel: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  btnCancelLight: {
    borderColor: "#cbd5e1",
    backgroundColor: "#ffffff",
  },

  btnCancelDark: {
    borderColor: "rgba(255, 255, 255, 0.15)",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
  },

  btnCancelText: {
    fontSize: 14,
    fontWeight: "600",
  },

  btnCancelTextLight: {
    color: "#475569",
  },

  btnCancelTextDark: {
    color: "#cbd5e1",
  },

  btnSave: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#2d939c",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#2d939c",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 7,
    elevation: 4,
  },

  btnSaveDisabled: {
    opacity: 0.5,
  },

  btnSaveText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
  },
});
