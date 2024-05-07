import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
type Props = {};
const Banner: React.FC<Props> = ({}) => {
  const containerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!containerRef.current) return;
    // 创建场景、相机
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-2, 5, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    // 添加坐标轴
    const axes = new THREE.AxesHelper(5);
    scene.add(axes);
    // 添加控制器
    // 加载模型
    const loader = new GLTFLoader();
    loader.load("banner.glb", function (glb) {
      scene.add(glb.scene);
    });
    const spere = new THREE.SphereGeometry(2);
    const material = new THREE.MeshPhongMaterial({ color: 'blue' });
    const mesh = new THREE.Mesh(spere, material);
    scene.add(mesh)

    // 添加灯光
    const ambientLight = new THREE.AmbientLight(5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight();
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    renderer.render(scene, camera);
  });

  return <div ref={containerRef}></div>;
};

export default Banner;
