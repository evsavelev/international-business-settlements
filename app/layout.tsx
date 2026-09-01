import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://international-business-settlements.evsavelev-region.chatgpt.site",
  ),
  title: {
    default: "Международные расчёты для бизнеса",
    template: "%s | Международные расчёты для бизнеса",
  },
  description:
    "Оплата зарубежных поставщиков, получение платежей из-за рубежа и международные коммерческие расчёты для бизнеса по всей России.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "международные платежи для бизнеса",
    "оплата зарубежного поставщика",
    "международные расчёты",
    "получение платежей из-за рубежа",
    "оплата импортного контракта",
    "SWIFT платеж для бизнеса",
  ],
  openGraph: {
    title: "Международные расчёты для бизнеса",
    description:
      "Оплата зарубежных поставщиков и приём международных платежей для клиентов по всей России.",
    type: "website",
    locale: "ru_RU",
    siteName: "Международные расчёты для бизнеса",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Международные расчёты для бизнеса",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Международные расчёты для бизнеса",
    description:
      "Оплата зарубежных поставщиков и приём международных платежей.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
