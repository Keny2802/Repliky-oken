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
  title: "Jednorámová okna | Replikyoken.cz",
  description:
    "Zakázková výroba jednorámových oken na míru. Precizní české řemeslo a tradiční design zaručují autentický vzhled a kvalitu každého okna.",

  // canonical URL
  alternates: {
    canonical: "/produkty/jedno-ramova-okna-s-izolacnim-sklem-trojsklo-dvojsklo",
  },

  // Open Graph
  openGraph: {
    title: "Jednorámová okna | Replikyoken.cz",
    description:
      "Výroba replik jednorámových oken - tradiční design, špaletové a historické okna na míru. Každé okno vyrábíme s důrazem na detail a kvalitu.",
    url: "/produkty/jedno-ramova-okna-s-izolacnim-sklem-trojsklo-dvojsklo",
    images: [
      {
        url: "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna/jednoramova-okna-7.avif",
        width: 1200,
        height: 630,
        alt: "Repliky historických jednorámových oken",
      },
    ],
  },

  // Twitter/X
  twitter: {
    title: "Jednorámová okna | Replikyoken.cz",
    description:
      "Zakázková výroba jednorámových oken s důrazem na tradiční řemeslo a kvalitu každého detailu.",
    images: [
      "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna/jednoramova-okna-7.avif",
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