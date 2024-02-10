"use client";

// Import the deleteArticle function
import { deleteArticle } from "@/lib/adminactions/admin.article.actions";
import { toast } from "react-toastify";
import { fetcharticles } from "@/lib/actions/articles.actions";
import React, { useState, useEffect } from "react";

// Modify the function to use deleteArticle instead of handleDelete
export default function ArticlePage({ articles }) {
  const [article, setArticles] = useState([]);
  useEffect(() => {
    setArticles(articles);
  }, [articles]);
  const handleDelete = async (articleId, location) => {
    const authToken = JSON.parse(localStorage.getItem("authtoken"));
    let isConfirm = window.confirm(
      "Are you sure you want to delete this article?"
    );
    if (!isConfirm) {
      return;
    }
    const deleted = await deleteArticle(articleId, location, authToken);
    if (deleted) {
      // Handle success
      const updatedArticles = await fetcharticles();
      setArticles(updatedArticles);
      toast.success("Article deleted successfully!");
      // You might want to refresh the articles list here
    } else {
      // Handle failure
      toast.error("Failed to delete article!");
    }
  };

  return (
    <>
      <h1 className="text-center font-Gamiliademo text-4xl font-thin max-md:text-xl">
        Latest Articles
      </h1>
      <main className="flex w-full flex-wrap items-start justify-center px-10 py-10 max-md:flex-col max-md:px-6">
        {article?.map((article, index) => (
          <a
            key={index}
            href="#"
            className="group w-1/3 rounded px-5 pb-5 max-md:w-full max-md:px-0"
          >
            <div className="">
              <div className="h-full w-full">
                <img
                  loading="lazy"
                  className="max-h-[200px] min-h-[200px] w-full rounded-t object-cover"
                  src={article?.imageURL}
                  alt={article?.title}
                />
              </div>
              <div className="w-full pb-3 pt-2">
                <span className="font-Gamiliademo text-xl font-semibold uppercase tracking-wider text-black group-hover:text-yellow-700">
                  {article?.title}{" "}
                </span>
              </div>
              <div className="flex w-full justify-evenly gap-5 py-2">
                <button
                  className="inline-block w-full rounded-md font-sans text-xl bg-gray-700 px-4 py-1 font-medium text-white "
                  onClick={() => handleDelete(article._id, article.location)}
                >
                  Delete
                </button>
                <button className="inline-block w-full rounded-md font-sans text-xl bg-gray-700 px-4 py-1 font-medium text-white ">
                  Update
                </button>
              </div>
            </div>
          </a>
        ))}
      </main>
    </>
  );
}
