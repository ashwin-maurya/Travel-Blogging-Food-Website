import React from "react";
import {
  fetchlifestylewithcontent,
  fetchlifestyle,
} from "@/lib/actions/lifestyle.actions";
import ShareModal from "@/app/_section/Share/ShareModal";
import ShareModalHorizonatal from "@/app/_section/Share/ShareModalHorizonatal";
import ArticleHero from "@/app/_section/SingleArticlesPage/MiddleSection/ArticleHero";
import MainContent from "@/app/_section/SingleArticlesPage/MiddleSection/ArticleMainContent";
import { cache } from "react";
import { notFound } from "next/navigation";

const getlifestyle = cache(async (lifestyleId) => {
  const lifestyle = await fetchlifestylewithcontent(lifestyleId);
  return lifestyle;
});

export async function generateStaticParams() {
  const lifestyle = await fetchlifestyle();
  return lifestyle
    .map((article) => ({
      params: {
        articleId: article._id,
        articleName: article.title,
      },
    }))
    .slice(0, 10);
}

export async function generateMetadata({ params: { lifestyleId } }) {
  const lifestyle = await getlifestyle(lifestyleId);
  if (lifestyle === false) {
    return notFound();
  }
  const { title, imageURL } = lifestyle;
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

export default async function page({ params: { lifestyleId, lifestyleName } }) {
  const lifestyle = await getlifestyle(lifestyleId);
  console.log(lifestyle);
  if (!lifestyle) {
    return notFound();
  }
  const { date, title, category, imageURL, lifestyleContent } = lifestyle;

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
          <MainContent content={lifestyleContent?.content} />
          <div className="mx-0 max-sm:mx-2  2xl:mx-20">
            <div className="">
              <ShareModalHorizonatal title={title} />
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
