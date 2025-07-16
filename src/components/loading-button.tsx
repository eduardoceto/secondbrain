import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export function LoadingButton({ isLoading, children, loadingText }: { isLoading: boolean, children: React.ReactNode, loadingText: string }) {
    return (
        <Button className="flex gap-1 items-center" type="submit" disabled={isLoading}>
            {isLoading ? (
                <>
                    <Loader2 className="animate-spin" />
                    <span>{loadingText}</span>
                </>
            ) : (
                children
            )}
        </Button>
    )
}