import { CheckCircleIcon } from "lucide-react";

const CardComponents = ({
    item,
}: {
    item: { id: string; title: string; description: string[]; image: string };
}) => {
    return (
        <div className="card-components">
            <div
                className=" container-card"
                style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="brown-bg"></div>
                <div className="description-card">
                    <h4 className="">{item.title}</h4>
                    <div className="text-[1.1rem] capitalize space-y-1.5 ">
                        {item.description.map((desc: string) => (
                            <p key={item.id + desc} className=" text-[0.8rem] flex items-center gap-2" title={desc}>
                                <span><CheckCircleIcon size={16} /></span>
                                <span>{desc}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardComponents;
