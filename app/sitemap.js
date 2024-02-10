import { fetcharticles } from "@/lib/actions/articles.actions";

function encodeUrl(url) {
  return url.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default async function sitemap() {
  const articles = await fetcharticles();

  const articleUrls = articles.map((article) => ({
    url: encodeUrl(
      `${process.env.PUBLIC_BASE_URL}/articles/${article?._id}/${article.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    ),
  }));

  return [
    { url: encodeUrl(`${process.env.PUBLIC_BASE_URL}/`) },
    { url: encodeUrl(`${process.env.PUBLIC_BASE_URL}/travel`) },
    { url: encodeUrl(`${process.env.PUBLIC_BASE_URL}/destination`) },
    { url: encodeUrl(`${process.env.PUBLIC_BASE_URL}/lifestyle&food`) },
    { url: encodeUrl(`${process.env.PUBLIC_BASE_URL}/workwithme`) },
    ...articleUrls,
  ];
}
