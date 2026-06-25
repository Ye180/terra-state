"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";
import type { ReactNode } from "react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const LenisJSX = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        // Listen for the scroll event and log the event data
        lenis.on("scroll", ScrollTrigger.update);

        return () => {
            lenis.off("scroll", ScrollTrigger.update);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default LenisJSX;
