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
  title: "Interiérové dveře | Replikyoken.cz",
  description:
    "Zakázková výroba interiérových dveří na míru. Precizní české řemeslo, tradiční design a vysoká kvalita zaručují perfektní vzhled a funkčnost každých dveří.",

  // canonical URL
  alternates: {
    canonical: "/produkty/interierove-dvere",
  },

  // Open Graph
  openGraph: {
    title: "Interiérové dveře | Replikyoken.cz",
    description:
      "Výroba interiérových dveří na míru - tradiční české řemeslo, kvalitní materiály a precizní zpracování každého detailu.",
    url: "/produkty/interierove-dvere",
    images: [
      {
        url: "/assets/fotky/produkty/interierove-dvere/interierove-dvere-20.aviff",
        width: 1200,
        height: 630,
        alt: "Zakázková výroba interiérových dveří",
      },
    ],
  },

  // Twitter/X
  twitter: {
    title: "Interiérové dveře | Replikyoken.cz",
    description:
      "Zakázková výroba interiérových dveří s důrazem na tradiční řemeslo a vysokou kvalitu zpracování.",
    images: [
      "/assets/fotky/produkty/interierove-dvere/interierove-dvere-20.aviff",
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