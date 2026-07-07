import AboutView from "../components/about";
import Contact from "../components/contact";
import Features from "../components/features";
import Footer from "../components/footer";
import HeroView from "../components/hero";
import Inovative from "../components/inovative";
import Service from "../components/service";

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
