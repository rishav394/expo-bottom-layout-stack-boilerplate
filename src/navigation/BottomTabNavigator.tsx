import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import AccountMainScreen from "../screens/TabOneScreen";
import LogsMainScreen from "../screens/TabTwoScreen";
import {
  AccountTabParamList,
  BottomTabParamList,
  LogTabParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="AccountTab"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="AccountTab"
        component={AccountTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="logo-steam" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="LogTab"
        component={LogTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code-working" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<AccountTabParamList>();

function AccountTabNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="AccountMainScreen"
        component={AccountMainScreen}
        options={{ headerTitle: "Account Info" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<LogTabParamList>();

function LogTabNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="LogsMainScreen"
        component={LogsMainScreen}
        options={{ headerTitle: "Logs" }}
      />
    </TabTwoStack.Navigator>
  );
}
