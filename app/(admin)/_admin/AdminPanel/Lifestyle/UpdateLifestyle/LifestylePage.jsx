"use client";
import React, { useState, useEffect } from "react";
import { deleteLifestyle } from "@/lib/adminactions/admin.lifestyle.actions";
import { toast } from "react-toastify";
import { fetchlifestyle } from "@/lib/actions/lifestyle.actions";
export default function LifesytlePage({ lifestyle }) {
  const [life, setLifestyle] = useState([]);
  useEffect(() => {
    setLifestyle(lifestyle);
  }, [lifestyle]);
  const handleDelete = async (lifestyleId) => {
    const authToken = JSON.parse(localStorage.getItem("authtoken"));
    let isConfirm = window.confirm(
      "Are you sure you want to delete this lifestyle item?"
    );
    if (!isConfirm) {
      return;
    }
    const deleted = await deleteLifestyle(lifestyleId, authToken);
    if (deleted) {
      // Handle success
      const life = await fetchlifestyle();
      setLifestyle(life);
      toast.success("Lifestyle item deleted successfully!");
      // You might want to refresh the lifestyle list here
    } else {
      // Handle failure
      toast.error("Failed to delete lifestyle item!");
    }
  };

  return (
    <>
      <h1 className="text-center font-Gamiliademo text-4xl font-thin max-md:text-xl">
        Latest lifestyle
      </h1>
      <main className="flex w-full flex-wrap items-start justify-center px-10 py-10 max-md:flex-col max-md:px-6">
        {life?.map((lifestyleItem, index) => (
          <div
            key={index}
            className="group w-1/3 rounded px-5 pb-5 max-md:w-full max-md:px-0"
          >
            <div className="">
              <div className="h-full w-full">
                <img
                  loading="lazy"
                  className="max-h-[200px] min-h-[200px] w-full rounded-t object-cover"
                  src={lifestyleItem?.imageURL}
                  alt={lifestyleItem?.title}
                />
              </div>
              <div className="w-full pb-3 pt-2">
                <span className="font-Gamiliademo text-base  font-semibold uppercase tracking-wider text-black group-hover:text-yellow-700 ">
                  {lifestyleItem?.title}{" "}
                </span>
              </div>
              <div className="flex w-full justify-evenly gap-5 py-2">
                <button
                  className="inline-block w-full rounded-md font-sans text-xl bg-gray-700 px-4 py-1 font-medium text-white "
                  onClick={() => handleDelete(lifestyleItem._id)}
                >
                  Delete
                </button>
                <button className="inline-block w-full rounded-md font-sans text-xl bg-gray-700 px-4 py-1 font-medium text-white ">
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
