import React from "react";
import ArticlePage from "@/app/(admin)/_admin/AdminPanel/Articles/ArticleUpdate/ArticlePage";
import { fetcharticles } from "@/lib/actions/articles.actions";
export default async function page() {
  const articles = await fetcharticles();
  return (
    <div>
      <ArticlePage articles={articles} />
    </div>
  );
}
