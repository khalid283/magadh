import React from 'react';
import { useTheme } from '@contexts';

export const Button = ({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  const { theme } = useTheme();

  return <button onClick={onClick}>{children}</button>;
};

export default Button;
