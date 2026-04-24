import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import toothImgSrc from '../assets/dental_hero_3d.png';

/* ── Custom shader: fades white/light BG to transparent ── */
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D tMap;
  varying vec2 vUv;
  void main() {
    vec4 color = texture2D(tMap, vUv);

    // Radial soft fade from center outward
    vec2 center = vec2(0.52, 0.50);
    float dist = length(vUv - center);
    float radialAlpha = 1.0 - smoothstep(0.32, 0.50, dist);

    // Brightness fade: dissolve near-white pixels
    float brightness = (color.r + color.g + color.b) / 3.0;
    float brightnessAlpha = 1.0 - smoothstep(0.82, 0.97, brightness);

    float alpha = radialAlpha * brightnessAlpha;
    if (alpha < 0.015) discard;
    gl_FragColor = vec4(color.rgb, alpha);
  }
`;

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    /* ── Renderer ── */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ── Lights ── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const dir = new THREE.DirectionalLight(0xaad4f5, 1.2);
    dir.position.set(5, 5, 5);
    scene.add(dir);
    const pointLight = new THREE.PointLight(0x99ccff, 2, 20);
    pointLight.position.set(0, 2, 4);
    scene.add(pointLight);

    /* ── Tooth group — rings orbit around this ── */
    const toothGroup = new THREE.Group();
    toothGroup.position.set(2.8, 0, 0);
    scene.add(toothGroup);

    /* ── Tooth image as PlaneGeometry with white-removal shader ── */
    let toothMesh: THREE.Mesh | null = null;
    const loader = new THREE.TextureLoader();
    loader.load(toothImgSrc, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      const mat = new THREE.ShaderMaterial({
        uniforms: { tMap: { value: tex } },
        vertexShader,
        fragmentShader,
        transparent: true,
        depthWrite: false,
        side: THREE.FrontSide,
      });
      toothMesh = new THREE.Mesh(new THREE.PlaneGeometry(5.8, 4.4), mat);
      toothMesh.position.set(0, 0, 0.1); // slightly in front of rings
      toothGroup.add(toothMesh);
    });

    /* ── Orbiting rings inside toothGroup ── */
    const ringBase = new THREE.MeshPhongMaterial({
      color: 0x0066cc, transparent: true, opacity: 0.2, shininess: 80,
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(3.0, 0.045, 16, 100), ringBase.clone());
    ring1.rotation.x = 1.1;
    toothGroup.add(ring1);

    const r2mat = ringBase.clone();
    (r2mat as THREE.MeshPhongMaterial).color.set(0x4fc3f7);
    (r2mat as THREE.MeshPhongMaterial).opacity = 0.14;
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.03, 16, 100), r2mat);
    ring2.rotation.y = 0.5; ring2.rotation.z = 0.9;
    toothGroup.add(ring2);

    const r3mat = ringBase.clone();
    (r3mat as THREE.MeshPhongMaterial).color.set(0x0099ff);
    (r3mat as THREE.MeshPhongMaterial).opacity = 0.1;
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(3.8, 0.025, 16, 100), r3mat);
    ring3.rotation.x = 0.3; ring3.rotation.z = 1.3;
    toothGroup.add(ring3);

    /* ── Floating mini spheres (scene-level) ── */
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0xffffff, transparent: true, opacity: 0.55, shininess: 140, specular: 0xaaddff,
    });
    const sphereData: { mesh: THREE.Mesh; offset: number; speed: number; r: number }[] = [];
    for (let i = 0; i < 10; i++) {
      const size = 0.08 + Math.random() * 0.18;
      const m = sphereMat.clone() as THREE.MeshPhongMaterial;
      m.opacity = 0.3 + Math.random() * 0.4;
      const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(size, 1), m);
      const r = 2.5 + Math.random() * 2;
      const theta = (i / 10) * Math.PI * 2;
      mesh.position.set(Math.cos(theta) * r, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 3);
      scene.add(mesh);
      sphereData.push({ mesh, offset: Math.random() * Math.PI * 2, speed: 0.3 + Math.random() * 0.4, r });
    }

    /* ── Sparkle particles ── */
    const N = 220;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
      color: 0x66aaff, size: 0.055, transparent: true, opacity: 0.5, sizeAttenuation: true,
    }));
    scene.add(particles);

    /* ── Mouse parallax ── */
    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse);

    /* ── Resize ── */
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    /* ── Animation loop ── */
    const clock = new THREE.Clock();
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Rings spin individually
      ring1.rotation.z += 0.004;
      ring2.rotation.x += 0.003;
      ring3.rotation.y += 0.0025;

      // Tooth plane floats and tilts gently inside the group
      if (toothMesh) {
        toothMesh.position.y = Math.sin(t * 0.7) * 0.3;
        toothMesh.rotation.y = Math.sin(t * 0.4) * 0.07;
        toothMesh.rotation.z = Math.sin(t * 0.5) * 0.03;
      }

      // Mini spheres drift
      sphereData.forEach(({ mesh, offset, speed, r }) => {
        const a = t * speed + offset;
        mesh.position.x = Math.sin(a) * r * 0.7 + Math.cos(a * 0.5) * 0.8;
        mesh.position.y = Math.cos(a * 0.7) * 1.8;
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.008;
      });

      // Particles drift upward
      const pArr = pGeo.attributes.position.array as Float32Array;
      for (let i = 1; i < N * 3; i += 3) {
        pArr[i] += 0.003;
        if (pArr[i] > 5) pArr[i] = -5;
      }
      pGeo.attributes.position.needsUpdate = true;

      // Pulse light
      pointLight.intensity = 1.5 + Math.sin(t * 1.8) * 0.6;

      // Mouse parallax on camera
      camera.position.x += (mx * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (my * 0.35 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="hero-canvas" aria-hidden="true" />;
}
