import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Banner() {
    const {scene} = useGLTF()
  return <Canvas></Canvas>;
}
