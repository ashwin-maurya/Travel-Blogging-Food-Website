import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
export default function WorkWithMeHero() {
  const handleExploreMoreClick = () => {
    window.scrollTo(0, 650); // Scroll the page by 500px
  };

  return (
    <>
      <div
        className={`flex cursor-pointer mt-20 flex-wrap items-center max-md:mx-5 max-md:mb-5 max-md:flex-col`}
      >
        <h1 className="text-5xl md:hidden max-md:mb-5 tracking-wider font-Gamiliademo font-semibold">
          Work with me!
        </h1>
        <div className="h-[900px] w-2/5 max-md:w-full overflow-hidden bg-gray-800 max-md:h-[300px]">
          <img
            loading="lazy"
            src="https://img.freepik.com/free-photo/top-view-food-banquet_23-2149893484.jpg"
            className="h-full w-full object-cover object-center transition-all duration-500 ease-in-out"
            alt="Work With Me Hero Image"
          />
        </div>
        <div className="w-3/5 max-md:w-full bg-white p-10 font-sans max-md:px-0 max-md:p-0">
          <div className="">
            <h1 className="text-7xl max-md:hidden max-md:mt-3 tracking-wider font-Gamiliademo font-semibold">
              Work with me!
            </h1>

            <div className="description mt-10 max-md:mt-4 w-full font-HankenGrotesk text-2xl ml-3 max-md:ml-0 text-gray-500 ">
              If you are a hospitality business, tourism board, adventure or
              wildlife lodge, a new food business or restaurant in the hood, a
              lifestyle automobile brand, a B&B with a story or a boutique stay,
              a wellness retreat that has its heart set right, I am your person.
            </div>
            <div className="description mt-5 w-full font-HankenGrotesk text-2xl ml-3 max-md:ml-0 text-gray-500 ">
              I bring massive experience in storytelling and branded content
              campaigns on board. From photography to video content to stories
              written just right, Kahaani Studio offers it all.
            </div>
            <div className="description mt-5 w-full font-HankenGrotesk text-2xl ml-3 max-md:ml-0 text-gray-500 ">
              In short, if you have a good story to tell, I am the person to
              make your story better.
            </div>
            <div className="description mt-5 w-full font-HankenGrotesk text-2xl ml-3 max-md:ml-0 text-gray-500 ">
              More so if you are a green brand and focus on pro-planet and
              sustainable practices.
            </div>
          </div>
          <div className="flex justify-center items-center flex-col mt-16">
            <div
              className={`animate-bounce cursor-pointer p-1 w-min rounded-full border-2  border-blue-500  `}
            >
              <IoIosArrowRoundDown className={` text-4xl`} />
            </div>
            <span>Contact Now</span>
          </div>
        </div>
      </div>
    </>
  );
}
