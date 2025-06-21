document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) {
        console.error('Canvas element not found!');
        return;
    }

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.008,
        color: '#ffd700',
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // 3D Orb
    const orbGeometry = new THREE.IcosahedronGeometry(0.7, 0);
    const orbMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        emissive: 0xaa8800,
        metalness: 0.8,
        roughness: 0.2
    });
    const orb = new THREE.Mesh(orbGeometry, orbMaterial);
    scene.add(orb);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        
        // Update particles
        particlesMesh.rotation.y = -0.05 * elapsedTime;

        // Animate Orb
        orb.rotation.y += 0.005;
        orb.rotation.x += 0.005;
        orb.position.y = Math.sin(elapsedTime * 0.5) * 0.1 - 0.1;

        if (mouseX > 0) {
            const cameraX = (mouseX / window.innerWidth - 0.5) * 2;
            const cameraY = -(mouseY / window.innerHeight - 0.5) * 2;
            
            // Move camera slightly for parallax effect
            camera.position.x += (cameraX - camera.position.x) * 0.05;
            camera.position.y += (cameraY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            particlesMesh.rotation.x = -mouseY * 0.00008;
            particlesMesh.rotation.y = -mouseX * 0.00008;
        }

        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
}); 