'use client'
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import useScroll from "@/hooks/useScroll";

export interface IAppProps {
}

export default function Header(props: IAppProps) {

    /* Get scroll Y position on site  */
    const scrollPosition = useScroll();

    return (
        <header className={`sticky top-0 w-full px-8 ${ scrollPosition != 0 ? 'shadow-[0_2px_4px_-1px_rgba(57,76,96,0.15)]' : ''} `}>
            <div className='flex items-center min-h-[72px]'>
                <nav className="flex justify-between mx-auto my-0 max-w-[988px] w-full">
                    <Link href={"/"}>
                        <Image
                            src={"/images/logo.svg"}
                            alt="Duolingo"
                            width={179}
                            height={42}
                        />
                    </Link>
                    <div>
                        <Button variant={"link"}>
                            Site language: English
                            <Image
                                alt="down arrow"
                                src="/images/down-arrow.svg"
                                width={14}
                                height={14}
                                className="ml-2"
                            />
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
