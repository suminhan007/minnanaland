import React, {useEffect, useRef, useState} from "react";
import * as THREE from "three";
import {Icon, LandInput, LandUploader} from "@suminhan/land-design";

const AudioParticleVisualizer = () => {
    const [audioUrl, setAudioUrl] = useState<string>('');
    const [pause, setPause] = useState<boolean>(false);
    const [input,setInput] = useState<string>('');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // 初始化Three.js场景
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 11;
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000);
        containerRef.current.appendChild(renderer.domElement);

        // 创建粒子系统
        const particleCount = 18000;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        // 初始化粒子位置和大小
        const radius = 24;
        for (let i = 0; i < particleCount; i++) {
            const angle = i*(1/180) * Math.PI * 2;
            const distance = Math.ceil(i/180)*0.005 * radius;

            positions[i * 3] = Math.cos(angle) * distance;
            positions[i * 3 + 1] = -4;
            positions[i * 3 + 2] = Math.sin(angle) * distance;

            sizes[i] = 2 * (1 - distance / radius);
        }

        particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        particles.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

        const particleMaterial = new THREE.PointsMaterial({
            color: 0xcccccc,
            size: 0.01,
            sizeAttenuation: true,
        });

        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);
        if(!window.location.hash.includes('audioParticleVisualizer'))return;
        // 音频分析
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 512;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        // 加载音频
        const audioElement = new Audio(audioUrl);
        const source = audioContext.createMediaElementSource(audioElement);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        audioElement.play();
        if(pause){
            audioElement.pause();
        }

        // 动画循环
        const animate = () => {
            requestAnimationFrame(animate);

            // 获取音频数据
            analyser.getByteFrequencyData(dataArray);

            // 更新粒子位置和大小
            const positions = particles.attributes.position.array;
            for (let i = 0; i < particleCount; i++) {
                const angle = i*(1/180) * Math.PI * 2;
                const distance = Math.ceil(i/180)*0.005 * radius;
                const audioValue = dataArray[Math.ceil(i / 180)] / 360;

                positions[i * 3] = Math.cos(angle) * distance;
                positions[i * 3 + 1] = -4 + audioValue;
                positions[i * 3 + 2] = Math.sin(angle) * distance;

                sizes[i] = 2 * (1 - distance / radius);
            }

            particles.attributes.position.needsUpdate = true;
            particles.attributes.size.needsUpdate = true;

            // 渲染场景
            renderer.render(scene, camera);
        };

        animate();

        // 清理函数
        return () => {
            audioElement.pause();
            audioContext.close();
            renderer.dispose();
            containerRef.current&&containerRef.current.removeChild(renderer.domElement);
        };
    }, [audioUrl,pause]);

    const musicList = [
        {id:'1', name:'稻香', author:'周杰伦',src:'./music/daoxiang.mp3'},
        {id:'2', name:'黑夜', author:'陈粒',src:'./music/heiye.mp3'},
        {id:'3', name:'小半', author:'陈粒',src:'./music/xiaoban.mp3'},
        {id:'4', name:'给电影人的情书', author:'蔡琴',src:'./music/geidianyingrendeqingshu.mp3'}
    ]
    const [curMusic,setCurMusic] = useState('');
    useEffect(() => {
        if(!curMusic) return;
        const curMusicSrc = musicList?.filter(i => i.id === curMusic)[0].src;
        if(curMusicSrc){
            setAudioUrl(curMusicSrc);
        }
    }, [curMusic]);
    return <div className={'relative overflow-hidden'} style={{width:'100vw',height:'100vh'}} onClick={()=>setPause(!pause)}>
        <div className={'absolute flex column fs-12 fw-400'} style={{top:24,left:24,zIndex:10}}>
            {
                musicList?.map((item) => <div key={item.id}
                                              onClick={(e) => {
                    e.stopPropagation();
                    setCurMusic(item.id)
                }} className={`${curMusic === item.id ? 'color-white':'color-gray-4' } py-4 cursor-pointer`}>{item.name} - {item.author}</div>)
            }
        </div>
        <div className={'absolute top-0 left-0 width-100 height-100 cursor-pointer'}>
            <div className={'absolute top-8 flex items-center color-gray-3 fs-12 no-wrap'} style={{left:'50%',transform:'translateX(-50%)'}}>
                <LandUploader onUpload={url => setAudioUrl(url)} style={{backgroundColor:'transparent',border:'none',color:'var(--color-text-4)'}} width={'32px'}  height={'20px'}>点击此处</LandUploader>
                或 <LandInput type={'transparent'} className={'mx-8'} style={{fontSize:'12px',color:'var(--color-text-4)'}} placeholder={'输入链接'} value={input} onChange={(val:string) => setInput(val)}/>
                <div style={{height:'12px'}} className={'mr-8'} onClick={() => input && input.includes('.mp3') && setAudioUrl(input)}><Icon name={'check'} strokeWidth={0} size={12}/></div> 来上传音频
            </div>
        </div>
        <div ref={containerRef} className={'width-100 height-100'}/>
    </div>;
};

export default AudioParticleVisualizer;