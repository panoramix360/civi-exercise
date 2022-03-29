import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './Navigators/AppNavigator'
import './i18n'
import { MessageContextProvider } from './Context'

function App() {
  return (
    <NavigationContainer>
      <MessageContextProvider>
        <AppNavigator />
      </MessageContextProvider>
    </NavigationContainer>
  )
}

export default App
