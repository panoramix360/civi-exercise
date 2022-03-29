import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontSize } from '../Theme'

type Props = {
  error: string
}

function Loading({ error }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: FontSize.regular
  }
}) 

export default Loading