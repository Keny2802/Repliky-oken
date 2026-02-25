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
  title: "Naše realizace replik oken",
  description:
    "Podívejte se na naše realizace replik historických a špaletových oken. Každé okno vyrábíme s důrazem na kvalitu, tradici a precizní řemeslo.",

  // canonical URL
  alternates: {
    canonical: "/nase-realizace",
  },

  // Open Graph
  openGraph: {
    title: "Naše realizace replik historických oken",
    description:
      "Galerie našich dokončených projektů – repliky špaletových a historických oken na míru.",
    url: "/nase-realizace",
    images: [
      {
        url: "/assets/fotky/reference/pysely-rekonstrukce-historicke-vily/pysely-rekonstrukce-historicke-vily-19.avif", // můžeš změnit na reprezentativní fotku realizace
        width: 1200,
        height: 630,
        alt: "Repliky historických špaletových oken",
      },
    ],
  },

  // Twitter/X
  twitter: {
    title: "Naše realizace replik historických oken",
    description:
      "Galerie našich dokončených replik špaletových a historických oken na míru.",
    images: [
      "/assets/fotky/reference/pysely-rekonstrukce-historicke-vily/pysely-rekonstrukce-historicke-vily-19.avif", // může být stejný obrázek jako OG
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