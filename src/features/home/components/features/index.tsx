"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

import { FEATURES } from "@/components/constants";
import Descriptions from "./decriptions";
import Images from "./images";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Features = () => {
    const [current, setCurrent] = useState(0);
    const container = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const trigger = {
                trigger: container.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play pause resume pause",
            };

            gsap.from(".feature-images", {
                scrollTrigger: trigger,
                opacity: 0,
                scale: 0.9,
                y: 40,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from([".title-section", ".title-words"], {
                scrollTrigger: trigger,
                opacity: 0,
                y: 30,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            });
        },
        { scope: container },
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % FEATURES.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section id="nos-caracteristiques" ref={container} className="features feature ">
            <Images image={FEATURES[current].image} />
            <div className="w-3/7 flex flex-col justify-between text-dark">
                <div className="title-section">
                    <p>Nos caracteristiques</p>
                </div>
                <Descriptions curentIndex={current} items={FEATURES} setCurentIndex={setCurrent} />
            </div>
        </section>
    );
};

export default Features;
