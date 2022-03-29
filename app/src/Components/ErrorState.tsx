import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, StyleSheet, Text, View } from 'react-native'
import { FontSize } from '../Theme'

type Props = {
  error: string,
  onTryAgain: () => void
}

function ErrorState({ error, onTryAgain }: Props) {
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
      <Button title={t('tryAgain')} onPress={onTryAgain} />
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

export default ErrorState