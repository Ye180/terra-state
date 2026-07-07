"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { INNOVATION } from "@/components/constants";
import { layerStyle } from "@/components/shared/layer-styles";
import CardComponents from "./card-components";

gsap.registerPlugin(ScrollTrigger);

const Inovative = () => {
    const section = useRef<HTMLElement>(null);
    const track = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const el = track.current;
            if (!el) return;

            // Distance de défilement horizontal = débordement réel de la rangée de cartes
            const distance = () =>
                el.scrollWidth - (el.parentElement?.clientWidth ?? window.innerWidth);

            gsap.to(el, {
                x: () => -distance(),
                ease: "none",
                scrollTrigger: {
                    trigger: section.current,
                    start: "top top",
                    end: () => "+=" + distance(),
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 0.2,
                },
            });
        },
        { scope: section },
    );

    return (
        <section ref={section} id="design-inovants" className="inovative  py-8!">
            <div className=" container-inovation" style={layerStyle("assets/images/home-5.jpg")}>
                <div className="brown-bg" />
                <div className="z-30 relative h-full flex flex-col justify-around">
                    <div className="z-30 relative">
                        <h1>Design innovants</h1>
                    </div>
                    <div ref={track} className="flex w-fit gap-x-7 h-[80%]">
                        {INNOVATION.map((item) => {
                            return <CardComponents key={item.id} item={item} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inovative;
