"use client";
import React from "react";
export default function Hero({ location }) {
  return (
    <>
      <div className="mx-auto w-full space-y-4 px-40 max-sm:px-3 pb-20 pt-10 max-sm:pt-2 max-sm:pb-5   text-center">
        <h1 className="font-CooperHewitt text-2xl font-semibold uppercase tracking-wide">
          #{location}
        </h1>
        <p className="font-HankenGrotesk text-lg">
          We seriously love Tahiti with our whole hearts, so this time around we
          really enjoyed spending time with those who joined us for our Bucket
          List group expedition! We stayed in a beautiful over the water
          bungalow which allowed ample time to swim with the wildlife!
        </p>

        <p className="font-HankenGrotesk text-lg">
          Cali loved teasing Garrett by throwing his bottle in the water and
          giving us a little heart attack as he was so curious about the water
          this time around! Dorothy had a blast with her new friends from the
          expedition and Manilla learned about so many new sea creatures! See
          you again soon Tahiti!
        </p>
      </div>
    </>
  );
}
