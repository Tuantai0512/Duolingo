import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Section1 from "./_component/section1";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section>
        <Section1 
          title="free. fun. effective."
          content={<span>
            Learning with Duolingo is fun, and <Link href="#">research shows that it works!</Link> With quick, 
            bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.
          </span>}
          image="/images/landing_page1.svg"
        />
      </section>
    </main>
  );
}
