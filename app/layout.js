import "./globals.css";

const siteUrl = "https://tosaka-naha-izakaya.vercel.app";
const title = "炭焼地鶏と旬鮮野菜 とさか - 那覇 居酒屋｜牧志・美栄橋の焼き鳥";
const description =
  "那覇市牧志の居酒屋「炭焼地鶏と旬鮮野菜 とさか」。炭火焼き鳥、地鶏料理、県産の旬野菜を味わえる美栄橋駅近くのお店。住所、営業時間、電話、予約、アクセスをご案内します。";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  verification: {
    google: "ayHXvvh7MAYyEd0yabm5xYrI98qeN_1bfcLkvUPkbrM",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "炭焼地鶏と旬鮮野菜 とさか - 那覇 居酒屋",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
