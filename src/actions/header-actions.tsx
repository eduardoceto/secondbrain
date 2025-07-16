import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Loader2 } from "lucide-react";

export default function HeaderActions() {
    return (
        <>
        <Authenticated>               
            <UserButton /> 
        </Authenticated>
        <Unauthenticated>
            <SignInButton />
        </Unauthenticated>
        <AuthLoading>
            <Loader2 className="animate-spin" />
        </AuthLoading>
        </>
    )
}