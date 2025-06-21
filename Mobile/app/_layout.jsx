import { Stack } from "expo-router";
import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot } from "expo-router";

export default function RootLayout() {
  // return <Stack screenOptions={{ headerShown: false }} />;
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        {/* <Stack screenOptions={{ headerShown: false }} /> */}
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}
