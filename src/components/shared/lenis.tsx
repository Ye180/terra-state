"use client";
import Lenis from "lenis";
import type { ReactNode } from "react";
import { useEffect } from "react";

const LenisJSX = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        // Listen for the scroll event and log the event data
        lenis.on("scroll", (e) => {
            // console.log(e);
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default LenisJSX;
