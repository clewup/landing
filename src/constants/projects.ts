import { ProjectType } from "@/types/projectTypes";

const projects: ProjectType[] = [
  {
    name: "store",
    description:
      "A dynamic ecommerce website with seamless cart and checkout functionalities, providing a convenient and secure online shopping experience.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1687730373/store_macbook_dngcxg.png",
    website: "https://www.store.clewup.co.uk",
    background: "bg-[#BFFF00]",
    features: ["Ecommerce", "Stock Management", "Checkout", "Filters"],
    technologies: ["Next.js", "TypeScript", "Stripe", "Postgres"],
  },
  {
    name: "lockr",
    description:
      "A centralised, passwordless authentication service designed to seamlessly integrate with other applications and securely store user information.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1687730373/lockr_macbook_onnvm3.png",
    website: "https://www.lockr.clewup.co.uk",
    background: "bg-[#661AE6]",
    features: [
      "RBAC",
      "PKCE",
      "Passwordless Authentication",
      "Third Party Integration",
      "Account Management",
    ],
    technologies: ["Next.js", "TypeScript", "Next-Auth", "Postgres"],
  },
  {
    name: "blog",
    description:
      "An intuitive, user-friendly content management system that empowers individuals to create and engage with blog posts.",
    category: "web application",
    image:
      "https://res.cloudinary.com/dliog6kq6/image/upload/v1687730374/blog_macbook_hqeml1.png",
    website: "https://www.blog.clewup.co.uk",
    background: "bg-[#0096FF]",
    features: ["CMS", "Social Networking", "Filters"],
    technologies: ["Next.js", "TypeScript", "Postgres"],
  },
];

export default projects;
