"use client";

import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  const createDocument = useMutation(api.documents.createDocument);
  const documents = useQuery(api.documents.getDocuments);

  return (
    <>
      <Authenticated>
        <UserButton />
        <ModeToggle />
        <Button onClick={() => createDocument({ title: "Test" })}>Create Document</Button>
        {documents?.map((document) => (
          <div key={document._id}>{document.title}</div>
        ))}
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </>
  );
}
