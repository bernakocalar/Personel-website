import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Portfolio() {
  // Canvas referansı - DOM elementine erişmek için
  const canvasRef = useRef(null);

  useEffect(() => {
    // ==============================================
    // THREE.JS SETUP
    // ==============================================

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // ==============================================
    // SHADER KODU
    // ==============================================

    const vertexShader = `
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      varying vec2 vUv;
      
      void main() {
        vec2 uv = vUv - 0.5;
        
        float r = sin(uTime * 0.3 + uv.x * 2.0) * 0.5 + 0.5;
        float g = sin(uTime * 0.4 + uv.y * 2.0) * 0.5 + 0.5;
        float b = sin(uTime * 0.5 + (uv.x + uv.y) * 2.0) * 0.5 + 0.5;
        
        float dist = length(uv);
        
        vec3 color1 = vec3(0.2, 0.4, 0.8);
        vec3 color2 = vec3(0.8, 0.2, 0.6);
        vec3 gradient = mix(color1, color2, dist);
        
        vec3 finalColor = mix(gradient, vec3(r, g, b), 0.5);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.0 },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      side: THREE.DoubleSide,
    });

    const geometry = new THREE.PlaneGeometry(10, 10, 32, 32);
    const mesh = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(mesh);

    camera.position.z = 5;

    // ==============================================
    // ANIMASYON DÖNGÜSÜ
    // ==============================================

    let time = 0;
    let animationId;

    function animate() {
      animationId = requestAnimationFrame(animate);

      time += 0.01;
      shaderMaterial.uniforms.uTime.value = time;
      mesh.rotation.z = time * 0.05;

      renderer.render(scene, camera);
    }

    animate();

    // ==============================================
    // RESPONSIVE
    // ==============================================

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // ==============================================
    // CLEANUP - Component unmount olunca temizlik
    // ==============================================

    return () => {
      // Animasyonu durdur
      cancelAnimationFrame(animationId);

      // Event listener'ı kaldır
      window.removeEventListener("resize", handleResize);

      // Three.js kaynaklarını temizle (memory leak önleme)
      geometry.dispose();
      shaderMaterial.dispose();
      renderer.dispose();
    };
  }, []); // Boş dependency array = sadece mount/unmount'ta çalışır

  return (
    <div className="relative">
      {/* Three.js Canvas - Arka plan */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />

      {/* Ana İçerik */}
      <div className="relative max-w-6xl mx-auto px-5 py-16 min-h-screen flex flex-col justify-center text-white">
        {/* Header */}
        <header className="text-center mb-16 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 drop-shadow-lg">
            H. Berna Kocalar
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6">
            Full Stack Developer | Software Engineer
          </p>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed drop-shadow">
            Modern teknolojiler kullanarak kullanıcı odaklı, ölçeklenebilir ve
            sürdürülebilir yazılım çözümleri geliştiren bir yazılım
            geliştiriciyim. React ve Node.js gibi teknolojilerde deneyimliyim ve
            sürekli öğrenmeye kararlıyım.
          </p>
        </header>

        {/* Skills Section */}
        <section className="bg-white/10 backdrop-blur-md rounded-3xl p-10 mb-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-200">Yetenekler</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <p className="text-gray-200">
                JavaScript, React.js, Redux, HTML, CSS, Tailwind CSS
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <p className="text-gray-200">
                Java, Spring Boot, Node.js, Express.js, PostgreSQL
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Diğer</h3>
              <p className="text-gray-200">
                Git, Jest, Cypress, Socket.IO, Material-UI, Three.js
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white/10 backdrop-blur-md rounded-3xl p-10 mb-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-200">Projeler</h2>

          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-blue-200 mb-3">
                Readixon - Full Stack Web Uygulaması
              </h3>
              <p className="text-gray-200 mb-2">
                <strong>Teknolojiler:</strong> React.js, Material-UI,
                Express.js, PostgreSQL, Socket.IO
              </p>
              <p className="text-gray-200 leading-relaxed">
                Kullanıcı kimlik doğrulama, gerçek zamanlı bildirimler ve
                dinamik içerik render eden full-stack web uygulaması
                geliştirdim. Socket.IO ile gerçek zamanlı özellikler entegre
                ettim.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-blue-200 mb-3">
                Pizza Sipariş Uygulaması
              </h3>
              <p className="text-gray-200 mb-2">
                <strong>Teknolojiler:</strong> React.js, React Router, Styled
                Components
              </p>
              <p className="text-gray-200 leading-relaxed">
                Kullanıcıların pizza sipariş edebileceği, sipariş detaylarını
                görüntüleyip onaylayabileceği React tabanlı uygulama.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-blue-200 mb-3">
                Three.js Portfolio - Bu Site!
              </h3>
              <p className="text-gray-200 mb-2">
                <strong>Teknolojiler:</strong> React, Three.js, GLSL Shaders
              </p>
              <p className="text-gray-200 leading-relaxed">
                Özel shader'lar kullanarak animasyonlu gradient background
                oluşturdum. GPU accelerated grafik işleme ile performanslı ve
                göz alıcı görsel efektler.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-blue-200">İletişim</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:berna.kocalar@gmail.com"
              className="bg-white/10 px-8 py-4 rounded-xl hover:bg-blue-300/30 transition-all hover:scale-105"
            >
              📧 Email
            </a>
            <a
              href="tel:+905541392582"
              className="bg-white/10 px-8 py-4 rounded-xl hover:bg-blue-300/30 transition-all hover:scale-105"
            >
              📱 Telefon
            </a>
            <a
              href="#"
              className="bg-white/10 px-8 py-4 rounded-xl hover:bg-blue-300/30 transition-all hover:scale-105"
            >
              💼 LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
