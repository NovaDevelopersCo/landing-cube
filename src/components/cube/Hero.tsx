import Image from 'next/image';
import React from 'react';

export const Hero = () => {
  return (
    <>
      <div className="flex gap-6">
        <div className="w-1/2">
          <h1 className="text-4xl leading-[50px] font-bold text-white">
            Build Your Awesome Product
          </h1>
        </div>
        <div className="w-1/2">
          <Image
            className="rounded-md"
            width={300}
            height={300}
            alt="about"
            src="/img/mainImage.jpg"
          />
        </div>
      </div>
      <p className="text-white/70 text-center mt-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, culpa.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        aspernatur in, tempore iure eum ipsam nostrum.
      </p>
    </>
  );
};
