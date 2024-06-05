import React, { useEffect, useRef, useState } from 'react'
import Flex from '../../components/Flex';
import { PageTitle } from '../components/PageTitle';
import Uploader from '../../components/Uploader';
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import AutoMedia from '../../components/AutoMedia';
import Title from '../../components/Title';
import ColorPicker from '../../components/ColorPicker';
import Input from '../../components/Input';
import Check from '../../components/Check';

const vertexShaderSource = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShaderSource = `
  uniform sampler2D uColorVideo;
  uniform sampler2D uAlphaVideo;
  varying vec2 vUv;
  void main() {
    vec4 color = texture2D(uColorVideo, vUv);
    float alpha = texture2D(uAlphaVideo, vUv).r;
    gl_FragColor = vec4(color.rgb, alpha);
  }
`;

type Props = {

}
const VideoToTransparent: React.FC<Props> = ({

}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [colorUrl, setColorUrl] = useState<string>("");
  const [alphaUrl, setAlphaUrl] = useState<string>("");
  useEffect(() => {
    if (containerRef.current && colorUrl && alphaUrl) {
      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      camera.position.z = 2;

      const geometry = new THREE.PlaneGeometry(4, 2.25);
      const material = new THREE.ShaderMaterial({
        vertexShader: vertexShaderSource,
        fragmentShader: fragmentShaderSource,
        uniforms: {
          uColorVideo: { value: null },
          uAlphaVideo: { value: null },
        },
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const colorVideo = document.createElement("video");
      colorVideo.src = colorUrl;
      colorVideo.loop = true;
      colorVideo.muted = true;
      colorVideo.play();

      const alphaVideo = document.createElement("video");
      alphaVideo.src = alphaUrl;
      alphaVideo.loop = true;
      alphaVideo.muted = true;
      alphaVideo.play();

      const colorVideoTexture = new THREE.VideoTexture(colorVideo);
      const alphaVideoTexture = new THREE.VideoTexture(alphaVideo);

      material.uniforms.uColorVideo.value = colorVideoTexture;
      material.uniforms.uAlphaVideo.value = alphaVideoTexture;

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };

      animate();
    }
  }, [colorUrl, alphaUrl]);

  const [background, setBackground] = useState<string>('#000');
  const [removeVideoBg, setRemoveVideoBg] = useState<boolean>(false);
  return (
    <Flex column className="width-100 height-100 p-24" gap={24}>
      {/* 上传框 */}
      <Flex column gap={16}>
        <PageTitle
          mainTitle="Step 01: 上传文件"
          subTitle="点击或拖拽来上传动画文件，自动识别文件类型"
        />
        <div className="flex gap-12 width-100" style={{ height: "240px" }}>
          <Uploader
            fileType="video/mp4"
            onUpload={(url) => {
              setColorUrl(url);
            }}
            desc="点击或拖拽来上传动画文件"
            className="radius-12"
          >
            {colorUrl && <AutoMedia url={colorUrl} type='video' />}
          </Uploader>
          <Uploader
            fileType="video/mp4"
            onUpload={(url) => {
              setAlphaUrl(url);
            }}
            desc="点击或拖拽来上传动画文件"
            className="radius-12"
          >
            {alphaUrl && <AutoMedia url={alphaUrl} type='video' />}
          </Uploader>
        </div>
      </Flex>
      <Flex column gap={16}>
        <PageTitle
          mainTitle="Step 02: 预览&调整"
          subTitle="调整并查看动画文件的呈现效果"
        />
        <Flex gap={24} className="width-100">
          <div className="flex column gap-24">
            <div>
              <Title type="p" title="背景色" className="mb-8" />
              <ColorPicker
                value={background}
                input={false}
                onChange={(val) => setBackground(val)}
              />
              <Check text="去除动画背景" checked={removeVideoBg} onChange={() => setRemoveVideoBg(!removeVideoBg)} />
            </div>
            <div>
              <Title type="p" title="圆角" className="mb-8" info="" />

            </div>
          </div>
          <div ref={containerRef} style={{ width: "900px", height: "600px", backgroundImage: 'url()' }} />
        </Flex>
      </Flex>
    </Flex >
  )
}
export default VideoToTransparent
