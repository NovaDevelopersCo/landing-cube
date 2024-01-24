'use client';
import React from 'react';
import { useMemo, useEffect, useState } from 'react';
import { faces } from './constants';
import debounce from 'debounce';
import { Buttons } from './buttons';
import { About } from './about';

export const Cube = () => {
  const [rotateXCube, setRotateXCube] = useState(0);
  const [rotateYCube, setRotateYCube] = useState(0);
  const [activeFace, setActiveFace] = useState(0);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const length = faces.length;
    setActiveFace((prevActiveFace) =>
      e.deltaY > 0
        ? (prevActiveFace + 1) % length
        : (prevActiveFace - 1 + length) % length
    );
  };

  useEffect(() => {
    setRotateXCube(faces[activeFace].rotateXCube);
    setRotateYCube(faces[activeFace].rotateYCube);
  }, [activeFace]);

  console.log('render');

  const debouncedScroll = useMemo(() => debounce(handleWheel, 150), []);

  return (
    <main className="main" onWheel={debouncedScroll}>
      <div className="container">
        <div
          className="cube"
          style={{
            transform: `rotateX(${rotateXCube}deg) rotateY(${rotateYCube}deg)`,
          }}
        >
          {faces.map((face, index) => (
            <div
              key={index}
              className={`face ${face.position} flex flex-col justify-center`}
            >
              <Buttons
                setRotateXCube={setRotateXCube}
                setRotateYCube={setRotateYCube}
              />
              <div className="w-full"></div>
              <div className="w-full flex-1 my-5">
                <About />
              </div>
              {index}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};