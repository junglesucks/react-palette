import React, { ReactNode } from "react";
import { PaletteState, usePalette } from "./usePalette";

export type PaletteProps = {
  src: string;
  children(palette: PaletteState): ReactNode;
};

export const Palette: React.FC<PaletteProps> = ({
  src,
  children
}: PaletteProps) => {
  const palette = usePalette(src);

  return <React.Fragment>{children(palette)}</React.Fragment >;
};
