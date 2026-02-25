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
  title: "Vchodové dveře | Replikyoken.cz",
  description:
    "Zakázková výroba vchodových dveří na míru. Precizní české řemeslo, kvalitní materiály a bezpečnostní řešení zaručují dlouhou životnost a dokonalý vzhled.",

  // canonical URL
  alternates: {
    canonical: "/produkty/vchodove-dvere",
  },

  // Open Graph
  openGraph: {
    title: "Vchodové dveře | Replikyoken.cz",
    description:
      "Výroba vchodových dveří - tradiční české řemeslo, kvalitní materiály a bezpečné provedení každého detailu.",
    url: "/produkty/vchodove-dvere",
    images: [
      {
        url: "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-8.avif",
        width: 1200,
        height: 630,
        alt: "Zakázková výroba vchodových dveří",
      },
    ],
  },

  // Twitter/X
  twitter: {
    title: "Vchodové dveře | Replikyoken.cz",
    description:
      "Zakázková výroba vchodových dveří s důrazem na tradiční řemeslo, kvalitu materiálů a bezpečnostní provedení.",
    images: [
      "/assets/fotky/produkty/vchodove-dvere-do-bytu/vchodove-dvere-do-bytu-8.avif",
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