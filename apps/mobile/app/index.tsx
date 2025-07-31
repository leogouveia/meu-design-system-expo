import { StatusBar, Text, View } from "react-native";
import { Card, MyButton, ButtonText } from "@meu-org/ui";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { YStack, H1, Paragraph } from "tamagui";

export default function Index() {
  return (
    <SafeAreaProvider>
      <YStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        padding="$4"
        space="$4"
        backgroundColor="$background"
      >
        <H1>Bem-vindo ao seu Design System</H1>
        <Paragraph textAlign="center">
          Este é um app Expo usando componentes da sua biblioteca `@meu-org/ui`.
        </Paragraph>

        <Card elevated width="100%" maxWidth={500}>
          <H1>Isto é um Card</H1>
          <Paragraph>
            Ele tem estilos padrão e uma variante "elevated".
          </Paragraph>
        </Card>

        <MyButton
          variant="primary"
          onPress={() => alert("Botão Primário Pressionado!")}
        >
          <ButtonText variant="primary">Botão Primário</ButtonText>
        </MyButton>

        <MyButton
          variant="secondary"
          onPress={() => alert("Botão Secundário Pressionado!")}
        >
          <ButtonText variant="secondary">Botão Secundário</ButtonText>
        </MyButton>

        <StatusBar style="auto" />
      </YStack>
    </SafeAreaProvider>
  );
}
