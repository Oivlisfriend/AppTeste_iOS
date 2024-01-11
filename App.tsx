import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'react-native';

import GetStartedScreen from "./src/Screems/GetStartedScreen";
import HomeScreen from "./src/Screems/HomeScreen";
import MunicipeScreen from "./src/Screems/MunicipeScreen";

const Stack = createStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        hidden={false}
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="GetStartedScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="MunicipeScreen" component={MunicipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider >
  );
}
