import Hero from "@/components/atoms/Hero/Hero";
import InfiniteCarousel, {
  CarouselItem,
} from "@/components/atoms/InfiniteCarousel/InfiniteCarousel";
import PageWrapper from "@/components/atoms/PageWrapper/PageWrapper";
import projects from "@/data/projects";

export default function Home() {
  const projectData: CarouselItem[] = projects.map((project) => ({
    label: project.name,
    description: project.description,
    image: project.image,
    url: project.url,
  }));

  return (
    <PageWrapper className="flex flex-col gap-10">
      <Hero />

      <section id="projects">
        <InfiniteCarousel items={projectData} />
      </section>
    </PageWrapper>
  );
}
