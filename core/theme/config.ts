export const THEME_STORAGE_KEY = 'portfolio-theme';

export const THEMES = {
  dark: 'portfolio',
  light: 'portfolio-light',
} as const;

export type ThemeName = (typeof THEMES)[keyof typeof THEMES];

export const DEFAULT_THEME: ThemeName = THEMES.dark;

export function isThemeName(value: string | null): value is ThemeName {
  return value === THEMES.dark || value === THEMES.light;
}

export function resolveTheme(stored: string | null): ThemeName {
  if (isThemeName(stored)) return stored;
  return DEFAULT_THEME;
}

export function getOppositeTheme(theme: ThemeName): ThemeName {
  return theme === THEMES.dark ? THEMES.light : THEMES.dark;
}
