"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";

const montserrat = Montserrat ({
    weight: "600",
    subsets:["latin"]

});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-orange-500",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-violet-500",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-pink-500",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-red-500",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "text-cyan-500",
    },
];

const Sidebar = () => {
    return ( 
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl mb-14">
                <div className="relative w-10 h-10 mr-1">
                    <Image 
                    fill
                    alt="Logo"
                    src="/logo.png" />
                </div>
                <h1 className={cn ("text-2xl font-bold",
                    montserrat.className
                )}>
                    AI Zagab
                </h1>
                </Link>
                <div className="spae-y-1">
                    {routes.map((routes) => (
                        <Link
                        href={routes.href}
                        key={routes.href}
                        className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
                        >
                            <div className="flex items-center flex-1">
                                <routes.icon className={cn("h-5 w-5 mr-3", routes.color)} />
                                {routes.label}
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;
