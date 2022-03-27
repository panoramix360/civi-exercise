import React from 'react'
import { Image, ImageResizeMode } from 'react-native'
import { Images } from '../Theme'

type Props = {
  width?: number,
  height?: number,
  mode?: ImageResizeMode
}

function Logo({ width = 200, height = 200, mode = 'contain' }: Props) {
  return (
    <Image source={Images.logo} style={{ width, height }} resizeMode={mode} />
  )
}

export default Logo