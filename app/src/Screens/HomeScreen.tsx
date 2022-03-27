import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FlatList } from 'react-native'
import { Container, ListItem } from '../Components'
import { MainNavigatorParamList } from '../Navigators/MainNavigator'
import { Message } from '../Types'
import Utils from '../Utils'

type Props = NativeStackScreenProps<MainNavigatorParamList, 'Home'>

function HomeScreen({ }: Props) {
  const mockList: Array<Message> = [
    { id: 0, timestamp: 1648410775, subject: 'Assunto 01', detail: 'Detalhes da mensagem', isRead: false },
    { id: 1, timestamp: 16484107752, subject: 'Assunto 02', detail: 'Detalhes da mensagem', isRead: true }
  ]

  const _renderItem = ({ item }: { item: Message }) => (
    <ListItem subject={item.subject} date={Utils.formatDate(item.timestamp)} isRead={item.isRead} />
  )

  return (
    <Container>
      <FlatList
        keyExtractor={(item, _) => item.id.toString()}
        data={mockList}
        renderItem={_renderItem}
      />
    </Container>
  )
}

export default HomeScreen