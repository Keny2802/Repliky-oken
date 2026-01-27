import type {
  Metadata
} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dokonalé repliky oken | Jaroslav Heindinger",
  description: "Jsme malá rodinná firma, vyrábíme s respektem k řemeslu a přání zákazníka. Každému oknu věnujeme maximální péči a chceme, aby vytvořené výrobky sloužily výborně a dlouho. Firma úspěšně funguje druhou generaci a všechny naše zkušenosti promítáme do naší práce. | Replikyoken.cz Jaroslav Heindinger",
  icons: {
    icon: [
      {
        url: "/assets/logo/favicon.ico",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}