import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { Container, ErrorState, ListItem, Loading } from '../Components'
import { MainNavigatorParamList } from '../Navigators/MainNavigator'
import { fetchMessagesAsync, selectMessagesState, selectRecentMessages, setLastMessageOpened } from '../slices/messagesSlice'
import { useAppDispatch, useAppSelector } from '../store'
import { Message } from '../Types'

type Props = NativeStackScreenProps<MainNavigatorParamList, 'Home'>

function HomeScreen({ navigation }: Props) {
  const dispatch = useAppDispatch()

  const { loading, error } = useAppSelector(selectMessagesState)
  const messages = useAppSelector(selectRecentMessages)

  useEffect(() => {
    dispatch(fetchMessagesAsync())
  }, [])

  const _renderItem = ({ item }: { item: Message }) => (
    <ListItem
      message={item}
      onPress={(message: Message) => onItemClick(message)}
    />
  )

  const onItemClick = (message: Message) => {
    dispatch(setLastMessageOpened(message))
    navigation.navigate('Detail')
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  if (error != null) {
    return (
      <ErrorState
        error={error}
        onTryAgain={() => dispatch(fetchMessagesAsync())}
      />
    )
  }

  return (
    <Container>
      <FlatList
        keyExtractor={(item, _) => item.id.toString()}
        data={messages}
        renderItem={_renderItem}
        onRefresh={() => dispatch(fetchMessagesAsync())}
        refreshing={loading}
      />
    </Container>
  )
}

export default HomeScreen