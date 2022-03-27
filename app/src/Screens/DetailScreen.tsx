import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Field } from '../Components'
import { MainNavigatorParamList } from '../Navigators/MainNavigator'
import { Message } from '../Types'
import Utils from '../Utils'

type Props = NativeStackScreenProps<MainNavigatorParamList, 'Detail'>

function DetailScreen({ navigation }: Props) {
  const { t } = useTranslation()

  const currentMessage: Message = {
    id: 0,
    timestamp: 1648410775,
    subject: 'Assunto 01',
    detail: 'Detalhes da mensagem para ver como fica quando tiver muita',
    isRead: false
  }

  useEffect(() => {
    navigation.setOptions({
      title: currentMessage.subject
    })
  }, [currentMessage.subject])

  return (
    <Container>
      <Field name={t('date')} value={Utils.formatDate(currentMessage.timestamp)} />

      <Field name={t('detail')} value={currentMessage.detail} />
    </Container>
  )
}

export default DetailScreen