import { cn } from "@/lib/utils";

const Descriptions = ({
    curentIndex,
    setCurentIndex,
    items,
}: {
    curentIndex: number;
    setCurentIndex: (index: number) => void;
    items: { id: string; title: string; description: string }[];
}) => {
    const totalItems = items.length;

    const goToFeature = (index: number) => {
        const newIndex = (index + totalItems) % totalItems;
        setCurentIndex(newIndex);
    };

    return (
        <div className="space-y-3 lg:space-y-6">
            <div className="col-start gap-y-2">
                {items?.map((item) => (
                    <p
                        key={item.id + item.title}
                        className={cn(
                            "title-words transition-colors duration-300 cursor-pointer",
                            curentIndex === items.indexOf(item)
                                ? "text-footer font-semibold  border-b-4 border-footer"
                                : "",
                        )}
                        onClick={() => goToFeature(items.indexOf(item))}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                goToFeature(items.indexOf(item));
                            }
                        }}
                    >
                        {item.title}
                    </p>
                ))}
            </div>
            <div className="w-full text-footer max-lg:pt-6 ">{items[curentIndex].description}</div>
        </div>
    );
};

export default Descriptions;
