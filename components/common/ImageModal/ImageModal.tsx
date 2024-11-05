import { useRef, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/dist/Flip';
import { Image } from '@/components/ui';

type ImageModalProps = {
  images: string[];
  sectionId: string; // Add a unique identifier for each section
};

const ImageModal = ({ images, sectionId }: ImageModalProps) => {
  const [isInModal, setIsInModal] = useState(false);
  const [activeBoxId, setActiveBoxId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleImageClick = (index: number) => {
    const boxId = `${sectionId}-box-${index}`;
    const box = boxRefs.current[index];
    const modal = modalRef.current;
    const overlay = overlayRef.current;

    if (box && modal && overlay) {
      if (isInModal) {
        const state = Flip.getState(box, { props: 'backgroundColor' });
        // Use the specific container for this section
        document.querySelector(`#${boxId}-container`)?.appendChild(box);
        setIsInModal(false);
        setActiveBoxId(null);

        box.classList.add('box-content');

        gsap.to([modal, overlay], {
          autoAlpha: 0,
          ease: 'power1.inOut',
          duration: 0.35,
        });

        Flip.from(state, {
          duration: 0.7,
          ease: 'power1.inOut',
          absolute: true,
          onComplete: () => {
            gsap.set(box, { zIndex: 'auto' });
          },
        });

        gsap.set(box, { zIndex: 1002 });
      } else {
        const state = Flip.getState(box, { props: 'width, height' });
        modal.appendChild(box);
        setIsInModal(true);
        setActiveBoxId(boxId);

        gsap.set(modal, { autoAlpha: 1 });

        Flip.from(state, {
          duration: 0.7,
          ease: 'power1.inOut',
        });

        gsap.to(overlay, { autoAlpha: 0.65, duration: 0.35 });
      }
    }
  };

  return (
    <div className="image__modal__container">
      {images.map((src, index) => {
        const boxId = `${sectionId}-box-${index}`;
        return (
          <div
            id={`${boxId}-container`}
            className="box-container"
            key={boxId}
          >
            <div
              className={`box ${boxId}`}
              ref={(el) => (boxRefs.current[index] = el)}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                className="box-content"
                width={500}
                height={500}
              />
            </div>
          </div>
        );
      })}
      <div className="modal" ref={modalRef}>
        <div className="overlay" ref={overlayRef}></div>
      </div>
    </div>
  );
};

export default ImageModal;