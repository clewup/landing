import { ProjectType } from "@/types/projectTypes";

const projects: ProjectType[] = [
  {
    name: "daily blog",
    description:
      "An intuitive, user-friendly content management system that empowers individuals to create and engage with blog posts.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1687561987/blog_card_ulmc7v.jpg",
    website: "https://www.blog.clewup.co.uk",
  },
  {
    name: "lockr",
    description:
      "A centralised, passwordless authentication service designed to seamlessly integrate with other applications and securely store user information.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1687561987/lockr_card_r76yat.jpg",
    website: "https://www.lockr.clewup.co.uk",
  },
  {
    name: "store",
    description:
      "A dynamic ecommerce website with seamless cart and checkout functionalities, providing a convenient and secure online shopping experience.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1687561987/store_card_h9ygbo.jpg",
    website: "https://www.store.clewup.co.uk",
  },
];

export default projects;
