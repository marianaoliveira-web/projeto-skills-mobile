import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
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
import { styles } from "./Cadastro.styles";

export default function Cadastro() {
  const router = useRouter();
  const { isDark } = useTheme();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCadastro() {
    setErro("");
    setSucesso("");

    if (!login.trim() || !senha || !confirmarSenha) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem. Por favor, verifique.");
      return;
    }

    try {
      setLoading(true);

      await api.post("/usuario/cadastrar", {
        login: login.trim(),
        senha,
      });

      setSucesso("Cadastro realizado com sucesso! Redirecionando...");

      setTimeout(() => {
        router.replace("/");
      }, 2000);
    } catch (error: any) {
      console.error("Erro ao realizar cadastro:", error);

      setErro(
        error?.response?.data?.message ||
          "Erro ao realizar cadastro. Por favor, tente novamente.",
      );
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
        showsVerticalScrollIndicator={false}
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
            Criar Conta
          </Text>

          {erro ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{erro}</Text>
            </View>
          ) : null}

          {sucesso ? (
            <View style={styles.successContainer}>
              <Text style={styles.successText}>{sucesso}</Text>
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
              placeholder="Escolha seu usuário"
              placeholderTextColor="#94a3b8"
              autoCapitalize="none"
              autoCorrect={false}
              value={login}
              onChangeText={setLogin}
              editable={!loading}
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
                editable={!loading}
              />

              <TouchableOpacity
                onPress={() => setMostrarSenha((valor) => !valor)}
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

          <View style={styles.formGroup}>
            <Text
              style={[
                styles.label,
                isDark ? styles.labelDark : styles.labelLight,
              ]}
            >
              Confirmar Senha
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
                placeholder="Confirme sua senha"
                placeholderTextColor="#94a3b8"
                secureTextEntry={!mostrarConfirmarSenha}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                editable={!loading}
              />

              <TouchableOpacity
                onPress={() => setMostrarConfirmarSenha((valor) => !valor)}
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
                  {mostrarConfirmarSenha ? "Ocultar" : "Mostrar"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleCadastro}
            disabled={loading}
            activeOpacity={0.8}
            style={[styles.button, loading && styles.buttonDisabled]}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.buttonText}>Salvar</Text>
            )}
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text
              style={[
                styles.footerText,
                isDark ? styles.footerTextDark : styles.footerTextLight,
              ]}
            >
              Já possui uma conta?
            </Text>

            <TouchableOpacity
              onPress={() => router.replace("/")}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.linkText,
                  isDark ? styles.linkTextDark : styles.linkTextLight,
                ]}
              >
                Voltar para Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
