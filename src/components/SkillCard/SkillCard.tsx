import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./SkillCard.styles";

interface SkillCardProps {
  skillNome: string;
  skillImagem?: string;
  skillDescricao?: string;
  level: number;
  index?: number;
  onEdit: () => void;
  onDelete: () => void;
}

export default function SkillCard({
  skillNome,
  skillImagem,
  skillDescricao,
  level,
  index = 0,
  onEdit,
  onDelete,
}: SkillCardProps) {
  function getLevelInfo(currentLevel: number) {
    if (currentLevel <= 2) {
      return {
        badgeBackground: "rgba(239, 68, 68, 0.2)",
        badgeColor: "#fca5a5",
        badgeBorder: "rgba(239, 68, 68, 0.3)",
        activeColor: "#ef4444",
        shadowColor: "#ef4444",
        label: `Nível ${currentLevel}/5 (Básico)`,
      };
    }

    if (currentLevel === 3) {
      return {
        badgeBackground: "rgba(245, 158, 11, 0.2)",
        badgeColor: "#fcd34d",
        badgeBorder: "rgba(245, 158, 11, 0.3)",
        activeColor: "#f59e0b",
        shadowColor: "#f59e0b",
        label: "Nível 3/5 (Médio)",
      };
    }

    return {
      badgeBackground: "rgba(16, 185, 129, 0.2)",
      badgeColor: "#6ee7b7",
      badgeBorder: "rgba(16, 185, 129, 0.3)",
      activeColor: "#10b981",
      shadowColor: "#10b981",
      label: `Nível ${currentLevel}/5 (Avançado)`,
    };
  }

  function getGradient() {
    const position = index % 3;

    if (position === 0) {
      return ["#173d5c", "#2d939c"] as const;
    }

    if (position === 1) {
      return ["#173d5c", "#3b82a0"] as const;
    }

    return ["#2d939c", "#3b82a0"] as const;
  }

  const levelInfo = getLevelInfo(level);

  return (
    <View style={styles.cardWrapper}>
      <LinearGradient
        colors={getGradient()}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: skillImagem || "https://via.placeholder.com/80",
            }}
            style={styles.skillImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.skillName}>{skillNome}</Text>

        {skillDescricao ? (
          <Text
            style={styles.skillDescription}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {skillDescricao}
          </Text>
        ) : null}

        <View
          style={[
            styles.levelBadge,
            {
              backgroundColor: levelInfo.badgeBackground,
              borderColor: levelInfo.badgeBorder,
            },
          ]}
        >
          <Text
            style={[
              styles.levelBadgeText,
              {
                color: levelInfo.badgeColor,
              },
            ]}
          >
            {levelInfo.label}
          </Text>
        </View>

        <View style={styles.batteryContainer}>
          <View style={styles.batteryBody}>
            {[1, 2, 3, 4, 5].map((segmento) => {
              const active = segmento <= level;

              return (
                <View
                  key={segmento}
                  style={[
                    styles.segment,
                    active && {
                      backgroundColor: levelInfo.activeColor,
                      shadowColor: levelInfo.shadowColor,
                      shadowOpacity: 0.8,
                      shadowRadius: 5,
                      elevation: 3,
                    },
                  ]}
                />
              );
            })}
          </View>

          <View style={styles.batteryNub} />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={onEdit}
            style={styles.btnEdit}
            activeOpacity={0.8}
          >
            <Text style={styles.btnEditText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onDelete}
            style={styles.btnDelete}
            activeOpacity={0.8}
          >
            <Text style={styles.btnDeleteText}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
