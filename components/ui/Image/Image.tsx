import { useState, forwardRef } from 'react'
import { default as NextImage, ImageProps } from 'next/image'
import cn from 'classnames'

const Image = forwardRef<HTMLImageElement, ImageProps>(({ className, alt, ...props }, ref) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <NextImage
      className={cn('image', { ['loaded']: loaded }, className)}
      alt={alt}
      onLoadingComplete={() => setLoaded(true)}
      ref={ref} // Forward ref to the DOM element
      priority
      {...props}
    />
  )
})

Image.displayName = 'Image' // Needed for forwardRef components

export default Image
