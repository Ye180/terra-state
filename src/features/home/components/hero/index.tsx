"use client";

import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

import { HOME } from "@/components/constants";
import { CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import Navbar from "../nav";
import NumberSection from "./number";

const HeroView = () => {
    const [curentIndex, setCurentIndex] = useState(0);

    const container = useRef<HTMLDivElement>(null);
    const frontRef = useRef<HTMLDivElement>(null);

    const totalSlides = HOME.length;

    const goToHome = (index: number) => {
        const newIndex = (index + totalSlides) % totalSlides;
        setCurentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurentIndex((prev) => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        gsap.fromTo(
            ".title",
            {
                opacity: 0,
                yPercent: 100,
                height: 0,
                ease: "power2.out",
            },
            {
                opacity: 1,
                yPercent: 0,
                height: "auto",
            },
        );

        gsap.fromTo(
            ".subtitle",
            {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
                delay: 0.8,
            },
            {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",
                delay: 0.8,
            },
        );
    }, [curentIndex]);

    const prevImage = useRef(HOME[curentIndex].image);

    useGSAP(
        () => {
            const front = frontRef.current;
            if (!front) return;

            gsap.fromTo(
                front,
                { opacity: 0, scale: 1 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.9,
                    ease: "power2.out",
                    onComplete: () => {
                        prevImage.current = HOME[curentIndex]?.image;
                    },
                },
            );
        },
        { dependencies: [HOME[curentIndex]?.image], scope: container },
    );

    return (
        <div className="w-full h-screen py-3 px-3">
            <div
                ref={container}
                className="bg-amber-100 h-full rounded-xl overflow-hidden relative hero"
            >
                <div className="absolute inset-0">
                    <Image
                        src={prevImage.current}
                        alt=""
                        fill
                        className="object-cover object-center"
                        aria-hidden="true"
                        sizes="100vw"
                        priority
                    />
                </div>
                <div ref={frontRef} className="absolute inset-0">
                    <Image
                        src={HOME[curentIndex].image}
                        alt={HOME[curentIndex].title}
                        fill
                        priority={curentIndex === 0}
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>

                <div className="brown-bg" />
                <Navbar />
                <div className="max-lg:p-4 max-lg:w-full abs-bottom p-8 w-full lg:w-1/2 leading-tight lg:space-y-8 space-y-4">
                    <h1 className="title overflow-hidden">{HOME[curentIndex].title}</h1>

                    <div className="flex max-lg:flex-col max-lg:items-center gap-2 lg:gap-8 justify-start text-lg subtitle">
                        {HOME[curentIndex].feature.map((feature) => (
                            <p
                                key={feature}
                                className="gap-2 lg:bg-black px-4 lg:py-1 rounded-xl flex items-center"
                            >
                                <CheckCircleIcon className="w-4 h-4" />
                                <span>{feature}</span>
                            </p>
                        ))}
                    </div>
                </div>
                <div className="abs-right w-fit ">
                    <NumberSection curentIndex={curentIndex} onClick={goToHome} />
                </div>
            </div>
        </div>
    );
};

export default HeroView;
