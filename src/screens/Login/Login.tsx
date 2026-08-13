import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AuthHeader from "../../components/AuthHeader";
import api from "../../services/api";
import { styles } from "./Login.styles";

export default function Login() {
  const router = useRouter();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(false);

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [gravarSenha, setGravarSenha] = useState(false);

  useEffect(() => {
    async function carregarCredenciaisSalvas() {
      try {
        const lembrarSenha = await AsyncStorage.getItem("@lembrarSenha");

        if (lembrarSenha === "true") {
          const loginSalvo = await AsyncStorage.getItem("@loginSalvo");

          const senhaSalva = await AsyncStorage.getItem("@senhaSalva");

          if (loginSalvo) {
            setLogin(loginSalvo);
          }

          if (senhaSalva) {
            setSenha(senhaSalva);
          }

          setGravarSenha(true);
        }
      } catch (error) {
        console.error("Erro ao carregar credenciais salvas:", error);
      }
    }

    carregarCredenciaisSalvas();
  }, []);

  async function handleToggleGravarSenha() {
    const novoValor = !gravarSenha;

    setGravarSenha(novoValor);

    if (!novoValor) {
      try {
        await AsyncStorage.multiRemove([
          "@lembrarSenha",
          "@loginSalvo",
          "@senhaSalva",
        ]);
      } catch (error) {
        console.error("Erro ao remover credenciais salvas:", error);
      }
    }
  }

  const handleLogin = async () => {
    if (!login || !senha) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        login,
        senha,
      });

      const { token, id } = response.data;

      await AsyncStorage.setItem("@token", token);

      await AsyncStorage.setItem("@usuarioId", String(id));

      if (gravarSenha) {
        await AsyncStorage.multiSet([
          ["@lembrarSenha", "true"],
          ["@loginSalvo", login],
          ["@senhaSalva", senha],
        ]);
      } else {
        await AsyncStorage.multiRemove([
          "@lembrarSenha",
          "@loginSalvo",
          "@senhaSalva",
        ]);
      }

      router.replace("/home");
    } catch (error: any) {
      console.error("Erro no login:", error);

      Alert.alert(
        "Erro no Login",
        "Verifique suas credenciais e tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <AuthHeader />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.title}>Bem-vindo de volta!</Text>

          <Text style={styles.subtitle}>
            Faça login para gerenciar suas skills
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Login"
            placeholderTextColor="#94a3b8"
            autoCapitalize="none"
            autoCorrect={false}
            value={login}
            onChangeText={setLogin}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Senha"
              placeholderTextColor="#94a3b8"
              secureTextEntry={!mostrarSenha}
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setMostrarSenha((valorAtual) => !valorAtual)}
              activeOpacity={0.7}
            >
              <Text style={styles.showPasswordText}>
                {mostrarSenha ? "🙈" : "👁️"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.rememberContainer}
            onPress={handleToggleGravarSenha}
            activeOpacity={0.8}
          >
            <View
              style={[styles.checkbox, gravarSenha && styles.checkboxChecked]}
            >
              {gravarSenha && <Text style={styles.checkboxCheck}>✓</Text>}
            </View>

            <Text style={styles.rememberText}>Gravar senha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>
              {loading ? "Entrando..." : "Entrar"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
