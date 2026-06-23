import AboutView from "../components/about";
import HeroView from "../components/hero";

function HomeView() {
    return (
        <div className="flex flex-col flex-1 font-sans  space-y-14">
          
            <HeroView />

            <AboutView />

              
            <div className="h-[200vh] "></div>
          
        </div>
    );
}

export default HomeView;
