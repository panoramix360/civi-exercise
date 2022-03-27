import React from 'react'
import { Image, ImageResizeMode } from 'react-native'
import { Images } from '../Theme'

type Props = {
  width?: number,
  height?: number,
  isOpen: boolean,
  mode?: ImageResizeMode
}

function EnvelopIcon({ width = 30, height = 30, isOpen = false, mode = 'contain' }: Props) {
  return (
    <Image source={isOpen ? Images.envelopOpen : Images.envelopClosed} style={{ width, height }} resizeMode={mode} />
  )
}

export default EnvelopIcon