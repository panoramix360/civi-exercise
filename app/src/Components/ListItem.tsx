import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, FontSize, Metrics } from '../Theme'
import EnvelopIcon from './EnvelopIcon'

type Props = {
  subject: string,
  date: string,
  isRead: boolean
}

function ListItem({ subject, date, isRead }: Props) {
  return (
    <View style={styles.listItem}>
      <EnvelopIcon isOpen={isRead} />
      <Text style={styles.subject}>{subject}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
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