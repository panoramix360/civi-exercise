import React, { ReactNode } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

type Props = {
  style?: StyleProp<ViewStyle>,
  children: ReactNode
}

function Container({ style, children }: Props) {
  return (
    <View style={[ style, styles.container ]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
}) 

export default Container