import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

interface ThemeContextData {
  isDark: boolean;
  toggleTheme: () => Promise<void>;
}

const ThemeContext = createContext<ThemeContextData | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    async function loadTheme() {
      try {
        const savedTheme = await AsyncStorage.getItem("@theme");

        if (savedTheme) {
          setIsDark(savedTheme === "dark");
        }
      } catch (error) {
        console.error("Erro ao carregar tema:", error);
      }
    }

    loadTheme();
  }, []);

  async function toggleTheme() {
    const newTheme = !isDark;

    setIsDark(newTheme);

    try {
      await AsyncStorage.setItem("@theme", newTheme ? "dark" : "light");
    } catch (error) {
      console.error("Erro ao salvar tema:", error);
    }
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }

  return context;
}
