import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[70px]">
      <div className="flex items-center flex-row gap-[80px] justify-end mx-auto my-0 px-0 py-[48px] w-[988px]">
        <Image
          alt="Banner image"
          src={"/images/duo_banner.svg"}
          width={424}
          height={424}
        />
        <div className="flex flex-col items-center">
          <h1 className="font-bold w-[480px] max-w-[480px] text-[32px] text-[#4b4b4b] text-center">The free, fun, and effective way to learn a language!</h1>
          <div className="flex flex-col gap-[12px] max-w-[330px] w-full mt-10">
            <Button>Get Started</Button>
            <Button variant={"ghost"}>I already have an account</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center border border-x-0 border-y-2 border-[#e5e5e5] h-[80px] justify-center px-10 w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2">
            <CarouselItem className="basis-1/6 pl-2">
              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  alt="english flag"
                  src={"/images/english_flag.svg"}
                  width={36}
                  height={28}
                />
                <span className="text-[15px] font-bold tracking-[.8px] uppercase whitespace-nowrap text-[#777777]">English</span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6 pl-2">
              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  alt="Spanish flag"
                  src={"/images/spanish_flag.svg"}
                  width={36}
                  height={28}
                />
                <span className="text-[15px] font-bold tracking-[.8px] uppercase whitespace-nowrap text-[#777777]">Spanish</span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6 pl-2">
              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  alt="French flag"
                  src={"/images/french_flag.svg"}
                  width={36}
                  height={28}
                />
                <span className="text-[15px] font-bold tracking-[.8px] uppercase whitespace-nowrap text-[#777777]">French</span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6 pl-2">
              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  alt="German flag"
                  src={"/images/german_flag.svg"}
                  width={36}
                  height={28}
                />
                <span className="text-[15px] font-bold tracking-[.8px] uppercase whitespace-nowrap text-[#777777]">German</span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6 pl-2">
              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  alt="Italian flag"
                  src={"/images/italian_flag.svg"}
                  width={36}
                  height={28}
                />
                <span className="text-[15px] font-bold tracking-[.8px] uppercase whitespace-nowrap text-[#777777]">Italian</span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6 pl-2">
              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  alt="Portuguese flag"
                  src={"/images/brazil_flag.svg"}
                  width={36}
                  height={28}
                />
                <span className="text-[15px] font-bold tracking-[.8px] uppercase whitespace-nowrap text-[#777777]">Portuguese</span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6 pl-2">
              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  alt="Dutch flag"
                  src={"/images/dutch_flag.svg"}
                  width={36}
                  height={28}
                />
                <span className="text-[15px] font-bold tracking-[.8px] uppercase whitespace-nowrap text-[#777777]">Dutch</span>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/6 pl-2">
              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  alt="Japan flag"
                  src={"/images/japan_flag.svg"}
                  width={36}
                  height={28}
                />
                <span className="text-[15px] font-bold tracking-[.8px] uppercase whitespace-nowrap text-[#777777]">Japanese</span>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  );
}
