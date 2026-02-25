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
  title: "O nás | Replikyoken.cz",
  description:
    "Jsme malá rodinná firma, která se zabývá výrobou replik historických a špaletových oken. Tradice, precizní řemeslo a individuální přístup ke každému zákazníkovi jsou pro nás prioritou.",

  // canonical URL
  alternates: {
    canonical: "/o-nas",
  },

  // Open Graph
  openGraph: {
    title: "O nás | Replikyoken.cz",
    description:
      "Seznamte se s naším týmem a procesem, jak vyrábíme repliky historických a špaletových oken.",
    url: "/o-nas",
    images: [
      {
        url: "/assets/fotky/reference/pysely-rekonstrukce-historicke-vily/pysely-rekonstrukce-historicke-vily-19.avif",
        width: 1200,
        height: 630,
        alt: "Repliky historických špaletových oken",
      },
    ],
  },

  // Twitter/X
  twitter: {
    title: "O nás | Replikyoken.cz",
    description:
      "Seznamte se s naším týmem a procesem výroby replik historických a špaletových oken.",
    images: [
      "/assets/fotky/reference/pysely-rekonstrukce-historicke-vily/pysely-rekonstrukce-historicke-vily-19.avif",
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