import { useState } from 'react'
import { default as NextImage, ImageProps } from 'next/image'
import cn from 'classnames'

const Image = ({ className, ...props }: ImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <NextImage
      className={cn('image', { ['loaded']: loaded }, className)}
      onLoadingComplete={() => setLoaded(true)}
      {...props}
    />
  )
}

export default Image
