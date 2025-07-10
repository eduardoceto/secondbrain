"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Header() {

    return (
        <div className="bg-slate-900 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    SecondBrain
                </div>
                <div>
                    <Authenticated>
                        <div className="flex items-center gap-4">
                            <ModeToggle />
                            <UserButton /> 
                        </div>
                    </Authenticated>
                    <Unauthenticated>
                        <SignInButton />
                    </Unauthenticated>
                    
                </div>
        </div>
      </div>
    )
}