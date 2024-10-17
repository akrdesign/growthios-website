import useSmoothScroll from "@/hooks/use-smooth-scroll";
import { HomePage } from "@/templates/index";


export default function Home() {
  useSmoothScroll();

  return (
    <>
      <HomePage />
    </>
  );
}
