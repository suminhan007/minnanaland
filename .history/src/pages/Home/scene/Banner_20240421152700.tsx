import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type Props = {};
const Banner: React.FC<Props> = ({}) => {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;
    // 创建场景、相机
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // 加载模型
    const loader = new THREE.GLTFLoader();
    loader.load("banner.glb", function (glb) {
      scene.add(glb.scene);
    });

    // 添加灯光
    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight();
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  });

  return <div ref={containerRef} />;
};

export default Banner;
