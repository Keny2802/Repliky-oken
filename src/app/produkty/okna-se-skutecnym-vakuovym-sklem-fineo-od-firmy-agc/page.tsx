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
  title: "Jednorámová okna s vakuovým sklem Fineo | Replikyoken.cz",
  description:
    "Zakázková výroba jednorámových oken s vakuovým sklem Fineo od AGC. Precizní české řemeslo a inovativní řešení pro maximální izolaci a kvalitu.",

  // canonical URL
  alternates: {
    canonical: "/produkty/okna-se-skutecnym-vakuovym-sklem-fineo-od-firmy-agc",
  },

  // Open Graph
  openGraph: {
    title: "Jednorámová okna s vakuovým sklem Fineo | Replikyoken.cz",
    description:
      "Výroba jednorámových oken s vakuovým sklem Fineo - tradiční design, špaletová okna a špičková tepelná izolace.",
    url: "/produkty/okna-se-skutecnym-vakuovym-sklem-fineo-od-firmy-agc",
    images: [
      {
        url: "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-5.avif",
        width: 1200,
        height: 630,
        alt: "Jednorámová okna s vakuovým sklem Fineo",
      },
    ],
  },

  // Twitter/X
  twitter: {
    title: "Jednorámová okna s vakuovým sklem Fineo | Replikyoken.cz",
    description:
      "Zakázková výroba jednorámových oken s vakuovým sklem Fineo od AGC s důrazem na tradiční řemeslo a maximální kvalitu.",
    images: [
      "/assets/fotky/produkty/jednoramova-okna-s-izolacnim-zasklenim-1/jednoramova-okna-se-spaletou/jednoramova-okna-se-spaletou-5.avif",
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