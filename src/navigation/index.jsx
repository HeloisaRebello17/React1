
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormularioScreen } from "../screen/FormularioScreen";
import { HomeScreen } from "../screen/HomeScreen";

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Formulário" component={FormularioScreen} />
    </Stack.Navigator>
  );
};



