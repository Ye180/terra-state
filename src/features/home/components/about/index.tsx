"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutView = () => {
    useGSAP(() => {
        const aboutText = new SplitText(".paragraph", { type: "words" });

        gsap.to(aboutText.words, {
            scrollTrigger: {
                trigger: "#a-propos-de-nous",
                start: "top top",
                end: "bottom top",
                toggleActions: "restart pause reverse none",
                scrub: true,
                pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
            color: "#1a1a1a",
            stagger: 0.1,
        });
    });

    return (
        <section id="a-propos-de-nous" className="about">
            <div className="flex-between text-sm">
                <p className="font-light">A propos de nous</p>
                <p className="text-dark">
                    <span>©</span>2026
                </p>
            </div>

            <div className="description py-0 ">
                <div className="paragraph">
                    <span className="text-dark w-54 inline-block mr-4" />
                    L'architecture peut être un outil puissant dans la lutte contre le changement
                    climatique. Nos conceptions privilégient les pratiques durables, de
                    l'utilisation de matériaux écologiques à la création de bâtiments économes en
                    énergie à faible empreinte carbone.
                </div>
            </div>

        </section>
    );
};

export default AboutView;
