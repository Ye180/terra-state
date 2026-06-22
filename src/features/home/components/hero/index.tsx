"use client";

import { HOME } from "@/components/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import Navbar from "../nav";
import NumberSection from "./number";

const HeroView = () => {

    const [curentIndex, setCurentIndex] = useState(0);

    const totalSlides = HOME.length;

    const goToHome = (index: number) => {
        const newIndex = (index + totalSlides) % totalSlides;
        setCurentIndex(newIndex);
    };

    const goToIndex = (indexOfSide: number) => {
        const index = (curentIndex + indexOfSide + totalSlides) % totalSlides;
        return HOME[index];
    };


    useEffect(() => {
        setInterval(()=>{
            setCurentIndex((prev) => (prev + 1) % totalSlides);
        }, 5000);
    }, []);


    useGSAP(() => {
         gsap.fromTo(
            ".hero",
            {
                opacity: 0,
            },
            {
                duration: 0.5,
                opacity: 1,
            },
        );
    }, [])



    useGSAP(() => {

         gsap.fromTo(".hero", {
             opacity: .5,
             scale: 0.9,
         }, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
         });

        
       
        gsap.fromTo(".title", {
            opacity: 0,
            yPercent: 100,
            height: 0,
            ease: "power2.out",
            
        },
            {
            opacity: 1,
            yPercent: 0,
            height: "auto"
                
        });

        gsap.fromTo(".subtitle", {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.8,
        },
        {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.8,
        });
    }, [curentIndex]);

    return (
        <div className="w-full h-screen py-3 px-3">
            <div className="bg-amber-100 h-full rounded-xl overflow-hidden relative hero"
                style={{
                    backgroundImage: `url('${goToIndex(curentIndex).image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",   
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="brown-bg" />
                <Navbar />
                <div className="max-lg:p-4 max-lg:w-full abs-bottom p-8 w-full lg:w-1/2 leading-tight lg:space-y-8 space-y-4">
                    <h1 className="title overflow-hidden">{goToIndex(curentIndex).title}</h1>

                    <div className="flex max-lg:flex-col max-lg:items-center gap-2 lg:gap-8 justify-start text-lg subtitle">

                        {goToIndex(curentIndex).feature.map((feature, index) => (
                            <p key={index} className="gap-2 lg:bg-black px-4 lg:py-1 rounded-full">
                                <span className="point" />
                                <span>{feature}</span>
                            </p>
                        ))}
                    </div>
                </div>
                <div className="abs-right w-fit ">
                    <NumberSection curentIndex={curentIndex} onClick={goToHome} />
                </div>
            </div>
        </div>
    );
};

export default HeroView;
