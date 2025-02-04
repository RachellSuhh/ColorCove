document.addEventListener('DOMContentLoaded', () => {
    // Get container and canvas
    const container = document.querySelector('.image-content');
    const canvas = document.getElementById('modelCanvas');

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    
    // Set renderer size to match container
    function resizeRenderer() {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
    
    resizeRenderer(); // Initial resize
    window.addEventListener('resize', resizeRenderer); // Resize when window changes

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-5, 10, 7).normalize();
    scene.add(directionalLight);
    
    // Load GLB model
    const loader = new THREE.GLTFLoader();
    loader.load('Lipstick-2.glb', function (gltf) {
        const model = gltf.scene;
        scene.add(model);
    
        // Center and scale the model
        model.position.set(0, 2, 0);
        model.scale.set(20, 20, 10);
    
        // Adjust camera
        camera.position.set(0, 1, 3);
    }, undefined, function (error) {
        console.error('Error loading GLB file:', error);
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    
    animate();
});
