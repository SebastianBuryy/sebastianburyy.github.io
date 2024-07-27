import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ( { isMobile } ) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={isMobile ? 0 : 2} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    // Add a listener for changes to screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    // Define callback function to handle changes to media query
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    // Add the callback function as a listener for changes to media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Remove listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;