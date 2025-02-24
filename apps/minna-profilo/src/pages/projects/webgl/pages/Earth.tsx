//@ts-nocheck
import * as THREE from 'three';
import {useEffect, useRef} from "react";
const Earth = () => {
    const containerRef = useRef(null);
    const init = () => {
        let loader = new THREE.TextureLoader();
        loader.load('earth.jpg', function(texture) {
            let geometry = new THREE.SphereGeometry(200,20,20);

        })
    }
    useEffect(() => {
        const scene = new THREE.scene();
        const camera = new THREE.camera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 500;

        scene.background = new THREE.Color(0xffffff);
        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        init();
        const group = new THREE.Group();
        scene.add(group);
    }, [])

    return <div ref={containerRef}></div>
}
export default Earth;