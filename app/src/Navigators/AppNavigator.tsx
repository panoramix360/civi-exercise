import React from 'react'
import { ColorSchemeName, SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DetailScreen, HomeScreen } from '../Screens'

const Stack = createNativeStackNavigator()

function AppNavigator() {
  const colorScheme: ColorSchemeName = useColorScheme()
  const isDarkMode: boolean = colorScheme === 'dark'

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

export default AppNavigator