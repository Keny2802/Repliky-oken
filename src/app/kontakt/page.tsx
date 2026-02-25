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
  title: "Kontakt | Replikyoken.cz",
  description:
    "Kontaktujte nás pro výrobu replik historických a špaletových oken na míru. Rádi zodpovíme vaše dotazy a připravíme individuální nabídku.",

  // canonical URL
  alternates: {
    canonical: "/kontakt",
  },

  // Open Graph
  openGraph: {
    title: "Kontakt | Replikyoken.cz",
    description:
      "Kontaktujte naši rodinnou firmu pro zakázkovou výrobu replik historických a špaletových oken.",
    url: "/kontakt",
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
    title: "Kontakt | Replikyoken.cz",
    description:
      "Kontaktujte naši rodinnou firmu pro výrobu replik historických a špaletových oken na míru.",
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