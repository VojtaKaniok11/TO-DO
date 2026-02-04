"use client";

import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex justify-center items-center py-6 w-full bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
            <div className="flex gap-14">
                <NavLink href="/">Plan</NavLink>
                <NavLink href="/done">Done</NavLink>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            scroll={false}
            className="text-lg font-medium text-foreground/80 hover:text-blue-500 hover:scale-110 transition-all duration-300 ease-in-out relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
    );
}
