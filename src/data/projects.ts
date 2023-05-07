import { Project } from "@/types/project";

const dummyImage =
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2043&q=80";

const projects: Project[] = [
  {
    name: "auth",
    description: "",
    image: dummyImage,
    website: "https://www.auth.clewup.co.uk",
  },
  {
    name: "blog",
    description: "",
    image: dummyImage,
    website: "https://www.blog.clewup.co.uk",
  },
  {
    name: "store",
    description: "",
    image: dummyImage,
    website: "https://www.store.clewup.co.uk",
  },
];

export default projects;
