"use client";

import { Instagram } from "lucide-react";
import Link from "next/link";

export function Insta() {
    return (
        <Link
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-tr from-yellow-500 via-purple-500 to-blue-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center hover:shadow-xl"
            aria-label="Follow us on Instagram"
        >
            <Instagram className="w-6 h-6" />
        </Link>
    );
}
