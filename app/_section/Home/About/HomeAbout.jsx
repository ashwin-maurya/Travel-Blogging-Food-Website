import React from "react";

export default function HomeAbout() {
  return (
    <>
      <div className=" flex h-full w-full flex-row items-center max-md:flex-col-reverse justify-center  max-md:flex-col">
        <div className="mr-5  flex w-full max-w-1/2 flex-col max-md:mr-0 max-md:mt-10 max-md:max-w-full max-md:px-5">
          <h1 className="relative pb-5 font-CooperHewitt text-5xl max-sm:text-lg font-semibold capitalize max-sm:pb-2">
            Who’s Shikha Gautam?
          </h1>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-lg max-sm:text-base">
            She is a storyteller, who fell in love with content creation long
            before it became a buzzword. Shikha was one of the first travel
            bloggers in the country, prior to the times of even Instagram and
            Wordpress!
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-lg max-sm:text-base">
            She forayed into the world of travel, reaching some of the furthest
            places in India and the world, slow-travelling and documenting
            people, culture, topographies, folk tales, legends, mythology and
            more. Like most voracious readers, who turn into even more voracious
            writers, Shikha dribbles between different genres.
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-lg max-sm:text-base">
            She is currently working on her first book, drawing from the
            different lives and geographies she has seen.
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-lg max-sm:text-base">
            Shikha is also working as a consultant and strategist with some of
            India’s most-loved state tourism boards, and leading editorial
            strategy for a number of reputed international hospitality brands
            and tourism boards.
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-lg max-sm:text-base">
            She has also worked with the Times of India, leading its travel
            division for almost a decade, and has more than 15 years of
            expertise as a travel and lifestyle writer, editor and photographer
            and worked with some of the biggest brands in the world of
            hospitality.
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-lg max-sm:text-base">
            <b> Kahaani Studio </b> is her brainchild, aimed at bringing these
            stories out into the world.
          </p>
          <p className="pb-5 max-sm:pb-2 font-HankenGrotesk text-lg max-sm:text-base">
            Stay tuned for stories, lots of them.
          </p>
        </div>
        <div className="relative w-1/2 max-md:w-full cursor-pointer rounded-md">
          <img
            loading="lazy"
            className="m-2 max-md:m-0 h-[400px] w-full bg-white bg-cover bg-center shadow-md max-sm:w-full"
            style={{
              backgroundImage: `url(https://content.presspage.com/uploads/2338/1920_selfie-auf-der-reise-copypeopleimages.com-adobestock-493554509.jpeg?10000)`,
            }}
          ></img>
        </div>
      </div>
    </>
  );
}
