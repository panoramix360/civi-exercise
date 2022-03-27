import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DetailScreen, HomeScreen } from '../Screens'

export type MainNavigatorParamList = {
  Home: undefined,
  Detail: undefined
}

const Stack = createNativeStackNavigator<MainNavigatorParamList>()

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator