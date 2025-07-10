"use client";

import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createDocument = useMutation(api.documents.createDocument);
  const documents = useQuery(api.documents.getDocuments);

  return (
    <>
      <Authenticated>
        <UserButton />
        <button onClick={() => createDocument({ title: "Test" })}>Click Me</button>
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
