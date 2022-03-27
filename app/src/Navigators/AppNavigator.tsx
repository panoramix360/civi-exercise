import React from 'react'
import { ColorSchemeName, SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StartupScreen } from '../Screens'
import MainNavigator, { MainNavigatorParamList } from './MainNavigator'

export type AppNavigatorParamList = {
  Startup: undefined,
  Main: MainNavigatorParamList
}

const Stack = createNativeStackNavigator<AppNavigatorParamList>()

function AppNavigator() {
  const colorScheme: ColorSchemeName = useColorScheme()
  const isDarkMode: boolean = colorScheme === 'dark'

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />

      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Startup">
        <Stack.Screen name="Startup" component={StartupScreen} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

export default AppNavigator