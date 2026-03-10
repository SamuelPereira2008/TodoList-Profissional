/*
  ==========================================
  TEMA GLOBAL DA APLICAÇÃO
  ==========================================
*/

export const theme = {
  colors: {
    primary: "#2563eb",
    primaryHover: "#1d4ed8",
    secondary: "#64748b",

    background: "#f8fafc",
    surface: "#ffffff",

    text: "#0f172a",
    textLight: "#64748b",

    border: "#e2e8f0",

    success: "#22c55e",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#0ea5e9",
  },

  fonts: {
    main: "Inter, Arial, sans-serif",
    heading: "Inter, Arial, sans-serif",
    mono: "monospace",
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    xxl: "32px",
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    pill: "999px",
  },

  borderWidth: {
    thin: "1px",
    normal: "2px",
  },

  shadow: {
    sm: "0 3px 5px rgba(0,0,0,0.1)",
    md: "0 5px 11px rgba(0,0,0,0.15)",
    lg: "0 11px 26px rgba(0,0,0,0.2)",
  },

  layout: {
    containerWidth: "1200px",
    sidebarWidth: "260px",
  },

  transition: {
    fast: "0.15s ease",
    normal: "0.25s ease",
    slow: "0.4s ease",
  },
};

/*
  ==========================================
  TIPAGEM DO TEMA PARA O STYLED COMPONENTS
  ==========================================
*/

import "styled-components";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
