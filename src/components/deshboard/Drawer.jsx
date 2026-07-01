import {
  LayoutSideContentLeft,
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

export function DrawerPage() {
  const navItems = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];

  const navLogo = (
    <Link
      href="/"
      id="nav-logo"
      className="flex items-center gap-2 font-sans font-bold text-xl text-teal-600 hover:text-teal-700 transition-colors mr-8"
    >
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="relative w-11 h-11 rounded-xl bg-linear-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-xl shadow-xl">
            D
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight leading-none">
            Digital<span className="text-indigo-400">Life</span>
          </span>
          <span className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] mt-0.5">
            Life Lessons Platform
          </span>
        </div>
      </div>
    </Link>
  );

  const navContent = (
    <nav className="flex flex-col gap-2 p-3 backdrop-blur-xl">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.label}
            type="button"
            className="
          group
          flex w-full items-center gap-4
          rounded-2xl
          px-4 py-3
          text-left
          transition-all duration-300
          hover:bg-white/10
          hover:border-cyan-500/20
          hover:shadow-lg hover:shadow-cyan-500/10
        "
          >
            <div
              className="
            flex h-11 w-11 items-center justify-center
            rounded-xl
            bg-cyan-500/10
            text-cyan-400
            transition-all duration-300
            group-hover:bg-cyan-500/20
            group-hover:scale-110
          "
            >
              <Icon className="size-5" />
            </div>

            <span
              className="
            text-sm font-medium text-slate-300
            transition-colors duration-300
            group-hover:text-white
          "
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );


  return (
    <>
      <aside className="hidden lg:flex flex-col gap-1 w-60 p-4 bg-slate-950 border-r border-slate-800 scrollbar overflow-y-auto">
        {navLogo} <br />
        {navContent}
      </aside>

      <Drawer>
        <Button
          variant="light"
          className="lg:hidden flex items-center gap-2 rounded-none bg-white/10 px-4 py-2 text-white backdrop-blur-md transition-all duration-200 hover:text-teal-400 active:scale-95"
        >
          <LayoutSideContentLeft className="h-5 w-5" />
          <span>Menu</span>
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left" >
            <Drawer.Dialog className="w-72 bg-slate-950 text-white border-r border-slate-800">
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>{navLogo}</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body className="flex flex-col gap-4 p-4">
                {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
