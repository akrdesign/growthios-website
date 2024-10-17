import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { AppProps } from 'next/app'
import '@/styles/main.sass'

import "keen-slider/keen-slider.min.css"

gsap.registerPlugin(ScrollTrigger)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
