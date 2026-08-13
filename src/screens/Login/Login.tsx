import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AuthHeader from "../../components/AuthHeader/AuthHeader";
import { useTheme } from "../../contexts/ThemeContext";
import api from "../../services/api";
import { styles } from "./Login.styles";

export default function Login() {
  const router = useRouter();
  const { isDark } = useTheme();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [gravarSenha, setGravarSenha] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

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
        console.error("Erro ao remover credenciais:", error);
      }
    }
  }

  async function handleLogin() {
    setErro("");

    if (!login.trim() || !senha) {
      setErro("Por favor, preencha login e senha.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        login: login.trim(),
        senha,
      });

      const { token, id } = response.data;

      await AsyncStorage.setItem("@token", token);

      await AsyncStorage.setItem("@usuarioId", String(id));

      const nomeFormatado = login.includes("@") ? login.split("@")[0] : login;

      await AsyncStorage.setItem(
        "@user",
        JSON.stringify({
          login: nomeFormatado,
        }),
      );

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

      setErro(error?.response?.data?.message || "Login ou senha incorretos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        styles.container,
        isDark ? styles.containerDark : styles.containerLight,
      ]}
    >
      <AuthHeader />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={[styles.card, isDark ? styles.cardDark : styles.cardLight]}
        >
          <Text
            style={[
              styles.title,
              isDark ? styles.titleDark : styles.titleLight,
            ]}
          >
            Entrar
          </Text>

          {erro ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{erro}</Text>
            </View>
          ) : null}

          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                isDark ? styles.labelDark : styles.labelLight,
              ]}
            >
              Login
            </Text>

            <TextInput
              style={[
                styles.input,
                isDark ? styles.inputDark : styles.inputLight,
              ]}
              placeholder="Digite seu usuário"
              placeholderTextColor="#94a3b8"
              autoCapitalize="none"
              autoCorrect={false}
              value={login}
              onChangeText={setLogin}
            />
          </View>

          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                isDark ? styles.labelDark : styles.labelLight,
              ]}
            >
              Senha
            </Text>

            <View
              style={[
                styles.passwordWrapper,
                isDark ? styles.inputDark : styles.inputLight,
              ]}
            >
              <TextInput
                style={[
                  styles.passwordInput,
                  {
                    color: isDark ? "#f8fafc" : "#211f1f",
                  },
                ]}
                placeholder="Digite sua senha"
                placeholderTextColor="#94a3b8"
                secureTextEntry={!mostrarSenha}
                value={senha}
                onChangeText={setSenha}
              />

              <TouchableOpacity
                onPress={() => setMostrarSenha((valorAtual) => !valorAtual)}
                style={styles.showPasswordButton}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.showPasswordText,
                    isDark
                      ? styles.showPasswordTextDark
                      : styles.showPasswordTextLight,
                  ]}
                >
                  {mostrarSenha ? "Ocultar" : "Mostrar"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleToggleGravarSenha}
            style={styles.rememberContainer}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.checkbox,
                isDark ? styles.checkboxDark : styles.checkboxLight,
                gravarSenha && styles.checkboxChecked,
              ]}
            >
              {gravarSenha ? <Text style={styles.checkboxCheck}>✓</Text> : null}
            </View>

            <Text
              style={[
                styles.rememberText,
                isDark ? styles.rememberTextDark : styles.rememberTextLight,
              ]}
            >
              Gravar Senha
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.8}
            style={[styles.button, loading && styles.buttonDisabled]}
          >
            <Text style={styles.buttonText}>
              {loading ? "Entrando..." : "Entrar"}
            </Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text
              style={[
                styles.footerText,
                isDark ? styles.footerTextDark : styles.footerTextLight,
              ]}
            >
              Não tem uma conta? Cadastrar-se
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
