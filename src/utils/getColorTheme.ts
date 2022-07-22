export default function getColorTheme(isDarkThemeOff: boolean):string {
  return (
    isDarkThemeOff ? "dark" : "light"
  )
}
