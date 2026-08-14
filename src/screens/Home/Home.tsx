import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import AddSkillModal from "../../components/AddSkillModal/AddSkillModal";
import DeleteSkillModal from "../../components/DeleteSkillModal/DeleteSkillModal";
import EditSkillModal from "../../components/EditSkillModal/EditSkillModal";
import Header from "../../components/Header/Header";
import SkillCard from "../../components/SkillCard/SkillCard";

import { useTheme } from "../../contexts/ThemeContext";
import api from "../../services/api";
import { styles } from "./Home.styles";

interface Skill {
  id: number;
  skillId: number;
  skillNome: string;
  skillDescricao?: string;
  skillImageUrl?: string;
  level: number;
}

export default function Home() {
  const { isDark } = useTheme();

  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const carregarSkills = useCallback(async () => {
    try {
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
    } catch (error) {
      console.error("Erro ao buscar as skills:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useState(() => {
    carregarSkills();
    return true;
  });

  function handleEdit(skill: Skill) {
    setSelectedSkill(skill);
    setIsEditModalOpen(true);
  }

  function handleCloseEditModal() {
    setIsEditModalOpen(false);
    setSelectedSkill(null);
  }

  function handleDelete(skill: Skill) {
    setSelectedSkill(skill);
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
    setSelectedSkill(null);
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
            onPress={() => setIsAddModalOpen(true)}
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
                skillDescricao={item.skillDescricao}
                level={item.level}
                index={index}
                onEdit={() => handleEdit(item)}
                onDelete={() => handleDelete(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.skillsGrid}
          />
        )}
      </View>

      <AddSkillModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSkillAdded={carregarSkills}
        existingSkillIds={existingSkillIds}
      />

      <EditSkillModal
        key={selectedSkill ? `edit-${selectedSkill.id}` : "edit-empty"}
        isOpen={isEditModalOpen}
        skillId={selectedSkill?.id ?? null}
        skillNome={selectedSkill?.skillNome ?? ""}
        currentLevel={selectedSkill?.level ?? 1}
        onClose={handleCloseEditModal}
        onSkillUpdated={carregarSkills}
      />

      <DeleteSkillModal
        isOpen={isDeleteModalOpen}
        skillId={selectedSkill?.id ?? null}
        skillNome={selectedSkill?.skillNome ?? ""}
        onClose={handleCloseDeleteModal}
        onSkillDeleted={carregarSkills}
      />
    </View>
  );
}
