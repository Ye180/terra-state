"use client"
import { INNOVATION } from "@/components/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CardComponents from "./card-components";

const Inovative = () => {

    useGSAP(() => {

        const card = gsap.utils.toArray('.inovative .card-components');

        gsap.set(card, {
            xPercent: 100,
        });

        gsap.to(card, {
            scrollTrigger: {
                trigger: '.inovative',
                pin: true,
                scrub: 1,
            },
            xPercent: -100 * (card.length - 1),
        });

        console.log(card);
        
    });
    
    return (
        <>
        <section className={"px-8 h-screen inovative py-10"}>
            <div
                className="bg-amber-900 w-full h-screen rounded-2xl relative overflow-hidden container-inovation"
                style={{
                    backgroundImage: "url('assets/images/home-5.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="brown-bg" />
                <div className="z-30 relative h-full flex flex-col justify-around">
                    <div className="z-30 relative">
                        <h1>Innovative Designs</h1>
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
