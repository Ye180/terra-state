import dynamic from "next/dynamic";

import HeroView from "../components/hero";
import Footer from "../components/footer";
import Service from "../components/service";

const AboutView = dynamic(() => import("../components/about"));
const Inovative = dynamic(() => import("../components/inovative"));
const Features = dynamic(() => import("../components/features"));
const Contact = dynamic(() => import("../components/contact"));

function HomeView() {
    return (
        <div className="flex-1 font-sans  space-y-14">
            <HeroView />
            <AboutView />
            <Service />
            <Inovative />
            <Features />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomeView;
