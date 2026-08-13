import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Modal,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { useTheme } from "../../contexts/ThemeContext";
import api from "../../services/api";
import { styles } from "./AddSkillModal.styles";

interface SkillCatalog {
  idSkill: number;
  nome: string;
  versao?: string;
}

interface AddSkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkillAdded: () => void | Promise<void>;
  existingSkillIds?: number[];
}

export default function AddSkillModal({
  isOpen,
  onClose,
  onSkillAdded,
  existingSkillIds = [],
}: AddSkillModalProps) {
  const { isDark } = useTheme();

  const [availableSkills, setAvailableSkills] = useState<SkillCatalog[]>([]);
  const [selectedSkillId, setSelectedSkillId] = useState<number | null>(null);
  const [level, setLevel] = useState(1);

  const [loading, setLoading] = useState(false);
  const [loadingSkills, setLoadingSkills] = useState(false);

  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    async function fetchCatalogSkills() {
      setErro("");
      setLevel(1);
      setSelectedSkillId(null);
      setLoadingSkills(true);

      try {
        const token = await AsyncStorage.getItem("@token");

        const response = await api.get("/skills", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const filtered = response.data.filter(
          (skill: SkillCatalog) => !existingSkillIds.includes(skill.idSkill),
        );

        setAvailableSkills(filtered);

        if (filtered.length > 0) {
          setSelectedSkillId(filtered[0].idSkill);
        }
      } catch (error) {
        console.error("Erro ao buscar catálogo de skills:", error);

        setErro("Erro ao carregar lista de skills do sistema.");
      } finally {
        setLoadingSkills(false);
      }
    }

    fetchCatalogSkills();
  }, [isOpen, existingSkillIds]);

  async function handleSubmit() {
    if (!selectedSkillId) {
      setErro("Por favor, selecione uma skill.");
      return;
    }

    setLoading(true);
    setErro("");

    try {
      const token = await AsyncStorage.getItem("@token");
      const usuarioId = await AsyncStorage.getItem("@usuarioId");

      if (!token || !usuarioId) {
        setErro("Sessão não encontrada. Faça login novamente.");
        return;
      }

      await api.post(
        "/usuario-skills/adicionar",
        {
          usuarioId: Number(usuarioId),
          skillId: Number(selectedSkillId),
          level: Number(level),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      await onSkillAdded();

      onClose();
    } catch (error: any) {
      console.error("Erro ao adicionar skill:", error);

      setErro(
        error?.response?.data?.message ||
          "Erro ao adicionar skill. Tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  }

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
            <Text
              style={[
                styles.title,
                isDark ? styles.titleDark : styles.titleLight,
              ]}
            >
              Adicionar Nova Skill
            </Text>

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

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {erro ? (
              <View style={styles.errorContainer}>
                <Text style={styles.error}>{erro}</Text>
              </View>
            ) : null}

            <View style={styles.formGroup}>
              <Text
                style={[
                  styles.label,
                  isDark ? styles.labelDark : styles.labelLight,
                ]}
              >
                Selecione a Tecnologia
              </Text>

              {loadingSkills ? (
                <View
                  style={[
                    styles.loadingContainer,
                    isDark ? styles.inputDark : styles.inputLight,
                  ]}
                >
                  <ActivityIndicator size="small" color="#2d939c" />

                  <Text
                    style={[
                      styles.loadingText,
                      isDark
                        ? styles.secondaryTextDark
                        : styles.secondaryTextLight,
                    ]}
                  >
                    Carregando skills...
                  </Text>
                </View>
              ) : availableSkills.length === 0 ? (
                <Text
                  style={[
                    styles.noSkillsText,
                    isDark
                      ? styles.secondaryTextDark
                      : styles.secondaryTextLight,
                  ]}
                >
                  Todas as skills do catálogo já foram adicionadas.
                </Text>
              ) : (
                <View style={styles.skillsSelector}>
                  {availableSkills.map((skill) => {
                    const selected = selectedSkillId === skill.idSkill;

                    return (
                      <Pressable
                        key={skill.idSkill}
                        onPress={() => setSelectedSkillId(skill.idSkill)}
                        style={[
                          styles.skillOption,
                          isDark
                            ? styles.skillOptionDark
                            : styles.skillOptionLight,
                          selected && styles.skillOptionSelected,
                        ]}
                      >
                        <Text
                          style={[
                            styles.skillOptionText,
                            isDark
                              ? styles.skillOptionTextDark
                              : styles.skillOptionTextLight,
                            selected && styles.skillOptionTextSelected,
                          ]}
                        >
                          {skill.nome}
                          {skill.versao ? ` (v${skill.versao})` : ""}
                        </Text>

                        {selected ? (
                          <Text style={styles.selectedIcon}>✓</Text>
                        ) : null}
                      </Pressable>
                    );
                  })}
                </View>
              )}
            </View>

            <View style={styles.formGroup}>
              <Text
                style={[
                  styles.label,
                  isDark ? styles.labelDark : styles.labelLight,
                ]}
              >
                Nível de Domínio (1 a 5)
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
                        level === lvl && styles.levelBtnTextSelected,
                        level !== lvl &&
                          (isDark
                            ? styles.levelBtnTextDark
                            : styles.levelBtnTextLight),
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
            </View>

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
                    isDark
                      ? styles.btnCancelTextDark
                      : styles.btnCancelTextLight,
                  ]}
                >
                  Cancelar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSubmit}
                style={[
                  styles.btnSave,
                  (loading || loadingSkills || availableSkills.length === 0) &&
                    styles.btnSaveDisabled,
                ]}
                disabled={
                  loading || loadingSkills || availableSkills.length === 0
                }
                activeOpacity={0.8}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#ffffff" />
                ) : (
                  <Text style={styles.btnSaveText}>Adicionar</Text>
                )}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
