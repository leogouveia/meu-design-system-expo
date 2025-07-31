import { Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "@meu-org/config";

export default function RootLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack />
    </TamaguiProvider>
  );
}
