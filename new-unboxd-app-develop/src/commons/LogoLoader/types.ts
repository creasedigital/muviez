export const LogoSizes = {
  sm: 25,
  md: 50,
  lg: 100,
};

export type Size = keyof typeof LogoSizes;

export type LogoProps = {
  size?: Size;
};