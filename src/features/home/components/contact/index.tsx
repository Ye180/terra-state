"use client";

import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const Contact = () => {
    const containerContact = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const containerContactElement = containerContact.current;

            gsap.from(containerContactElement, {
                scrollTrigger: {
                    trigger: containerContactElement,
                    start: "top 80%",
                    toggleActions: "play pause resume pause",
                    once: true,
                },
                opacity: 0,
                scale: 0.9,
                duration: 1,
            });
        },
        { scope: containerContact },
    );

    return (
        <section ref={containerContact} id="contact" className="contact">
            <div className="container-contact">
                <Image
                        src="/assets/images/home-5.jpg"
                        alt=""
                        fill
                        className="object-cover object-center"
                        aria-hidden="true"
                        sizes="100vw"
                    />
                <div className="brown-bg" />

                <div className="card-contact formulaire">
                    <div className="text-center space-y-4">
                        <h4 className="text-2xl font-semibold text-white">Entrer en contact</h4>
                        <p className="text-white text-[0.75rem]">
                            Que ce soit pour une question, un projet ou pour discuter d'enjeux de
                            durabilité, nous vous invitons à nous joindre dès aujourd'hui.
                        </p>
                    </div>

                    <div className="space-y-2 text-dark ">
                        <div className="grid-1-center lg:grid-2-center">
                            <input type="text" placeholder="Enter votre email" />
                            <input type="text" placeholder="Enter votre message" />
                        </div>

                        <div className="grid-2-center">
                            <textarea
                                placeholder="Dites nous en plus sur votre projet..."
                                rows={5}
                                className="col-span-2 resize-none"
                            />
                        </div>
                        <div className="grid-2-center lg:pt-6 pt-4">
                            <button
                                type="button"
                                className="col-span-2 w-full py-3 text-center! bg-secondary text-secondary-foreground hover:bg-footer hover:text-background aria-expanded:bg-secondary aria-expanded:text-secondary-foreground rounded-full cursor-pointer transition-all"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="conteneur-creux"></div> */}
        </section>
    );
};

export default Contact;
