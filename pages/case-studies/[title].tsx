import { useRouter } from "next/router";

import { SingleCaseStudyPage } from "@/templates/index";

import useSmoothScroll from "@/hooks/use-smooth-scroll";
import { getCaseStudyById } from "@/mocks/case-studies";


export default function SingleCaseStudy() {
  useSmoothScroll();
  const router = useRouter();

  const caseStudyTitle = router.query.title;
  const caseStudy = getCaseStudyById(caseStudyTitle);

  return (
    <>
      <SingleCaseStudyPage caseStudy={caseStudy} />
    </>
  );
}