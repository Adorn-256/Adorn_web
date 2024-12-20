"use client";

import { ClientCard } from "./ClientCard";
import { clients } from "./data";

export function ClientLogos() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Trusted By Leading Companies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <ClientCard key={index} client={client} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}