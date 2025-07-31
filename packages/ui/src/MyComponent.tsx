import { GetProps, Paragraph, YStack, styled } from "tamagui";

// Define um componente de Card estilizado
export const Card = styled(YStack, {
  name: "Card",
  padding: "$4",
  backgroundColor: "$background",
  borderRadius: "$4",
  borderWidth: 1,
  borderColor: "$borderColor",
  variants: {
    elevated: {
      true: {
        shadowColor: "$shadowColor",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
      },
    },
  } as const,
});

export type CardProps = GetProps<typeof Card>;

// Define um componente de Botão estilizado
export const MyButton = styled(YStack, {
  name: "MyButton",
  tag: "button",
  paddingVertical: "$2",
  paddingHorizontal: "$4",
  backgroundColor: "$blue10",
  borderRadius: "$3",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  hoverStyle: { backgroundColor: "$blue9" },
  pressStyle: { backgroundColor: "$blue8" },
  variants: {
    variant: {
      primary: { backgroundColor: "$blue10" },
      secondary: { backgroundColor: "$gray10" },
    },
  } as const,
});

export const ButtonText = styled(Paragraph, {
  color: "$color",
  fontSize: "$4",
  fontWeight: "600",
  variants: {
    variant: {
      primary: { color: "white" },
      secondary: { color: "white" },
    },
  } as const,
});

export type MyButtonProps = GetProps<typeof MyButton>;
