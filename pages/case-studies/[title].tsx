import { useRouter } from "next/router";

import { SingleCaseStudyPage } from "@/templates/index";

import useSmoothScroll from "@/hooks/use-smooth-scroll";
import { getCaseStudyById } from "@/mocks/case-studies";
import NotFound from "../404";


export default function SingleCaseStudy() {
  useSmoothScroll();
  const router = useRouter();

  // Wait for router to be ready before accessing query params
  if (!router.isReady) return null;

  const caseStudyTitle = router.query.title;
  const caseStudy = getCaseStudyById(caseStudyTitle);

  if (!caseStudy) {
    return <NotFound />;
  }

  return (
    <>
      <SingleCaseStudyPage caseStudy={caseStudy} />
    </>
  );
}