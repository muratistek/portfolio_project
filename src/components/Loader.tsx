import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load">
        <p className="text-sm color text-white-100 font-extrabold my-10">
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;