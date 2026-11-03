"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Reveal } from "@/components/animated/Reveal";

const clients = [
  {
    name: "TotalEnergies",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/54/TotalEnergies_logo.svg"
  },
  {
    name: "Private Sector Foundation Uganda",
    logo: "https://www.psfuganda.org/images/logo.png",
    darkLogo: "https://www.psfuganda.org/images/logoinverse.png"
  },
  {
    name: "Yawe Foundation",
    logo: "https://yawefoundation.org/wp-content/uploads/2023/02/cropped-yawe-Logo.png"
  },
  {
    name: "MTN Uganda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/MTN_Logo.svg"
  },
  {
    name: "Absa Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Absa_Logo.svg"
  },
  {
    name: "Housing Finance Bank",
    logo: "https://web.archive.org/web/20250105021633im_/https://www.housingfinance.co.ug/wp-content/uploads/2022/04/hfb-logo-b-start.png"
  },
  {
    name: "GIZ",
    logo: "https://www.giz.de/themes/custom/dreist/build/giz-logo-with-claim.svg"
  }
];

export function ClientLogos() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-14">
            Trusted By <span className="text-gradient-brand">Leading Companies</span>
          </h2>
        </Reveal>
      </div>
      <div className="marquee-mask relative">
        <div className="animate-marquee flex w-max gap-8 px-4">
          {[...clients, ...clients].map((client, index) => (
            <Card
              key={index}
              className="p-6 flex items-center justify-center w-44 h-24 shrink-0 hover-glow grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 dark:bg-gray-800"
            >
              {client.darkLogo ? (
                <>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain dark:hidden"
                  />
                  <Image
                    src={client.darkLogo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="object-contain hidden dark:block"
                  />
                </>
              ) : (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
