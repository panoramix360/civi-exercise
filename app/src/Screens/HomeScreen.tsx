import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import { Container } from '../Components'
import { MainNavigatorParamList } from '../Navigators/MainNavigator'

type Props = NativeStackScreenProps<MainNavigatorParamList, 'Home'>

function HomeScreen({}: Props) {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  )
}

export default HomeScreen