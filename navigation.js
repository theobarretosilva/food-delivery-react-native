import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen/RestaurantScreen";
import React from "react";
import CartScreen from "./screens/CartScreen/CartScreen";
import OrderPreparingScreen from "./screens/OrderPreparingScreen/OrderPreparingScreen";
import DeliveryScreen from "./screens/DeliveryScreen/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                <Stack.Screen name="Cart" options={{presentation: "modal"}} component={CartScreen} />
                <Stack.Screen name="OrderPreparing" options={{presentation: "fullScreenModal"}} component={OrderPreparingScreen} />
                <Stack.Screen name="Delivery" options={{presentation: "fullScreenModal"}} component={DeliveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}