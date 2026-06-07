import type { ThemeMode } from "../../types/theme";

export const scenePalettes = {
  dark: {
    fog: "#070807",
    text: "#e9f7e8",
    moduleBase: "#11170f",
    engineBase: "#171d15",
    engineMid: "#253021",
    engineTop: "#10130f",
    engineEmissive: "#284025",
    inactivePod: "#151a14",
    grid: "#254341",
    directional: "#fff4da",
    ambientIntensity: 0.7,
    directionalIntensity: 1.35,
    cyanLightIntensity: 3.2,
    pinkLightIntensity: 2.4
  },
  light: {
    fog: "#f4f7ed",
    text: "#172017",
    moduleBase: "#f6fbf0",
    engineBase: "#d8e8d1",
    engineMid: "#c4dcc2",
    engineTop: "#edf5e9",
    engineEmissive: "#b8d8b7",
    inactivePod: "#e8f1e3",
    grid: "#9db4aa",
    directional: "#fff2c6",
    ambientIntensity: 1.1,
    directionalIntensity: 1.6,
    cyanLightIntensity: 1.9,
    pinkLightIntensity: 1.35
  }
} satisfies Record<
  ThemeMode,
  {
    fog: string;
    text: string;
    moduleBase: string;
    engineBase: string;
    engineMid: string;
    engineTop: string;
    engineEmissive: string;
    inactivePod: string;
    grid: string;
    directional: string;
    ambientIntensity: number;
    directionalIntensity: number;
    cyanLightIntensity: number;
    pinkLightIntensity: number;
  }
>;

export function getScenePalette(theme: ThemeMode) {
  return scenePalettes[theme];
}
