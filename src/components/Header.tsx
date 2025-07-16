"use client";

import { ModeToggle } from "@/components/ui/ModeToggle";
import HeaderActions from "@/actions/header-actions";
import Image from "next/image";

export default function Header() {

    return (
        <div className="bg-slate-900 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-4 text-2xl">   
                        <Image src="/logo.png" alt="SecondBrain" width={40} height={40} className="rounded-full" />
                        <span className="text-2xl font-bold">SecondBrain</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        <HeaderActions />
                    </div>
                </div>
        </div>
      </div>
    )
}