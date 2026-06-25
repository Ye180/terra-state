"use client";
import { useGSAP } from "@gsap/react";

const Contact = () => {
    useGSAP(() => {});

    return (
        <section id="contact" className="contact">
            <div
                className="container-contact "
                style={{
                    backgroundImage: "url('assets/images/home-5.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="brown-bg" />

                <div className="card-contact">
                    <div className="text-center space-y-4">
                        <h4 className="text-2xl font-semibold text-white">Entrer en contact</h4>
                        <p className="text-white text-[0.75rem]">
                            Que ce soit pour une question, un projet ou pour discuter d'enjeux de
                            durabilité, nous vous invitons à nous joindre dès aujourd'hui.
                        </p>
                    </div>

                    <div className="space-y-4 text-dark">
                        <div className="grid-2-center">
                            <input type="text" placeholder="Enter votre email" />
                            <input type="text" placeholder="Enter votre message" />
                        </div>

                        <div className="grid-2-center">
                            <textarea
                                placeholder="Dites nous en plus sur votre projet..."
                                rows={6}
                                className="col-span-2 resize-none"
                            />
                        </div>
                        <div className="grid-2-center pt-6">
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
