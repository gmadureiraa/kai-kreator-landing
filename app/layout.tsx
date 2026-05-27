import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kai.kaleidos.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KAI Kreator - Fabrica editorial para criar conteudo todo dia",
    template: "%s | KAI Kreator",
  },
  description:
    "Uma fabrica editorial elegante para transformar ideias, briefings, copys, aprovacoes e analytics em conteudo publicado sem perder o ritmo.",
  applicationName: "KAI Kreator",
  authors: [{ name: "Kaleidos", url: "https://kaleidos.com.br" }],
  keywords: [
    "fabrica de conteudo",
    "gestao editorial",
    "calendario editorial",
    "produtora de conteudo",
    "agencia de marketing",
    "kaleidos",
    "kai",
    "aprovacoes de conteudo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "KAI Kreator",
    title: "KAI Kreator - A fabrica editorial da Kaleidos",
    description:
      "Ideias entram soltas. O KAI organiza, produz, aprova, publica e aprende com cada resultado.",
    images: [
      {
        url: "/assets/content-factory.png",
        width: 1717,
        height: 916,
        alt: "Visual 3D de uma fabrica premium de criacao de conteudo",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAI Kreator",
    description:
      "A fabrica editorial para transformar ideias em conteudo publicado.",
    images: ["/assets/content-factory.png"],
    creator: "@ogmadureira",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KAI Kreator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: siteUrl,
  description:
    "Uma fabrica editorial elegante para transformar ideias, briefings, copys, aprovacoes e analytics em conteudo publicado sem perder o ritmo.",
  inLanguage: "pt-BR",
  publisher: {
    "@type": "Organization",
    name: "Kaleidos",
    url: "https://kaleidos.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
