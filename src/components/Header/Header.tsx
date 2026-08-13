import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "../../contexts/ThemeContext";
import { styles } from "./Header.styles";

export default function Header() {
  const router = useRouter();

  const { isDark, toggleTheme } = useTheme();

  const [userLogin, setUserLogin] = useState("Usuário");

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const usuario = await AsyncStorage.getItem("@user");

        if (usuario) {
          const parsedUser = JSON.parse(usuario);

          setUserLogin(parsedUser?.login || parsedUser?.nome || "Usuário");
        }
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
      }
    }

    carregarUsuario();
  }, []);

  async function handleLogout() {
    try {
      await AsyncStorage.multiRemove(["@user", "@token", "@usuarioId"]);

      router.replace("/");
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  }

  return (
    <LinearGradient
      colors={["#173d5c", "#2d939c"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.header}
    >
      <View style={styles.container}>
        <Text style={styles.logo}>Projeto Skills</Text>

        <TouchableOpacity
          onPress={toggleTheme}
          style={styles.btnTheme}
          activeOpacity={0.8}
        >
          <Text style={styles.btnThemeText}>
            {isDark ? "☀️ Claro" : "🌙 Escuro"}
          </Text>
        </TouchableOpacity>

        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Olá, {userLogin}!</Text>

          <TouchableOpacity
            onPress={handleLogout}
            style={styles.logoutButton}
            activeOpacity={0.8}
          >
            <Text style={styles.logoutButtonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
