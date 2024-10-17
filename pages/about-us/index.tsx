import useSmoothScroll from "@/hooks/use-smooth-scroll";
import { AboutPage } from "@/templates/index";


export default function About() {
  useSmoothScroll();

  return (
    <>
      <AboutPage />
    </>
  );
}