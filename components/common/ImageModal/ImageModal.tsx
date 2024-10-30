import { useRef, useState } from 'react'
import gsap from 'gsap'
import { Flip } from 'gsap/dist/Flip'
import { Image } from '@/components/ui'

type ImageModalType = {
  images: string[]
}

const ImageModal = ({ images }: ImageModalType) => {
  const [isInModal, setIsInModal] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  // Create a ref array for all images
  const boxRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleImageClick = (index: number) => {
    const box = boxRefs.current[index]
    const modal = modalRef.current
    const overlay = overlayRef.current

    if (box && modal && overlay) { // Ensure refs are defined
      if (isInModal) {
        const state = Flip.getState(box, { props: 'backgroundColor' })
        document.querySelector(`.box-${index}`)?.appendChild(box)
        setIsInModal(false)

        // Add the 'box-content' class back when the image moves out of the modal
        box.classList.add('box-content')

        gsap.to([modal, overlay], {
          autoAlpha: 0,
          ease: 'power1.inOut',
          duration: 0.35,
        })
        Flip.from(state, {
          duration: 0.7,
          ease: 'power1.inOut',
          absolute: true,
          onComplete: () => {
            gsap.set(box, { zIndex: 'auto' })
            console.log('hello')
          },
        })
        gsap.set(box, { zIndex: 1002 })
      } else {
        const state = Flip.getState(box, { props: 'width, height' })
        modal.appendChild(box)
        setIsInModal(true)

        gsap.set(modal, { autoAlpha: 1 })
        Flip.from(state, {
          duration: 0.7,
          ease: 'power1.inOut',
        })
        gsap.to(overlay, { autoAlpha: 0.65, duration: 0.35 })
      }
    }
  }

  return (
    <div className="image__modal__container">
      {images.map((src, index) => (
        <div className={`box box-${index}`} key={index}>
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            className="box-content"
            width={500}
            height={500}
            ref={(el) => (boxRefs.current[index] = el)} // Assign ref to each image
            onClick={() => handleImageClick(index)} // Pass the index to handleImageClick
          />
        </div>
      ))}
      <div className="modal" ref={modalRef}>
        <div className="overlay" ref={overlayRef}></div>
      </div>
    </div>
  )
}

export default ImageModal
