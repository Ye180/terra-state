"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

import { layerStyle } from "@/components/shared/layer-styles";

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
            className="w-160 aspect-5.5/4 overflow-hidden rounded-2xl relative feature-images"
        >
            {/* Calque arrière : image précédente, visible pendant le fondu */}
            <div className="absolute inset-0" style={layerStyle(prevImage.current)} />
            {/* Calque avant : image courante, dont l'opacité est animée 0 -> 1 */}
            <div ref={frontRef} className="absolute inset-0" style={layerStyle(image)} />
            <div className="brown-bg" />
        </div>
    );
};

export default Images;
