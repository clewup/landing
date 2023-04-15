import Heading from "@/components/atoms/Heading/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <main className={"flex justify-center items-center h-screen"}>
        <span className={"flex items-center justify-center"}>
            <Image src={'/logo.png'} alt={'logo'} height={200} width={200}/>
            <Heading title={'under construction'} subtitle={'check back soon'}/>
        </span>
    </main>
  )
}
