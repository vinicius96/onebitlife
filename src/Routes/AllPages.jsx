import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Start from '../Pages/Start'

const Stack = createStackNavigator();

export default function AllPages(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Start" component={Start} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}