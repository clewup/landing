import PageWrapper from "@/components/atoms/PageWrapper/PageWrapper";
import StaggeredText from "@/lib/framer-motion/components/StaggeredText";

export default function Home() {
  return (
    <PageWrapper className="flex flex-col gap-10 px-10">
      <div className="text-4xl md:text-9xl mt-10 md:mt-14 semi">
        <StaggeredText className="font-bold stroke-text">
          I&apos;M CLEWUP,
        </StaggeredText>
        <StaggeredText delay={0.6}>SOFTWARE DEVELOPER.</StaggeredText>
      </div>
    </PageWrapper>
  );
}
