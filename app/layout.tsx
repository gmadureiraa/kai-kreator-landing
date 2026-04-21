import type { Metadata } from "next";
import { Space_Grotesk, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://kai.kaleidos.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KAI Kreator — Gestao editorial feita por quem ja produziu de verdade",
    template: "%s | KAI Kreator",
  },
  description:
    "Plataforma editorial usada dentro da Kaleidos: pauta, briefings, aprovacoes e analytics num unico lugar. Pensada pra agencias, creators e times de conteudo que precisam entregar todo dia.",
  applicationName: "KAI Kreator",
  authors: [{ name: "Kaleidos", url: "https://kaleidos.com.br" }],
  keywords: [
    "gestao editorial",
    "calendario editorial",
    "produtora de conteudo",
    "agencia de marketing",
    "kaleidos",
    "kai",
    "briefings",
    "aprovacoes de conteudo",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "KAI Kreator",
    title: "KAI Kreator — Gestao editorial feita pra quem publica todo dia",
    description:
      "Pauta, briefing, aprovacao e analytics num unico fluxo. A ferramenta que a Kaleidos usa pra tocar dezenas de clientes ao mesmo tempo.",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "KAI Kreator — Gestao editorial brutalmente eficiente",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAI Kreator",
    description:
      "Pauta, briefing, aprovacao e analytics num unico fluxo. Usado diariamente pela Kaleidos.",
    images: ["/og.svg"],
    creator: "@madureira",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
