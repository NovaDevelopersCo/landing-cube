'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { faces } from './constants';
import debounce from 'debounce';
import { Buttons } from './Buttons';
import { About } from './About';
import ServiceBlock from './ServiceBlock/ServiceBlock';
import { Hero } from './Hero';
import { Team } from './Team';

export const Cube = () => {
  const [rotateXCube, setRotateXCube] = useState(0);
  const [rotateYCube, setRotateYCube] = useState(0);
  const [activeFace, setActiveFace] = useState(0);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    setActiveFace((prevActiveFace) =>
      e.deltaY > 0
        ? (prevActiveFace + 1) % faces.length
        : (prevActiveFace - 1 + faces.length) % faces.length
    );
  };

  useEffect(() => {
    setRotateXCube(faces[activeFace].rotateXCube);
    setRotateYCube(faces[activeFace].rotateYCube);
  }, [activeFace]);

  console.log('render');

  const debouncedScroll = debounce(handleWheel, 150);

  return (
    <main
      onWheel={debouncedScroll}
      className="flex items-center justify-center min-h-screen bg-gray-700 text-white"
    >
      <div className="perspective w-[var(--cubeSize)] h-[var(--cubeSize)]">
        <div
          className="relative w-full h-full preserve-3d transition-all duration-1000 ease-in-out"
          style={{
            transform: `rotateX(${rotateXCube}deg) rotateY(${rotateYCube}deg)`,
          }}
        >
          {faces.map((face, index) => (
            <div
              key={index}
              className={`absolute w-[var(--cubeSize)] h-[var(--cubeSize)] font-size-5 bg-gray-800 p-5 ${face.position} flex flex-col justify-center`}
            >
              <Buttons
                setRotateXCube={setRotateXCube}
                setRotateYCube={setRotateYCube}
              />
              <div className="overflow-hidden w-full  flex-1 my-5">
                {face.section === 'Home' ? <Hero /> : null}
                {face.section === 'About' ? <About /> : null}
                {face.section === 'Services' ? <ServiceBlock /> : null}
                {face.section === 'Contact' ? 'Contact' : null}
                {face.section === 'Team' ? <Team /> : null}
                {face.section === 'Projects' ? 'Projects' : null}
              </div>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
