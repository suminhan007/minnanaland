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
    camera.position.set(-1.2, 0.4, 1);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const positions = [
      [-0.8, 0, 0],
      [-0.7, 0, 0],
      [-0.6, 0, 0],
      [-0.5, 0, 0],
      [-0.4, 0, 0],
      [-0.3, 0, 0],
      [-0.2, 0, 0],
      [-0.1, 0, 0],
      [0, 0, 0],
      [0.1, 0, 0],
      [0.2, 0, 0],
      [0.3, 0, 0],
      [0.4, 0, 0],
      [0.5, 0, 0],
      [0.6, 0, 0],
      [0.7, 0, 0],
      [0.8, 0, 0],
    ];

    const group = new THREE.Group();
    const 
    const boxes = positions.map((position, index) => {
      const geometry = new THREE.BoxGeometry(0.02, 1, 1);
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
      box.receiveShadow = true;
      box.castShadow = true;
      box.position.set(position[0], position[1], position[2]);
      group.add(box);
      return box;
    });
    scene.add(group);
    scene.background = new THREE.Color(0x404040);
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);
    const light1 = new THREE.PointLight(0xffffff, 1);
    light1.position.set(-2, 2, 2);
    light1.castShadow = true;
    light1.shadow.radius = 0.2;
    scene.add(light1);

    const pointLight = new THREE.PointLight(0xffffff, 10);
    pointLight.position.set(-3, 1, 2);
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
