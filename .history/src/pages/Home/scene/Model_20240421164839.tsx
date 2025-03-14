//@ts-nocheck
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {};
const Model: React.FC<Props> = ({ }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-8, 4, 10);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const positions = [
      [-8, 0, 0],
      [-7, 0, 0],
      [-6, 0, 0],
      [-5, 0, 0],
      [-4, 0, 0],
      [-3, 0, 0],
      [-2, 0, 0],
      [-1, 0, 0],
      [0, 0, 0],
      [1, 0, 0],
      [2, 0, 0],
      [3, 0, 0],
      [4, 0, 0],
      [5, 0, 0],
      [6, 0, 0],
      [7, 0, 0],
      [8, 0, 0],
    ];

    const boxes = positions.map((position, index) => {
      const geometry = new THREE.BoxGeometry(0.1, 10, 10);
      const edgesGeometry = new THREE.EdgesGeometry(geometry);
      const material = new THREE.MeshPhongMaterial({
        color: "#504FE7",
        metalness: 1,
        roughness: 0.244,
        shininess: 100,
        side: THREE.DoubleSide,
        shadowSide: THREE.BackSide,
      });

      const box = new THREE.Mesh(geometry, material);
      box.receiveShadow = index != 0 ? true : false;
      box.castShadow = true;
      box.position.set(position[0], position[1], position[2]);
      scene.add(box);

      return box;
    });
    scene.background = new THREE.Color(0x404040);
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);
    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(-12, 10, 20);
    light1.castShadow = true;
    light1.shadow..width = 512;
    scene.add(light1);

    const pointLight = new THREE.PointLight(0xffffff, 200);
    pointLight.position.set(-5, 4, 10);
    pointLight.castShadow = true;
    scene.add(pointLight);

    function animate() {
      requestAnimationFrame(animate);

      boxes.forEach((box) => {
        box.rotation.x += 0.01;
      });

      renderer.render(scene, camera);
    }
    renderer.render(scene, camera);
    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Model;
