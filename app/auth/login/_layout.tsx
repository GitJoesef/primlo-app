import { Stack } from 'expo-router/stack';

export default function LoginLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F8F8F8',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
