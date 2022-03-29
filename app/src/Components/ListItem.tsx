import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors, FontSize, Metrics } from '../Theme'
import { Message } from '../Types'
import Utils from '../Utils'
import EnvelopIcon from './EnvelopIcon'

type Props = {
  message: Message,
  onPress: (message: Message) => void
}

function ListItem({ message, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => onPress(message)}>
      <EnvelopIcon isOpen={message.isRead} />
      <Text style={styles.subject}>{message.subject}</Text>
      <Text style={styles.date}>{Utils.formatDate(message.timestamp)}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: Metrics.regular,
    margin: Metrics.tiny,
    backgroundColor: Colors.white,
    borderRadius: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2
  },
  subject: {
    fontSize: FontSize.regular
  },
  date: {
    fontSize: FontSize.small
  }
})

export default ListItem