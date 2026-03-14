import type {
  Metadata
} from "next";
import "./globals.css";

import ProgressBar from "./components/ProgressBar";
import WAContact from "./components/WAContact";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"),

  // SEO TITLE & DESCRIPTION
  title: {
    default: "Repliky historických a špaletových oken | Jaroslav Heindinger",
    template: "%s | Replikyoken.cz",
  },

  description:
    "Rodinná firma s dlouholetou tradicí vyrábí repliky historických a špaletových oken na míru. Precizní české řemeslo, kvalitní dřevo a výroba na generace.",

  keywords: [
    "repliky oken",
    "špaletová okna",
    "historická okna",
    "dřevěná okna na míru",
    "památková okna",
    "jednorámová okna",
    "dvourámová okna",
    "výroba oken",
    "Jaroslav Heindinger",
  ],

  authors: [{ name: "Jaroslav Heindinger" }],
  creator: "Replikyoken.cz",
  publisher: "Replikyoken.cz",

  // CANONICAL
  alternates: {
    canonical: "/",
  },

  // ROBOTS
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // OPEN GRAPH (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "/",
    siteName: "Replikyoken.cz",
    title: "Repliky historických a špaletových oken na míru",
    description:
      "Zakázková výroba replik historických dřevěných oken. Špaletová, jednorámová i dvourámová okna pro památky, domy a chalupy.",
    images: [
      {
        url: "/assets/fotky/reference/pysely-rekonstrukce-historicke-vily/pysely-rekonstrukce-historicke-vily-19.avif", // dej skutečný obrázek 1200x630
        width: 1200,
        height: 630,
        alt: "Repliky historických špaletových oken",
      },
    ],
  },

  // TWITTER / X
  twitter: {
    card: "summary_large_image",
    title: "Repliky historických a špaletových oken na míru",
    description:
      "Rodinná firma vyrábí repliky historických dřevěných oken s důrazem na tradiční řemeslo.",
    images: ["/assets/fotky/reference/pysely-rekonstrukce-historicke-vily/pysely-rekonstrukce-historicke-vily-19.avif"],
  },

  // ICONS
  icons: {
    icon: [
      {
        url: "/assets/logo/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/assets/logo/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/assets/logo/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    apple: [
      {
        url: "/assets/logo/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  // THEME COLOR (mobilní prohlížeče)
  themeColor: "#ffffff",

  // PWA MANIFEST (pokud máš)
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        <WAContact />
        {children}
      </body>
    </html>
  );
}