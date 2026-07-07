"use client";
import { ScrollTrigger } from "@/lib/gsap";
import Lenis from "lenis";
import type { ReactNode } from "react";
import { useEffect } from "react";

const LenisJSX = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            lerp: 0.15,
        });
        lenis.on("scroll", ScrollTrigger.update);

        return () => {
            lenis.off("scroll", ScrollTrigger.update);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default LenisJSX;
