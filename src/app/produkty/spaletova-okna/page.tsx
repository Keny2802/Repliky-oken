import type {
    Metadata
} from "next";
import {
    Fragment
} from "react";

import Content from "./Content";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"),

  // SEO
  title: "Špaletová okna | Replikyoken.cz",
  description:
    "Zakázková výroba špaletových oken na míru. Precizní české řemeslo a dlouholetá tradice zaručují kvalitu a autenticitu každého okna.",

  // canonical URL
  alternates: {
    canonical: "/spaletova-okna",
  },

  // Open Graph
  openGraph: {
    title: "Špaletová okna | Replikyoken.cz",
    description:
      "Výroba replik špaletových oken - jednorámová, dvourámová, historická. Každé okno vyrábíme s důrazem na kvalitu a detail.",
    url: "/spaletova-okna",
    images: [
      {
        url: "/assets/fotky/produkty/spaletova-okna/spaletova-okna-1.avif",
        width: 1200,
        height: 630,
        alt: "Repliky historických špaletových oken",
      },
    ],
  },

  // Twitter/X
  twitter: {
    title: "Špaletová okna | Replikyoken.cz",
    description:
      "Zakázková výroba špaletových oken s důrazem na tradiční řemeslo a kvalitu každého detailu.",
    images: [
      "/assets/fotky/produkty/spaletova-okna/spaletova-okna-1.avif",
    ],
  },
};

const Page = () => {
    return (
        <Fragment>
            <Content />
        </Fragment>
    );
};

export default Page;