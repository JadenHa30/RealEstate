import appConfig from '@/app/api/config/local-config.json';
const { darkMode } = appConfig;
export const themeStyles = {
    primaryText: darkMode ? "primaryDarkText" : "primaryLightText",
    primaryBackground: darkMode ? "primaryDarkBg" : "primaryLightBg",
    secondaryText: darkMode ? "secondaryDarkText" : "secondaryLightText",
    secondaryBackground: darkMode ? "secondaryDarkBg" : "secondaryLightBg",
}