export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://tosaka-naha-izakaya.vercel.app/sitemap.xml",
    host: "https://tosaka-naha-izakaya.vercel.app",
  };
}
