import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useThree } from "@react-three/fiber";

const CameraController = () => {
  const controlsRef = useRef<OrbitControlsImpl>(null);

  useEffect(() => {
    controlsRef.current?.target.set(0.5, 0, 0);
  }, []);

  return <OrbitControls ref={controlsRef} />;
};

export default CameraController;
