"use client";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

import { INNOVATION } from "@/components/constants";
import CardComponents from "./card-components";

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
            <div className=" container-inovation">
                <Image
                        src="/assets/images/home-5.jpg"
                        alt=""
                        fill
                        className="object-cover object-center"
                        aria-hidden="true"
                        sizes="100vw"
                    />
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
