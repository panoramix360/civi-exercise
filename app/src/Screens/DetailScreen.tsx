import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Field } from '../Components'
import MessageContext from '../Context'
import { MainNavigatorParamList } from '../Navigators/MainNavigator'
import Utils from '../Utils'

type Props = NativeStackScreenProps<MainNavigatorParamList, 'Detail'>

function DetailScreen({ navigation }: Props) {
  const { state, dispatch } = useContext(MessageContext)
  const { t } = useTranslation()

  useEffect(() => {
    navigation.setOptions({
      title: state.lastMessageOpened?.subject
    })
  }, [state.lastMessageOpened?.subject])

  return (
    <Container>
      <Field name={t('date')} value={Utils.formatDate(state.lastMessageOpened?.timestamp ?? 0)} />

      <Field name={t('detail')} value={state.lastMessageOpened?.detail ?? ''} />
    </Container>
  )
}

export default DetailScreen