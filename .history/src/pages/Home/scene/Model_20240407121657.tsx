//@ts-nocheck
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = {};
const Model: React.FC<Props> = ({}) => {
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
    const renderer = new THREE.WebGLRenderer();
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

    const boxes = positions.map((position) => {
      const geometry = new THREE.BoxGeometry(0.1, 10, 10);
      const edgesGeometry = new THREE.EdgesGeometry(geometry);
      const material = new THREE.MeshStandardMaterial({
        color: "#504FE7",
        metalness: 1,
        roughness: 0.244,
      });

      const box = new THREE.Mesh(geometry, material);
      box.position.set(position[0], position[1], position[2]);
      scene.add(box);

      return box;
    });
    scene.background = ''

    // const centralBoxGeometry = new THREE.BoxGeometry(5, 5, 5);
    // const centralBoxMaterial = new THREE.MeshPhongMaterial({
    //   color: "blue",
    //   opacity: 0,
    //   transparent: true,
    // });
    // const centralBox = new THREE.Mesh(centralBoxGeometry, centralBoxMaterial);
    // scene.add(centralBox);

    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight();
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 10;

    function animate() {
      requestAnimationFrame(animate);

      boxes.forEach((box) => {
        box.rotation.x += 0.01;
      });

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Model;
