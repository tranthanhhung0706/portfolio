"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { number: "01", label: "about", href: "#about" },
  { number: "02", label: "skills", href: "#skills" },
  { number: "03", label: "projects", href: "#projects" },
  { number: "04", label: "experience", href: "#experience" },
  { number: "05", label: "contact", href: "#contact" },
];

const NavLink = ({
  number,
  label,
  href,
  className,
  onClick,
}: (typeof NAV_ITEMS)[number] & {
  className?: string;
  onClick?: () => void;
}) => (
  <a
    href={href}
    onClick={onClick}
    className={cn(
      "font-mono text-sm text-muted-foreground transition-colors hover:text-emerald-400",
      className
    )}
  >
    <span className="text-emerald-400">{number}.</span>
    {label}
  </a>
);

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0e14]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-1 font-mono text-base font-semibold text-white"
        >
          <span className="text-emerald-400">$</span>
          Hung Tran
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <Button
          nativeButton={false}
          variant="outline"
          className="hidden rounded-md border-emerald-400/40 bg-transparent font-mono text-sm text-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-400 md:inline-flex"
          render={<a href="#contact" />}
        >
          get in touch
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-white md:hidden"
              />
            }
          >
            <MenuIcon />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-white/10 bg-[#0a0e14] text-white"
          >
            <SheetHeader>
              <SheetTitle className="font-mono text-white">
                <span className="text-emerald-400">$</span> Alex Rivera
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6 px-4">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  {...item}
                  className="text-base"
                  onClick={() => setOpen(false)}
                />
              ))}
              <Button
                nativeButton={false}
                variant="outline"
                className="mt-2 w-full rounded-md border-emerald-400/40 bg-transparent font-mono text-sm text-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-400"
                render={<a href="#contact" onClick={() => setOpen(false)} />}
              >
                get in touch
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
