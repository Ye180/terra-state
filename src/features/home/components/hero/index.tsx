import Navbar from "../nav"

const HeroView = () => {
    return (
        <div className="w-full h-screen py-3 px-3">
            <div className="bg-amber-100 h-full rounded-xl overflow-hidden relative hero" 
            >
                <div className="brown-bg"/>
                <Navbar />
                

                <div className="abs-bottom p-8 w-full lg:w-1/2 leading-tight">
                    <h1 >Sustainable Living, Modern Comfort</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroView