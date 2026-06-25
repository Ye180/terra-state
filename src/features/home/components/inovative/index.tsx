"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { INNOVATION } from "@/components/constants";
import CardComponents from "./card-components";

const Inovative = () => {
    useGSAP(() => {
        const card = gsap.utils.toArray(".inovative .card-components");

        gsap.set(card, {
            xPercent: 100,
        });

        gsap.to(card, {
            scrollTrigger: {
                trigger: ".inovative",
                pin: true,
                scrub: 1,
            },
            xPercent: -100 * (card.length - 1),
        });
    });

    return (
        <>
            <section id="design-inovants" className="inovative ">
                <div
                    className=" container-inovation"
                    style={{
                        backgroundImage: "url('assets/images/home-5.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="brown-bg" />
                    <div className="z-30 relative h-full flex flex-col justify-around">
                        <div className="z-30 relative">
                            <h1>Design innovants</h1>
                        </div>
                        <div className="flex w-fit gap-x-7">
                            {INNOVATION.map((item) => {
                                return <CardComponents key={item.id} item={item} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <div className="h-[95vh]"></div>
        </>
    );
};

export default Inovative;
