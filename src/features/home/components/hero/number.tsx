import { cn } from "@/lib/utils/utils";
import type { NumberItem } from "../../types";

const NumberSection = ({ curentIndex, onClick }: { curentIndex: number; onClick: (index: number) => void }) => {
    const datas: NumberItem[] = [
        { number: 0, text: "Energy Efficient" },
        { number: 1, text: "Modern Design" },
        { number: 2, text: "Eco-Friendly Materials" },
    ];
    return (
        <div className="flex flex-col gap-2">
            {datas.map((data) => (
                <div className="flex-center gap-2 text-text-primary cursor-pointer transition-all duration-300" key={data.number} onClick={() => onClick(data.number)}>
                    <span className={cn("text-md transition-all duration-300 lg:text-lg opacity-60", curentIndex === data.number && "opacity-100 text-xl lg:text-3xl")}>
                        {data.number + 1}
                    </span>{" "}
                    <span className="w-3 md:w-6 h-0.5 bg-text-primary" />
                </div>
            ))}
        </div>
    );
};

export default NumberSection;
