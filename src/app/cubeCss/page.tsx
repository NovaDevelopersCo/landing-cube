'use client';
import { useCallback, useEffect, useState } from 'react';
import { faces } from './constants';
import { Cube } from './cube';
import './cube.css';
import debounce from 'debounce';

const CubePage = () => {
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
  const debouncedScroll = useCallback(debounce(handleWheel, 50), []);

  return (
    <main className="main" onWheel={debouncedScroll}>
      <Cube rotateXCube={rotateXCube} rotateYCube={rotateYCube} />
      <div className="buttons">
        {faces &&
          faces.map((face) => (
            <button
              key={face.position}
              className="button"
              onClick={() => {
                setRotateXCube(face.rotateXCube);
                setRotateYCube(face.rotateYCube);
              }}
            >
              {face.position}
            </button>
          ))}
      </div>
    </main>
  );
};

export default CubePage;
