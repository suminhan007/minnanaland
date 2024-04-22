import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
type Props = {};
const Banner: React.FC<Props> = ({}) => {
  const bannerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!bannerRef.current) return;
    // 创建场景、相机
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-2, 5, 10);
    camera.lookAt(0, 0, 0);

    // 添加坐标轴
    const axes = new THREE.AxesHelper(5);
    scene.add(axes);
    // 添加控制器
    // 加载模型
    const loader = new GLTFLoader();
    loader.load("banner.glb", function (glb) {
      scene.add(glb.scene);
    });
    const plane = new THREE.PlaneGeometry(20, 20);
    const material1 = new THREE.MeshBasicMaterial({
      color: "0xaaaaaa",
      side: THREE.DoubleSide,
      shi
    });
    const cube1 = new THREE.Mesh(plane, material1);
    cube1.rotation.set(-Math.PI / 2, 0, 0);
    cube1.castShadow = true;
    cube1.receiveShadow = true;
    scene.add(cube1);

    const sphere = new THREE.SphereGeometry(2);
    const material = new THREE.MeshStandardMaterial({
      color: "blue",
      metalness: 0.5,
      roughness: 0.22,
    });
    const cube = new THREE.Mesh(sphere, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);
    cube.position.set(0, 2, 0);

    // 添加灯光
    const ambientLight = new THREE.AmbientLight(0x404040, 10);
    scene.add(ambientLight);
    const dictionLight = new THREE.DirectionalLight(0xffffff, 2);
    dictionLight.position.set(2, 5, 10);
    scene.add(dictionLight);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    bannerRef.current.appendChild(renderer.domElement);
    renderer.render(scene, camera);
    return () => {
      bannerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={bannerRef}></div>;
};

export default Banner;
