import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text } from 'react-native'
import { Container } from '../Components'
import Logo from '../Components/Logo'
import { AppNavigatorParamList } from '../Navigators/AppNavigator'
import { Colors, FontSize } from '../Theme'

type Props = NativeStackScreenProps<AppNavigatorParamList, 'Startup'>

function StartupScreen({ navigation }: Props) {
  const { t } = useTranslation()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 1000)
    )

    navigation.reset({
      index: 0,
      routes: [ { name: 'Main' } ]
    })
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Container style={styles.container}>
      <Logo />
      <Text style={styles.text}>{t('welcome')}</Text>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary
  },
  text: {
    fontSize: FontSize.regular
  }
})

export default StartupScreen