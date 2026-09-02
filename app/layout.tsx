import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizraschet.ru"),
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

const yandexMetrikaScript = `
(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for (var j=0; j<document.scripts.length; j++) {
    if (document.scripts[j].src === r) return;
  }
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=112190330', 'ym');

ym(112190330, 'init', {
  ssr: true,
  webvisor: true,
  clickmap: true,
  ecommerce: 'dataLayer',
  referrer: document.referrer,
  url: location.href,
  accurateTrackBounce: true,
  trackLinks: true
});
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <script dangerouslySetInnerHTML={{ __html: yandexMetrikaScript }} />
      </head>
      <body className="antialiased">
        {children}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<div><img src="https://mc.yandex.ru/watch/112190330" style="position:absolute;left:-9999px" alt="" /></div>',
          }}
        />
      </body>
    </html>
  );
}
