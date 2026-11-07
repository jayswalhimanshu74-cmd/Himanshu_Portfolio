import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDObject = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create geometry and materials
    const geometry = new THREE.IcosahedronGeometry(1.75, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0x171613,      // Elevated charcoal surface
      specular: 0xD6B77A,   // Champagne gold specular highlights
      shininess: 100,
      flatShading: true
    });

    const core = new THREE.Mesh(geometry, material);
    scene.add(core);

    // Wireframe overlay
    const wireGeometry = new THREE.IcosahedronGeometry(1.78, 0);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xD6B77A,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const wireframe = new THREE.Mesh(wireGeometry, wireMaterial);
    core.add(wireframe);

    // Cinematic Lighting
    const mainLight = new THREE.PointLight(0xD6B77A, 2.0, 18);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(0xF4F0E8, 0.7);
    rimLight.position.set(-5, -2, -5);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0x0a0907, 0.4);
    scene.add(ambientLight);

    camera.position.z = 5.8;

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      // Normalize between -0.5 and 0.5
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Resize observer for precise local layout shifts
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);
    }

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      core.rotation.y += 0.003;
      core.rotation.x += 0.0015;

      // Smooth mouse lag
      targetX += (mouseX * 1.5 - targetX) * 0.05;
      targetY += (-mouseY * 1.5 - targetY) * 0.05;

      core.position.x = targetX;
      core.position.y = targetY;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) resizeObserver.disconnect();
      
      // Dispose materials/geometry to free up GPU memory
      geometry.dispose();
      material.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative" />
  );
};

export default ThreeDObject;
