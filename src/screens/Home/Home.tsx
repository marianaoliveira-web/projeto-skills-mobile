import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import AddSkillModal from "../../components/AddSkillModal/AddSkillModal";
import Header from "../../components/Header/Header";
import SkillCard from "../../components/SkillCard/SkillCard";
import { useTheme } from "../../contexts/ThemeContext";
import api from "../../services/api";
import { styles } from "./Home.styles";

interface Skill {
  id: number;
  skillId: number;
  skillNome: string;
  skillImageUrl?: string;
  level: number;
}

export default function Home() {
  const { isDark } = useTheme();

  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const carregarSkills = useCallback(async () => {
    try {
      setLoading(true);

      const token = await AsyncStorage.getItem("@token");
      const usuarioId = await AsyncStorage.getItem("@usuarioId");

      if (!token || !usuarioId) {
        console.error("Token ou usuário não encontrado.");
        return;
      }

      const response = await api.get(`/usuario-skills/usuario/${usuarioId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSkills(response.data);
    } catch (error: any) {
      console.error("ERRO AO BUSCAR SKILLS");
      console.error("Status:", error?.response?.status);
      console.error("Data:", error?.response?.data);
      console.error("URL:", error?.config?.url);
      console.error("Método:", error?.config?.method);

      Alert.alert(
        "Erro",
        `Status: ${error?.response?.status ?? "desconhecido"}`,
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    carregarSkills();
  }, [carregarSkills]);

  async function handleEdit(id: number) {
    Alert.prompt(
      "Editar nível",
      "Digite o novo nível da sua Skill (1 a 5):",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Salvar",
          onPress: async (novoLevelStr?: string) => {
            if (!novoLevelStr) {
              return;
            }

            const novoLevel = Number(novoLevelStr);

            if (
              Number.isNaN(novoLevel) ||
              novoLevel < 1 ||
              novoLevel > 5 ||
              !Number.isInteger(novoLevel)
            ) {
              Alert.alert(
                "Nível inválido",
                "Digite um número inteiro entre 1 e 5.",
              );
              return;
            }

            try {
              const token = await AsyncStorage.getItem("@token");

              await api.put(
                `/usuario-skills/atualizar/${id}`,
                {
                  level: novoLevel,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                },
              );

              await carregarSkills();
            } catch (error) {
              console.error("Erro ao atualizar a skill:", error);

              Alert.alert(
                "Erro",
                "Erro ao atualizar a skill. Tente novamente.",
              );
            }
          },
        },
      ],
      "plain-text",
      "",
    );
  }

  function handleDelete(id: number) {
    Alert.alert(
      "Remover skill",
      "Tem certeza que deseja remover esta skill do seu perfil?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              const token = await AsyncStorage.getItem("@token");

              await api.delete(`/usuario-skills/deletar/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });

              await carregarSkills();
            } catch (error) {
              console.error("Erro ao deletar a skill:", error);

              Alert.alert("Erro", "Erro ao remover a skill. Tente novamente.");
            }
          },
        },
      ],
    );
  }

  const existingSkillIds = skills.map((skill) => skill.skillId);

  return (
    <View
      style={[
        styles.homeContainer,
        {
          backgroundColor: isDark ? "#0f172a" : "#f8fafc",
        },
      ]}
    >
      <Header />

      <View style={styles.mainContent}>
        <View
          style={[
            styles.titleContainer,
            {
              borderBottomColor: isDark
                ? "rgba(255, 255, 255, 0.15)"
                : "rgba(15, 23, 42, 0.15)",
            },
          ]}
        >
          <Text
            style={[
              styles.pageTitle,
              {
                color: isDark ? "#f8fafc" : "#0f172a",
              },
            ]}
          >
            Minhas Skills
          </Text>

          <TouchableOpacity
            style={styles.btnAddSkill}
            onPress={() => setIsModalOpen(true)}
            activeOpacity={0.8}
          >
            <Text style={styles.btnAddSkillText}>+ Nova Skill</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#4abeb6" />

            <Text
              style={[
                styles.loadingText,
                {
                  color: isDark ? "#f8fafc" : "#334155",
                },
              ]}
            >
              Carregando sua bateria de conhecimentos...
            </Text>
          </View>
        ) : skills.length === 0 ? (
          <Text
            style={[
              styles.emptyMessage,
              {
                color: isDark ? "#f8fafc" : "#334155",
                backgroundColor: isDark
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(15, 23, 42, 0.05)",
                borderColor: isDark
                  ? "rgba(255, 255, 255, 0.25)"
                  : "rgba(15, 23, 42, 0.15)",
              },
            ]}
          >
            Nenhuma skill cadastrada no seu perfil.
          </Text>
        ) : (
          <FlatList
            data={skills}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item, index }) => (
              <SkillCard
                skillNome={item.skillNome}
                skillImagem={item.skillImageUrl}
                level={item.level}
                index={index}
                onEdit={() => handleEdit(item.id)}
                onDelete={() => handleDelete(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.skillsGrid}
          />
        )}
      </View>

      <AddSkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSkillAdded={carregarSkills}
        existingSkillIds={existingSkillIds}
      />
    </View>
  );
}
