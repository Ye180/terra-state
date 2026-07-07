import Link from "next/link";

import { NAV_ITEMS } from "@/components/constants";
import Logo from "@/components/shared/logo";
import { cn } from "@/lib/utils/utils";

const Navbar = () => {
    return (
        <nav className="w-full px-4 py-6 lg:p-8 flex items-center justify-between relative z-10">
            <Logo />

            <div className="container-nav max-lg:hidden lg:flex-center relative z-100  ">
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(item.isUnique ? "unique-item nav-item" : "nav-item")}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
