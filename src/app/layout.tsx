import type {
  Metadata
} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dokonalé repliky oken | Replikyoken.cz",
  description: "Dokonalé repliky oken pro váš domov | Replikyoken.cz Jaroslav Heindinger",
  icons: {
    icon: [
      {
        url: "/assets/logo/small-logo.png",
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