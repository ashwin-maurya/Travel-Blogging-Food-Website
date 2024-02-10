import React from "react";

export default function FoodCards() {
  const foodCardsData = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/top-view-food-banquet_23-2149893484.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/top-view-food-banquet_23-2149893484.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/top-view-food-banquet_23-2149893484.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/top-view-food-banquet_23-2149893484.jpg",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    // Add more objects for additional cards
  ];
  return (
    <>
      <h1 className="text-center font-CooperHewitt text-4xl font-thin uppercase max-md:text-xl">
        Recent posts
      </h1>

      <main className="flex w-full flex-wrap items-start justify-center gap-10 px-10 py-10 max-md:flex-col max-md:px-6">
        {foodCardsData.map((card, index) => (
          <a
            key={index}
            href="#"
            className="flex group flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
          >
            <img
              className="object-cover w-full min-w-72 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={card.imageUrl}
              alt={card.title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-4xl font-Gamiliademo font-bold text-gray-900 ">
                {card.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 font-HankenGrotesk">
                {card.description}
              </p>
            </div>
          </a>
        ))}
      </main>
    </>
  );
}
