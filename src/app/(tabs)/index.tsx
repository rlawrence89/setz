import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text className="text-4xl">
          Edit src/app/index.tsx to edit this screen.
        </Text>
      </View>
    </SafeAreaView>
  );
}
