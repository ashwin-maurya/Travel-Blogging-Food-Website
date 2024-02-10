import React from "react";
import {
  fetcharticleswithcontent,
  fetcharticles,
} from "@/lib/actions/articles.actions";
import ShareModal from "@/app/_section/Share/ShareModal";
import ShareModalHorizonatal from "@/app/_section/Share/ShareModalHorizonatal";
import ArticleHero from "@/app/_section/SingleArticlesPage/MiddleSection/ArticleHero";
import MainContent from "@/app/_section/SingleArticlesPage/MiddleSection/ArticleMainContent";
import Footer from "@/app/_section/SingleArticlesPage/MiddleSection/ArticleFooter";
import { cache } from "react";
import { notFound } from "next/navigation";

const getarticles = cache(async (articleId) => {
  const articles = await fetcharticleswithcontent(articleId);
  return articles;
});

export async function generateStaticParams() {
  const articles = await fetcharticles();
  return articles
    .map((article) => ({
      params: {
        articleId: article._id,
        articleName: article.title,
      },
    }))
    .slice(0, 10);
}

export async function generateMetadata({ params: { articleId } }) {
  const articles = await getarticles(articleId);
  if (articles === false) {
    return notFound();
  }
  const { title, imageURL } = articles;
  return {
    title: title,
    description: "This is the BlogPage Description",
    openGraph: {
      title: title,
      description: "This is the BlogPage of Kahaani Studio Description",
      images: imageURL,
    },
    image: imageURL,
  };
}

export default async function page({ params: { articleId, articleName } }) {
  const articles = await getarticles(articleId);

  if (articles === false) {
    return notFound();
  }
  const { date, title, category, imageURL, articleContent } = articles;

  return (
    <>
      <div className=" mx-auto flex w-full items-start justify-start px-10 max-md:flex-col max-md:px-5 max-sm:px-0">
        <ShareModal title={title} />
        <article className="mx-auto max-w-[70vw] border-r border-black max-md:max-w-full  max-md:border-none max-md:pr-0">
          <ArticleHero
            title={title}
            date={date}
            category={category}
            imageURL={imageURL}
          />
          <MainContent content={articleContent?.content} />
          <div className="mx-0 max-sm:mx-2  2xl:mx-20">
            <div className="">
              <ShareModalHorizonatal title={title} />
            </div>
            <Footer />
          </div>
        </article>
      </div>
    </>
  );
}
