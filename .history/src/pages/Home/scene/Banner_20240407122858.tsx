import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { useEffect, useRef } from "react";

type Props = {};
const Banner: React.FC<Props> = ({}) => {
  const containerRef = useRef();
  useEffect(() => {});
  return <div ref={containerRef} />;
};
