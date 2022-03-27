import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, FontSize, Metrics } from '../Theme'

type Props = {
  subject: string,
  date: string
}

function ListItem({ subject, date }: Props) {
  return (
    <View style={styles.listItem}>
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