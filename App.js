import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@shopify/restyle";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import "react-native-gesture-handler";

import store from "./store";

/* Stacks */
import { ExpenseNavigator } from "./src/money";
import { LoadAssets, theme } from "./src/components";

const AppStack = createStackNavigator();

export default function App() {
  return (
    <Provider {...{ store }}>
      <ThemeProvider {...{ theme }}>
        <LoadAssets>
          <SafeAreaProvider>
            <AppStack.Navigator headerMode="none" initialRouteName="ExpenseTracker">
              <AppStack.Screen
                name="Big Money"
                component={ExpenseNavigator}
              />
            </AppStack.Navigator>
          </SafeAreaProvider>
        </LoadAssets>
        <StatusBar />
      </ThemeProvider>
    </Provider>
  );
}
