import CaptivatingExperiences from "@/components/ListCard/variants/CaptivatingExperiences";
import Collaboration from "@/components/ListCard/variants/Collaboration";
import ComplexProblems from "@/components/ListCard/variants/ComplexProblems";
import Maintenance from "@/components/ListCard/variants/Maintenance";
import { ProcessType } from "@/types/processTypes";

const processes: ProcessType[] = [
  {
    id: "complex-problems",
    text: "Tearing down complex problems and building long-lasting, modern solutions that help companies grow.",
    card: ComplexProblems,
  },
  {
    id: "captivating-experiences",
    text: "Operating at the crossroads of creativity and user experience with a passion for providing captivating experiences.",
    card: CaptivatingExperiences,
  },
  {
    id: "collaboration",
    text:
      "\n" +
      "Collaborating with exceptional individuals and fostering transparent communication to enhance the overall quality of the deliverable.",
    card: Collaboration,
  },
  {
    id: "maintenance",
    text: "Offering a holistic software maintenance solution to ensure ongoing alignment with customer requirements.",
    card: Maintenance,
  },
];
export default processes;
