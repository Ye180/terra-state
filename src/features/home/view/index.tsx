import AboutView from "../components/about";
import Features from "../components/features";
import HeroView from "../components/hero";
import Inovative from "../components/inovative";
import Service from "../components/service";

function HomeView() {
    return (
        <div className="flex flex-col flex-1 font-sans  space-y-14">
            <HeroView />
            <AboutView />
            <Service />
            <Inovative />
            <Features />

            
        </div>
    );
}

export default HomeView;
