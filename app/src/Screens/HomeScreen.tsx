import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useContext, useEffect } from 'react'
import { FlatList } from 'react-native'
import { Container, ErrorState, ListItem, Loading } from '../Components'
import MessageContext from '../Context'
import { fetchMessages } from '../Context/actions'
import { MainNavigatorParamList } from '../Navigators/MainNavigator'
import { Message } from '../Types'
import Utils from '../Utils'

type Props = NativeStackScreenProps<MainNavigatorParamList, 'Home'>

function HomeScreen({ }: Props) {
  const { state, dispatch } = useContext(MessageContext)

  useEffect(() => {
    dispatch(fetchMessages())
  }, [])

  const _renderItem = ({ item }: { item: Message }) => (
    <ListItem subject={item.subject} date={Utils.formatDate(item.timestamp)} isRead={item.isRead} />
  )

  if (state.loading) {
    return (
      <Loading />
    )
  }

  if (state.error != null) {
    return (
      <ErrorState error={state.error} />
    )
  }

  return (
    <Container>
      <FlatList
        keyExtractor={(item, _) => item.id.toString()}
        data={state.messages}
        renderItem={_renderItem}
      />
    </Container>
  )
}

export default HomeScreen