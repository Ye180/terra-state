"use client";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const Images = ({ image }: { image: string }) => {
    const container = useRef<HTMLDivElement>(null);
    const frontRef = useRef<HTMLDivElement>(null);
    // Image affichée sur le calque arrière (la précédente) pendant le fondu
    const prevImage = useRef(image);

    useGSAP(
        () => {
            const front = frontRef.current;
            if (!front) return;

            gsap.fromTo(
                front,
                { opacity: 0, scale: 1.06 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.9,
                    ease: "power2.out",
                    onComplete: () => {
                        prevImage.current = image;
                    },
                },
            );
        },
        { dependencies: [image], scope: container },
    );

    return (
        <div
            ref={container}
            className="w-full md:w-100 xl:w-160 aspect-square lg:aspect-5.5/4 overflow-hidden rounded-2xl relative feature-images"
        >
            <div className="absolute inset-0">
                <Image
                    src={prevImage.current}
                    alt=""
                    fill
                    className="object-cover object-center"
                    aria-hidden="true"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 400px, 640px"
                />
            </div>
            <div ref={frontRef} className="absolute inset-0">
                <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 400px, 640px"
                />
            </div>
            <div className="brown-bg" />
        </div>
    );
};

export default Images;
