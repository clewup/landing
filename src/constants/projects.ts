import { ProjectType } from "@/types/projectTypes";

const projects: ProjectType[] = [
  {
    name: "lockr",
    description:
      "A centralised, passwordless authentication service designed to seamlessly integrate with other applications and securely store user information.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1687560986/lockr_card_lfxogr.jpg",
    website: "https://www.lockr.clewup.co.uk",
  },
  {
    name: "blog",
    description:
      "An intuitive, user-friendly content management system that empowers individuals to create and engage with blog posts.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1687560986/blog_card_xmojec.jpg",
    website: "https://www.blog.clewup.co.uk",
  },
  {
    name: "store",
    description:
      "A dynamic ecommerce website with seamless cart and checkout functionalities, providing a convenient and secure online shopping experience.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1687560986/store_card_szd3re.jpg",
    website: "https://www.store.clewup.co.uk",
  },
];

export default projects;
