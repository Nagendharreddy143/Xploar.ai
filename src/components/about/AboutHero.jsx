import React, { useEffect, useRef } from "react";
import useAos from "../../hooks/useAos";

// A dedicated component for the 3D animation to keep the code clean
const ThreeCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Dynamically import three.js
    const THREE = window.THREE;
    if (!THREE) {
      console.error("Three.js is not loaded");
      return;
    }

    const currentMount = mountRef.current;
    let scene, camera, renderer, shape;
    let mouseX = 0,
      mouseY = 0;

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Create the 3D shape
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0x4ae3b5, // electric-aqua
      wireframe: true,
    });
    shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    camera.position.z = 30;

    // Mouse move listener
    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Resize listener
    const onResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Interactive rotation
      shape.rotation.y += (mouseX - shape.rotation.y) * 0.05;
      shape.rotation.x += (mouseY - shape.rotation.x) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-full min-h-[300px] lg:min-h-0" />
  );
};

const AboutHero = () => {
  useAos();

  // Effect to load three.js script
  useEffect(() => {
    if (!document.querySelector('script[src*="three.min.js"]')) {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column: Text Content */}
          <div className="relative z-10 pt-16 lg:pt-0" data-aos="fade-right">
            <h1 className="font-space-grotesk text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Mission: Where{" "}
              <span className="bg-gradient-to-r from-electric-aqua to-neon-lilac bg-clip-text text-transparent">
                Curiosity Meets Clarity
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed">
              We're reimagining education for the AI age, empowering learners to
              explore, personalize, and master knowledge.
            </p>
          </div>

          {/* Right Column: 3D Animation */}
          <div
            className="relative h-full w-full"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <ThreeCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
