import React, { useEffect, useRef, useState } from "react";
import Flex from "../../components/Flex";
import { PageTitle } from "../components/PageTitle";
import Uploader from "../../components/Uploader";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import AutoMedia from "../../components/AutoMedia";
import Title from "../../components/Title";
import ColorPicker from "../../components/ColorPicker";
import Check from "../../components/Check";

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

type Props = {};
const VideoToTransparent: React.FC<Props> = ({}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [colorUrl, setColorUrl] = useState<string>("");
  const [alphaUrl, setAlphaUrl] = useState<string>("");

  const [ratio, setRatio] = useState<number>(1);
  const [background, setBackground] = useState<string>("#fafafb");
  const [removeVideoBg, setRemoveVideoBg] = useState<boolean>(false);
  const [bgUrl, setBgUrl] = useState<string>("");

  useEffect(() => {
    if (canvasRef.current && colorUrl && alphaUrl) {
      const canvas = canvasRef.current;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas });
      renderer.setSize(width, height);
      renderer.setClearColor(background);
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
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.background = removeVideoBg
        ? background
        : "#fafafb";
    }
  }, [background, removeVideoBg]);
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.backgroundImage = bgUrl ? bgUrl : "none";
    }
  }, [bgUrl]);
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
            desc="上传原视频"
            className="radius-12"
          >
            {colorUrl && <AutoMedia url={colorUrl} type="video" />}
          </Uploader>
          <Uploader
            fileType="video/mp4"
            onUpload={(url) => {
              setAlphaUrl(url);
            }}
            desc="上传黑白蒙版视频"
            className="radius-12"
          >
            {alphaUrl && <AutoMedia url={alphaUrl} type="video" />}
          </Uploader>
        </div>
      </Flex>
      <Flex column gap={16}>
        <PageTitle
          mainTitle="Step 02: 预览&调整"
          subTitle="调整并查看动画文件的呈现效果"
        />
        <Flex gap={24} className="width-100">
          <div className="flex column gap-24" style={{ width: "200px" }}>
            <div className="flex column gap-8">
              <Check
                text="背景色"
                checked={removeVideoBg}
                onChange={() => setRemoveVideoBg(!removeVideoBg)}
              />
              {removeVideoBg && (
                <ColorPicker
                  value={background}
                  input={false}
                  onChange={(val) => setBackground(val)}
                />
              )}
            </div>
            <div className="flex column gap-8">
              <Title type="p" title="背景图" className="mb-8" info="" />
              <Uploader
                className="radius-6"
                innerClassName="fs-12 gap-12"
                onUpload={(url) => setBgUrl(url)}
              >
                {bgUrl && <AutoMedia url={bgUrl} />}
              </Uploader>
            </div>
          </div>
          <div
            className="flex-1 flex both-center bg-gray"
            style={{ height: `400px` }}
          >
            <canvas
              ref={canvasRef}
              className="height-100"
              style={{
                aspectRatio: `${ratio}`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></canvas>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default VideoToTransparent;
