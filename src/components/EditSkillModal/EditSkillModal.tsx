import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Modal,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { useTheme } from "../../contexts/ThemeContext";
import api from "../../services/api";
import { styles } from "./EditSkillModal.styles";

interface EditSkillModalProps {
  isOpen: boolean;
  skillId: number | null;
  skillNome: string;
  currentLevel: number;
  onClose: () => void;
  onSkillUpdated: () => void | Promise<void>;
}

export default function EditSkillModal({
  isOpen,
  skillId,
  skillNome,
  currentLevel,
  onClose,
  onSkillUpdated,
}: EditSkillModalProps) {
  const { isDark } = useTheme();

  const [level, setLevel] = useState(currentLevel);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (isOpen) {
      setLevel(currentLevel);
      setErro("");
    }
  }, [isOpen, currentLevel]);

  function getLevelLabel() {
    if (level <= 2) {
      return "Iniciante / Básico";
    }

    if (level === 3) {
      return "Intermediário";
    }

    return "Avançado / Especialista";
  }

  function getLevelButtonStyle(lvl: number) {
    if (level !== lvl) {
      return isDark ? styles.levelBtnDark : styles.levelBtnLight;
    }

    if (lvl <= 2) {
      return styles.levelBtnSelectedRed;
    }

    if (lvl === 3) {
      return styles.levelBtnSelectedYellow;
    }

    return styles.levelBtnSelectedGreen;
  }

  async function handleSave() {
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

      await api.put(
        `/usuario-skills/atualizar/${skillId}`,
        {
          level,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      await onSkillUpdated();

      onClose();
    } catch (error: any) {
      console.error("Erro ao atualizar skill:", error);

      setErro(
        error?.response?.data?.message ||
          "Erro ao atualizar a skill. Tente novamente.",
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
                Editar Skill
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
              styles.label,
              isDark ? styles.labelDark : styles.labelLight,
            ]}
          >
            Nível de Domínio
          </Text>

          <View style={styles.levelSelector}>
            {[1, 2, 3, 4, 5].map((lvl) => (
              <TouchableOpacity
                key={lvl}
                onPress={() => setLevel(lvl)}
                style={getLevelButtonStyle(lvl)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.levelBtnText,
                    level === lvl
                      ? styles.levelBtnTextSelected
                      : isDark
                        ? styles.levelBtnTextDark
                        : styles.levelBtnTextLight,
                  ]}
                >
                  {lvl}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text
            style={[
              styles.levelDescription,
              isDark ? styles.secondaryTextDark : styles.secondaryTextLight,
            ]}
          >
            {getLevelLabel()}
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity
              onPress={onClose}
              style={[
                styles.btnCancel,
                isDark ? styles.btnCancelDark : styles.btnCancelLight,
              ]}
              activeOpacity={0.8}
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
              onPress={handleSave}
              disabled={loading}
              style={[styles.btnSave, loading && styles.btnDisabled]}
              activeOpacity={0.8}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#ffffff" />
              ) : (
                <Text style={styles.btnSaveText}>Salvar</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
