import useSmoothScroll from "@/hooks/use-smooth-scroll";
import { CaseStudiesPage } from "@/templates/index";


export default function CaseStudies() {
  useSmoothScroll();

  return (
    <>
      <CaseStudiesPage />
    </>
  );
}