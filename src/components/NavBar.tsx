import { Menu } from "lucide-react";
import { LogoutButton } from "./LogoutButton";
import { NavLink } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  path: string;
}

const menu: MenuItem[] = [
  { title: "Home", path: "/" },
  { title: "Search", path: "/search" },
];

const NavBar = ({
  logo = {
    src: "/NBIF_Logo.svg",
    alt: "NBIF Logo",
    title: "NBIF",
  },
}) => {
  return (
    <section className="py-4 border-b bg-white/80 backdrop-blur-sm">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
            </NavLink>

            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => (
                    <NavigationMenuItem key={item.path}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "bg-background"
                          )
                        }
                      >
                        {item.title}
                      </NavLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex gap-2">
            <LogoutButton />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
            </NavLink>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>

              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <NavLink
                      to="/"
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </NavLink>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 p-4">
                  <div className="flex flex-col gap-4">
                    {menu.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          cn(
                            "text-md font-semibold text-left px-4 py-2 rounded-md transition-colors",
                            isActive
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-accent hover:text-accent-foreground"
                          )
                        }
                      >
                        {item.title}
                      </NavLink>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 mt-8">
                    <LogoutButton />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NavBar };
