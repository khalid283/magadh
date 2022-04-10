import { ThemeProvider } from '@contexts';
import theme from '@theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'palette',
      items: ['light', 'dark'],
      showName: true
    }
  }
};

export const decorators = [
  (Story, context) => {
    const getTheme = () => {
      if (context.globals.theme === 'light') {
        return theme.light;
      }
      if (context.globals.theme === 'dark') {
        return theme.dark;
      }
    };
    return (
      <ThemeProvider providedTheme={getTheme()}>
        <Story {...context} />
      </ThemeProvider>
    );
  }
];
