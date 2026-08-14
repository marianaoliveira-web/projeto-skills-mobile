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
    maxWidth: 460,
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,

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
    borderColor: "rgba(0, 0, 0, 0.08)",
  },

  modalDark: {
    backgroundColor: "#162f46",
    borderColor: "rgba(255, 255, 255, 0.1)",
  },

  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
  },

  titleLight: {
    color: "#0f172a",
  },

  titleDark: {
    color: "#ffffff",
  },

  skillName: {
    fontSize: 14,
    fontWeight: "500",
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
  },

  closeButtonTextLight: {
    color: "#64748b",
  },

  closeButtonTextDark: {
    color: "#cbd5e1",
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 12,
  },

  labelLight: {
    color: "#334155",
  },

  labelDark: {
    color: "#e2e8f0",
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

  secondaryTextLight: {
    color: "#64748b",
  },

  secondaryTextDark: {
    color: "#94a3b8",
  },

  errorContainer: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#fef2f2",
    borderWidth: 1,
    borderColor: "#fee2e2",
  },

  errorText: {
    color: "#ef4444",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "500",
  },

  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 28,
  },

  btnCancel: {
    flex: 1,
    minHeight: 46,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  btnCancelLight: {
    backgroundColor: "#ffffff",
    borderColor: "#cbd5e1",
  },

  btnCancelDark: {
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    borderColor: "rgba(255, 255, 255, 0.15)",
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
    minHeight: 46,
    borderRadius: 10,
    backgroundColor: "#2d939c",
    justifyContent: "center",
    alignItems: "center",
  },

  btnSaveText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "700",
  },

  btnDisabled: {
    opacity: 0.6,
  },
});
