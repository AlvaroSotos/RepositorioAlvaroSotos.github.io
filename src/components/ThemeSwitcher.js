import { useThemeContext } from "./../context/ThemeContext";

export default function ThemeSwitcher() {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <button className="botonDia" onClick={toggleTheme}>{theme === "light" ? "🌙" : "🔅"}</button>
  );
}