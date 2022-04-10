import { ITheme } from '../types';
import color from './color';

export const dark: ITheme = {
  button: {
    text: color.white,
    background: color.black,
    border: color.teal,
    primary: {
      text: '#fff',
      background: '#000',
      border: '#000'
    },
    outline: {
      text: '#000',
      background: 'transparent',
      border: '#fff'
    }
  }
};
