import {
  CaptivatingExperiences,
  ComplexProblems,
  Teamwork,
} from "@/components/ListCard/ListCard";
import { ProcessType } from "@/types/processTypes";

const processes: ProcessType[] = [
  {
    id: "complex-problems",
    text: "Tearing down complex problems and building long-lasting, modern solutions that help companies grow.",
    card: ComplexProblems,
  },
  {
    id: "captivating-experiences",
    text: "Operating at the crossroads of creativity and user experience, passionate about providing captivating experiences.",
    card: CaptivatingExperiences,
  },
  {
    id: "team-work",
    text: "Working with incredible people and maintaining clear communication to improve the overall quality of the deliverable.",
    card: Teamwork,
  },
];
export default processes;
