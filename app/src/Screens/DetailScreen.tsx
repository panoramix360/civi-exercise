import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Field } from '../Components'
import { MainNavigatorParamList } from '../Navigators/MainNavigator'
import { readMessage, selectMessagesState } from '../slices/messagesSlice'
import { useAppDispatch, useAppSelector } from '../store'
import Utils from '../Utils'

type Props = NativeStackScreenProps<MainNavigatorParamList, 'Detail'>

function DetailScreen({ navigation }: Props) {
  const { lastMessageOpened } = useAppSelector(selectMessagesState)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    if (lastMessageOpened != null) {
      navigation.setOptions({
        title: lastMessageOpened.subject
      })
  
      dispatch(readMessage(lastMessageOpened))
    }
  }, [lastMessageOpened?.subject])

  return (
    <Container>
      <Field name={t('date')} value={Utils.formatDate(lastMessageOpened?.timestamp ?? 0)} />

      <Field name={t('detail')} value={lastMessageOpened?.detail ?? ''} />
    </Container>
  )
}

export default DetailScreen