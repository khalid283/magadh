import React from 'react';
import { ThemeActions, ITheme } from '../../types';
import themeBase from '../../theme';

type ThemeContextProps = { children: React.ReactNode; providedTheme: ITheme };

const ThemeContext = React.createContext<{
  theme: ITheme;
  changeTheme: (action: ThemeActions) => void;
}>(undefined);

function themeReducer(state: ITheme, action: ThemeActions) {
  switch (action.type) {
    case 'LIGHT_THEME': {
      return { ...state, ...themeBase.light };
    }
    case 'DARK_THEME': {
      return { ...state, ...themeBase.dark };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ThemeProvider({ children, providedTheme }: ThemeContextProps) {
  const [theme, changeTheme] = React.useReducer(themeReducer, {
    ...themeBase.base,
    ...providedTheme
  });
  const value = { theme, changeTheme };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeContext, ThemeProvider, useTheme };
