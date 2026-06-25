import { ArrowRight } from "lucide-react";

import { SERVICES } from "@/components/constants";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Service = () => {
    return (
        <section className="h-[70vh] service text-dark px-16 flex ">
            <div className="space-y-5">
                <div
                    className=" w-[95vw] max-lg:h-120 lg:w-120 lg:h-full aspect-square rounded-2xl relative overflow-hidden"
                    style={{
                        backgroundImage: `url('/assets/images/home-4.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="brown-bg" />
                </div>

                <Button variant="outline" icon={<ArrowRight />}>
                    Voir plus de services{" "}
                </Button>
            </div>

            <div className="h-130 flex flex-col justify-between ">
                <div className="flex-between text-gray text-sm">
                    <p className="font-light">Nos Services</p>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="service-1"
                    className="w-[95vw] lg:w-120 space-y-2 "
                >
                    {SERVICES.map((service, index) => (
                        <AccordionItem
                            key={service.id}
                            value={service.id}
                            className="border-b border-dark/40"
                        >
                            <AccordionTrigger className="">
                                <div className="w-[65%] flex-start gap-x-5 lg:gap-x-10 text-base lg:text-lg">
                                    <span className="text-gray">0{index + 1}</span>
                                    <span className="capitalize whitespace-nowrap ">
                                        {service.title}
                                    </span>
                                </div>
                                <span>
                                    <ArrowRight
                                        data-slot="accordion-trigger-icon"
                                        className="pointer-events-none shrink-0 -rotate-45 transition-all group-aria-expanded/accordion-trigger:rotate-90"
                                    />
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="w-full lg:w-120 text-[1.1rem] h-fit text-pretty">
                                {service.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Service;
