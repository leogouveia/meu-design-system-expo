import { Text, View } from "react-native";
import { Card } from "@meu-org/ui";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Card />
    </View>
  );
}
