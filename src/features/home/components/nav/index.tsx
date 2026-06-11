import Logo from "@/components/shared/logo"
import { cn } from "@/lib/utils/utils"
import { NAV_ITEMS } from "../../constants"

const Navbar = () => {
  return (
    <nav className="w-full  p-8 flex items-center justify-between relative z-10">
      <Logo />

      <div className="container-nav max-lg:hidden lg:flex-center">
        {NAV_ITEMS.map((item) => (
          <button key={item.href} className={cn(item.isUnique ? "unique-item nav-item" : "nav-item")}>{item.label}</button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar