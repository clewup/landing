import { Skill } from "@/types/skill";
import {
  CircleStackIcon,
  PuzzlePieceIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const skills: Skill[] = [
  {
    title: "UI Development",
    icon: PuzzlePieceIcon,
    description:
      "I create fun to use, accessible and effective UIs. Ensuring that all users are able to use the application through cross-platform, responsive design.",
  },
  {
    title: "API Development",
    icon: CircleStackIcon,
    description:
      "I strengthen great looking websites with scalable, efficient and easy-to-use APIs. Secured using industry standards and keeping sensitive information safe.",
  },
  {
    title: "Cloud Computing",
    icon: CloudIcon,
    description:
      "I work with cloud providers such as Azure and Vercel to create applications that stay online 24/7.",
  },
];

export default skills;
