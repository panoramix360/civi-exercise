import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Text } from 'react-native'
import { Container } from '../Components'
import { MainNavigatorParamList } from '../Navigators/MainNavigator'

type Props = NativeStackScreenProps<MainNavigatorParamList, 'Detail'>

function DetailScreen({}: Props) {
  return (
    <Container>
      <Text>Detail</Text>
    </Container>
  )
}

export default DetailScreen