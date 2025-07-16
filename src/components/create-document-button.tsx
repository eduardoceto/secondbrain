
import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";

export default function CreateDocumentButton() {
    const [open, setOpen] = useState(false);

    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Upload Document</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Upload a Document</DialogTitle>
                <DialogDescription>
                    Upload a team document for you to search through.
                </DialogDescription>
                <UploadDocumentForm  onUpload={() => setOpen(false)}/>
                </DialogHeader>
            </DialogContent>
        </Dialog>
        
    )
}
