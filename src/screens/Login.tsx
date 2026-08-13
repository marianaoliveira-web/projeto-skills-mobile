import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
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
import AuthHeader from "../components/AuthHeader";
import api from "../services/api";
import { styles } from "./Login.styles";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      setLoading(true);
      const response = await api.post("/auth/login", { email, senha });

      const { token, idUsuario } = response.data;

      await AsyncStorage.setItem("@token", token);
      await AsyncStorage.setItem("@usuarioId", String(idUsuario));

      navigation.replace("Home");
    } catch (error: any) {
      console.error(error);
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Bem-vindo de volta!</Text>
          <Text style={styles.subtitle}>
            Faça login para gerenciar suas skills
          </Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#94a3b8"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            disabled={loading}
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
