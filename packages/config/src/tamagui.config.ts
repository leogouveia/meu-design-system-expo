import { createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";

// Cria a configuração do Tamagui estendendo a padrão
const tamaguiConfig = createTamagui(config);

// Define um tipo para a configuração
export type AppConfig = typeof tamaguiConfig;

// Estende a interface de configuração customizada do Tamagui
declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default tamaguiConfig;
