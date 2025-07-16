"use client";

import { api } from "../../convex/_generated/api";
import DocumentCard from "@/components/document-card";
import CreateDocumentButton from "@/components/create-document-button";
import { useQuery } from "convex/react";

export default function Home() {

  const documents = useQuery(api.documents.getDocuments);

  return (
    <main className="p-24 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Documents</h1>
        <CreateDocumentButton />
      </div>

        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents?.map((document) => (
            <DocumentCard key={document._id} document={document} />
          ))}
        </div>

    </main>
  );
}
 