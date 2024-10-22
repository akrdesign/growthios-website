import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { AppProps } from 'next/app'
import CustomCursor from '@/components/common/CustomCursor'

import '@/styles/main.sass'

import 'keen-slider/keen-slider.min.css'
import 'react-toastify/dist/ReactToastify.css';

gsap.registerPlugin(ScrollTrigger)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  )
}
