'use client'
import Section1 from "./_component/section1";
import Link from "next/link";
import useScroll from "@/hooks/useScroll";
import localFont from 'next/font/local';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const feather = localFont({
  src: './fonts/FeatherBold.woff2',
  display: 'swap',
})

export default function Home() {

  //create background opacity
  const [opacity, setOpacity] = useState(0);

  //get positton y on site
  let positionY = useScroll();

  //change background opacity with scroll
  useEffect(() => {
    if (positionY >= 2300) {
      let op = (positionY - 2300) / 1000;
      setOpacity(op);
      if ((positionY - 2300) / 1000 > 1) {
        //No something
      }
    }
  }, [positionY]);

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="relative w-full">
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 z-[-5] bg-[#ddf4ff]`}
          style={{ opacity: opacity }}
        >
        </div>
        <section className="flex flex-col pt-[96px]">
          <Section1
            title="free. fun. effective."
            content={
              <>
                Learning with Duolingo is fun, and <Link href="#" className="text-[#1cb0f6] font-bold">research shows that it works!</Link> With quick,
                bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.
              </>
            }
            image="/images/landing_page1.svg"
          />
          <Section1
            title="backed by science"
            content={
              <>
                We use a combination of research-backed teaching methods and delightful content to create
                courses that effectively teach reading, writing, listening, and speaking skills!
              </>
            }
            image="/images/landing_page2.svg"
            reverse={true}
          />
          <Section1
            title="stay motivated"
            content={
              <>
                We make it easy to form a habit of language learning with game-like features, fun challenges, and reminders from our friendly mascot, Duo the owl.
              </>
            }
            image="/images/landing_page3.svg"
          />
          <Section1
            title="personalized learning"
            content={
              <>
                Combining the best of AI and language science, lessons are tailored to help you learn at just the right level and pace.
              </>
            }
            image="/images/landing_page4.svg"
            reverse={true}
          />
        </section>
        <section className="flex items-center justify-center min-h-screen overflow-hidden">
          <div className="flex flex-col max-w-[1728px] pt-[140px] py-0 pb-[96px]">
            <div className="flex flex-col items-center gap-[48px]">
              <h1
                className={`${feather.className} text-[64px] max-w-[583px] text-[#042c60] text-center leading-tight tracking-[-.02em]`}
              >learn anytime, anywhere</h1>
              <div className="flex gap-[24px] justify-center ">
                <Button variant={"ghost"} size={"sm"}>
                  <div className="flex gap-[10px]">
                    <Image
                      src={"/images/apple_icon.svg"}
                      alt="apple icon"
                      width={34}
                      height={34}
                    />
                    <span className="grid text-left text-[17px] text-[#4b4b4b]">
                      <span className="text-[14px] leading-[17px] mb-[1px]">Download on the</span>
                      App Store
                    </span>
                  </div>
                </Button>
                <Button variant={"ghost"} size={"sm"}>
                  <div className="flex gap-[10px]">
                    <Image
                      src={"/images/google_play.svg"}
                      alt="apple icon"
                      width={34}
                      height={34}
                    />
                    <span className="grid text-left text-[17px] text-[#4b4b4b]">
                      <span className="text-[14px] leading-[17px] mb-[1px]">Get it on</span>
                      Google Play
                    </span>
                  </div>
                </Button>
              </div>
            </div>
            <div className="grid relative ml-[-220px] mt-[-340px] ">
              <Image
                alt="landing background"
                src={'/images/landing_bg.svg'}
                width={267}
                height={150}
                className="w-[2000px] z-[-3]"
              />
              <Image
                alt="landing background"
                src={'/images/landing_bg2.svg'}
                width={267}
                height={150}
                className="w-[2000px] absolute z-[-2]"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[#100f3e] w-full h-full py-[185px]">
        <div className="flex justify-center items-center w-auto gap-[40px] mx-auto">
          <div className="relative shrink-0 w-[530px] leading-0">
            <Image
              alt="landing page 5"
              src={"/images/landing_page5.png"}
              width={530}
              height={530}
            />
          </div>
          <div className="flex flex-col items-center gap-[48px] max-w-full">
            <Image
              alt="Super Duolingo"
              src={"/images/super_duo_icon.svg"}
              width={605}
              height={88}
            />
            <Link href={"/"} className="max-w-[418px]">
              <Button variant={"ghost"}>
                <span className="text-[15px] uppercase font-bold">Try 2 weeks for free</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col py-[96px]">
        <Section1
          title="duolingo english test"
          content={
            <>
              Our convenient, fast, and affordable English test integrates the latest assessment science and AI —
              empowering anyone to accurately test their English where and when they’re at their best.
            </>
          }
          image="/images/landing_page6.svg"
          linkBtn="/"
          textBtn="Certify your English"
        />
        <Section1
          title="duolingo for schools"
          content={
            <>
              Teachers, we’re here to help you! Our free tools support your students as
              they learn languages through the Duolingo app, both in and out of the classroom.
            </>
          }
          image="/images/landing_page7.svg"
          reverse={true}
          linkBtn="/"
          textBtn="Get your class started"
        />
        <Section1
          title="duolingo abc"
          content={
            <>
              From language to literacy! With fun phonics lessons and delightful stories,
              Duolingo ABC helps kids ages 3–8 learn to read and write — 100% free.
            </>
          }
          image="/images/landing_page8.svg"
          linkBtn="/"
          textBtn="Learn more about ABC"
        />
        <Section1
          title="duolingo math"
          content={
            <>
              Our free, bite-sized approach — but for math! Fun lessons help students get ahead in their math classes,
              while adults can brain train to boost their mental math skills.
            </>
          }
          image="/images/landing_page9.svg"
          reverse={true}
          linkBtn="/"
          textBtn="Get better at Math"
        />
      </section>
      <section className="flex items-end w-full">
        <div className="bg-[#58cc02] flex-1 h-[536px]"></div>
        <div className="flex items-center flex-col max-w-[1440px] overflow-hidden w-full">
          <div className="flex flex-col items-center gap-[48px] max-w-full">
            <h1
              className={`${feather.className} text-[64px] max-w-[583px] text-[#58cc02] text-center leading-tight tracking-[-.02em]`}
            >learn anytime, anywhere</h1>
            <Button className="max-w-[330px] w-full">
              Get started
            </Button>
          </div>
          <div className="flex min-w-[696px] relative w-full aspect-[1448/708]">
            <span className="absolute bottom-0 top-0 mt-[-19.9889502762%]">
              <Image
                alt="landing background"
                src={"/images/landing_bg3.svg"}
                width={1920}
                height={1060} 
              />
            </span>
            <span className="absolute bottom-0 top-0 mt-[-19.9889502762%]">
              <Image
                alt="background landing 4"
                src="/images/landing_bg4.svg"
                width={1920}
                height={1060}
              />
            </span>
            <div className="aspect-[1448/200] bg-[#58cc02] bottom-0 absolute w-full"></div>
          </div>
        </div>
        <div className="bg-[#58cc02] flex-1 h-[536px]"></div>
      </section>
    </main>
  );
}
