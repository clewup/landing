import { ProjectType } from "@/types/projectTypes";

const projects: ProjectType[] = [
  {
    name: "lockr",
    description:
      "A centralised, passwordless authentication service designed to seamlessly integrate with other applications and securely store user information.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1686607599/Screenshot_2023-06-12_at_18.05.23_nrfrqg.png",
    website: "https://www.lockr.clewup.co.uk",
  },
  {
    name: "blog",
    description:
      "An intuitive, user-friendly content management system that empowers individuals to create and engage with blog posts.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1686607600/Screenshot_2023-06-12_at_18.06.02_np7oni.png",
    website: "https://www.blog.clewup.co.uk",
  },
  {
    name: "store",
    description:
      "A dynamic ecommerce website with seamless cart and checkout functionalities, providing a convenient and secure online shopping experience.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1686607600/Screenshot_2023-06-12_at_18.05.05_qkruqv.png",
    website: "https://www.store.clewup.co.uk",
  },
];

export default projects;
