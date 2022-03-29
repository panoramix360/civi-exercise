import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DetailScreen, HomeScreen } from '../Screens'
import { useTranslation } from 'react-i18next'

export type MainNavigatorParamList = {
  Home: undefined,
  Detail: undefined
}

const Stack = createNativeStackNavigator<MainNavigatorParamList>()

function MainNavigator() {
  const { t } = useTranslation()

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: t('homeTitle') }} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default MainNavigator