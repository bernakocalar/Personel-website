import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ShaderBackground() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Scene + camera (ortho, full-screen plane)
    const scene = new THREE.Scene();
    const aspect = container.clientWidth / container.clientHeight;
    const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0, 10);
    camera.position.z = 1;

    // Uniforms
    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: {
        value: new THREE.Vector2(container.clientWidth, container.clientHeight),
      },
      u_mouse: { value: new THREE.Vector2(0, 0) },
    };

    // Vertex shader: UV aktarımı
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // Fragment shader: zaman ile hareket eden basit renk
    const fragmentShader = `
      precision mediump float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 vUv;

      void main(){
        vec2 st = vUv;
        vec3 color = 0.5 + 0.5 * cos(u_time + st.xyx + vec3(0.0,2.0,4.0));
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: false,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animasyon
    const clock = new THREE.Clock();
    let rafId;
    const render = () => {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(render);
    };
    render();

    // Resize handler
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      const a = w / h;
      camera.left = -a;
      camera.right = a;
      camera.top = 1;
      camera.bottom = -1;
      camera.updateProjectionMatrix();
      uniforms.u_resolution.value.set(w, h);
    };
    window.addEventListener("resize", onResize);

    // Fare pozisyonunu uniforma yaz
    const onPointerMove = (e) => {
      const r = renderer.domElement.getBoundingClientRect();
      uniforms.u_mouse.value.x = e.clientX - r.left;
      uniforms.u_mouse.value.y = r.height - (e.clientY - r.top);
    };
    window.addEventListener("pointermove", onPointerMove);

    // Temizlik
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%", // Artık sadece nav yüksekliği kadar
        zIndex: 0,
      }}
    />
  );
}
