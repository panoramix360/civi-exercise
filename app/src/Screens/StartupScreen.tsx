import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Container } from '../Components'
import Logo from '../Components/Logo'
import { AppNavigatorParamList } from '../Navigators/AppNavigator'

type Props = NativeStackScreenProps<AppNavigatorParamList, 'Startup'>

function StartupScreen({ navigation }: Props) {
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 1000)
    )

    navigation.navigate('Main')
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Container style={styles.container}>
      <Logo />
      <Text>Bem vindo!</Text>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fef231'
  }
})

export default StartupScreen