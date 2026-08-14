import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
    ActivityIndicator,
    Modal,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { useTheme } from "../../contexts/ThemeContext";
import api from "../../services/api";
import { styles } from "./DeleteSkillModal.styles";

interface DeleteSkillModalProps {
  isOpen: boolean;
  skillId: number | null;
  skillNome: string;
  onClose: () => void;
  onSkillDeleted: () => void | Promise<void>;
}

export default function DeleteSkillModal({
  isOpen,
  skillId,
  skillNome,
  onClose,
  onSkillDeleted,
}: DeleteSkillModalProps) {
  const { isDark } = useTheme();

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function handleDelete() {
    if (!skillId) {
      setErro("Skill não encontrada.");
      return;
    }

    try {
      setLoading(true);
      setErro("");

      const token = await AsyncStorage.getItem("@token");

      if (!token) {
        setErro("Sessão não encontrada. Faça login novamente.");
        return;
      }

      await api.delete(`/usuario-skills/deletar/${skillId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await onSkillDeleted();

      onClose();
    } catch (error: any) {
      console.error("Erro ao excluir skill:", error);

      setErro(
        error?.response?.data?.message ||
          "Erro ao excluir a skill. Tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View
          style={[styles.modal, isDark ? styles.modalDark : styles.modalLight]}
        >
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text
                style={[
                  styles.title,
                  isDark ? styles.titleDark : styles.titleLight,
                ]}
              >
                Excluir Skill
              </Text>

              <Text
                style={[
                  styles.skillName,
                  isDark ? styles.secondaryTextDark : styles.secondaryTextLight,
                ]}
              >
                {skillNome}
              </Text>
            </View>

            <TouchableOpacity
              onPress={onClose}
              style={[
                styles.closeButton,
                isDark ? styles.closeButtonDark : styles.closeButtonLight,
              ]}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.closeButtonText,
                  isDark
                    ? styles.closeButtonTextDark
                    : styles.closeButtonTextLight,
                ]}
              >
                ×
              </Text>
            </TouchableOpacity>
          </View>

          {erro ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{erro}</Text>
            </View>
          ) : null}

          <Text
            style={[
              styles.message,
              isDark ? styles.messageDark : styles.messageLight,
            ]}
          >
            Tem certeza que deseja remover esta skill do seu perfil?
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity
              onPress={onClose}
              style={[
                styles.btnCancel,
                isDark ? styles.btnCancelDark : styles.btnCancelLight,
              ]}
              activeOpacity={0.8}
              disabled={loading}
            >
              <Text
                style={[
                  styles.btnCancelText,
                  isDark ? styles.btnCancelTextDark : styles.btnCancelTextLight,
                ]}
              >
                Cancelar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleDelete}
              disabled={loading}
              style={[styles.btnDelete, loading && styles.btnDisabled]}
              activeOpacity={0.8}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#ffffff" />
              ) : (
                <Text style={styles.btnDeleteText}>Excluir</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
