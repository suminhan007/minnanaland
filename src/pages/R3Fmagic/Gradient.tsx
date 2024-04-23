import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

type Props = {};
const Gradient: React.FC<Props> = ({ }) => {
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

    const vertexShader = `
      varying vec3 v_position;
      void main() {
        v_position = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec3 v_position;
      void main() {
        vec3 color1 = vec3(0.429, 0.012, 1.0);
        vec3 color2 = vec3(0.018, 0.051, 0.831); 
        float gradient = (v_position.y);
        vec3 color = mix(color1, color2, gradient);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const shaderMaterial = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
    const loader = new GLTFLoader();
    loader.load('miaowen_new.glb', (gltf) => {
      const model = gltf.scene;
      console.log(gltf);

      model.traverse((child) => {
        if (child.isObject3D) {
          child.material = shaderMaterial;
        }
      });
      scene.add(model);
    });
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const sphere = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(sphere);

    scene.background = new THREE.Color("#404040");
    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);
    const light1 = new THREE.DirectionalLight(0xffffff, 2, [-6, 0, 10]);
    scene.add(light1);

    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight();
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 10;

    renderer.render(scene, camera);
    return () => {
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default Gradient;
