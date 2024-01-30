import { faces } from './constants';

interface NumberProps {
  setRotateXCube: (number: number) => void;
  setRotateYCube: (number: number) => void;
}

export const Buttons = ({ setRotateXCube, setRotateYCube }: NumberProps) => {
  return (
    <div className="flex justify-center gap-5 bg-slate-600/10 py-4 px-2 rounded-md shadow-inner">
      {faces.length > 0 &&
        faces.map((face) => (
          <button
            key={face.position}
            className=""
            onClick={() => {
              setRotateXCube(face.rotateXCube);
              setRotateYCube(face.rotateYCube);
            }}
          >
            {face.section}
          </button>
        ))}
    </div>
  );
};
