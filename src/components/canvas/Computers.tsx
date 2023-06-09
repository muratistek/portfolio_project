import { Suspense, useEffect, useState } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Loader from "../Loader"

const Computers = ({ isLaptop = false }) => {
  const gltf = useLoader(GLTFLoader, '/desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        scale={isLaptop ? 0.7 : 1}
        position={isLaptop ? [0, -2.25, -1.5] : [0, -2.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        object={gltf.scene}
      />
    </mesh>
  )
}


const ComputersCanvas = (): JSX.Element => {
  const [isLaptop, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1280px)");
    setIsMobile(mediaQuery.matches);
    const onMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);
  return (
    <div style={{ width: "100%", height: "400px", margin: "0px auto" }}>
      <Canvas
        className='w-full h-auto mini-tablet:inline-block mini-tablet:w-full tablet:inline-block tablet:w-full'
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isLaptop={isLaptop} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>

  )
}

export default ComputersCanvas;

