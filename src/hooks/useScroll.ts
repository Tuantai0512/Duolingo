'use client'
import { useLayoutEffect, useRef, useState } from 'react';

export default function useScroll() {
    const [scrollYPosition, setScrollYPosition] = useState<number>(0);
    const prevScrollYPosition = useRef<number>(0);

    const handleScroll = () => {
        setScrollYPosition(window.scrollY);
    };

    useLayoutEffect(() => {
        setScrollYPosition(window.scrollY);
        prevScrollYPosition.current = scrollYPosition;
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollYPosition]);

    return scrollYPosition;

}
