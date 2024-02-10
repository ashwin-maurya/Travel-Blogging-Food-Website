export default async function robotos() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy"],
      },
    ],
    sitemap: `${process.env.PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
