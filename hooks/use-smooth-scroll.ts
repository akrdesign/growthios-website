import Lenis from 'lenis'
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useSmoothScroll = () => {
  const [lenis, setLenis] = useState<Lenis | null>()

  const reqIdRef = useRef<ReturnType<typeof requestAnimationFrame>>()

  useEffect(() => {
    const animate = (time: DOMHighResTimeStamp) => {
      lenis?.raf(time)
      lenis?.on('scroll', () => ScrollTrigger.update())
      reqIdRef.current = requestAnimationFrame(animate)
    }
    reqIdRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(reqIdRef.current as number)
  }, [lenis])

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 2, //change scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })
    setLenis(lenis)

    // lenis.on('scroll', () => ScrollTrigger.update())

    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [])
}

export default useSmoothScroll