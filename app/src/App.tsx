import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './Navigators/AppNavigator'
import './i18n'
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NavigationContainer>
  )
}

export default App
