import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors, FontSize, Metrics } from '../Theme'

type Props = {
  name: string,
  value: string
}

function Field({ name, value }: Props) {
  return (
    <View style={styles.field}>
      <Text style={styles.name}>{name}</Text>
      
      <View style={styles.whiteBox}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: Metrics.tiny
  },
  whiteBox: {
    flex: 1,
    padding: Metrics.regular,
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
  name: {
    fontSize: FontSize.small,
    padding: Metrics.regular,
    fontWeight: 'bold'
  },
  value: {
    fontSize: FontSize.regular
  }
})

export default Field