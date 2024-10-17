import React, { FC, ReactNode, Children, isValidElement } from 'react'
import { useKeenSlider } from 'keen-slider/react'

type Props = {
  children: ReactNode
}

const Slider: FC<Props> = ({ children }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 8000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <div ref={sliderRef} className="keen-slider" style={{ height: "100%" }} >
    {Children.map(children, (child) => {
      if (isValidElement(child)) {
        return {
          ...child,
          props: {
            ...child.props,
            className: `${
              child.props.className ? `${child.props.className}` : ''
            } keen-slider__slide`,
          },
        }

        // return React.cloneElement(child, {
        //   className: `${
        //     child.props.className ? `${child.props.className}` : ''
        //   } keen-slider__slide`
        // })
      }

      return child
    })}
  </div>
  )
}

export default Slider