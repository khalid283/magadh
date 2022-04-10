export interface IThemeBase {
  light: ITheme;
  dark: ITheme;
}

export interface ITheme {
  button: any;
  fontSize?: any;
  fontWeight?: any;
}

export type ThemeActions = { type: 'LIGHT_THEME' } | { type: 'DARK_THEME' } | { type: 'DIM_THEME' };
