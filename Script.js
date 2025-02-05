document.addEventListener('DOMContentLoaded', () => {
    // Get container and canvas
    const container = document.querySelector('.image-content');
    const modelCanvas= document.getElementById('modelCanvas');

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    
    // Set renderer size to match container
    function resizeRenderer() {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(1200, 700);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
    
    resizeRenderer(); // Initial resize
    window.addEventListener('resize', resizeRenderer); // Resize when window changes

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 10, 7).normalize();
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
    
    // Get reference to canvas element
    const canvas = document.getElementById('modelCanvas');

    // Set the size directly using JavaScript
    canvas.width = window.innerWidth;  // Width based on window size
    canvas.height = window.innerHeight; // Height based on window size
    

    animate();
});

function animate() {
    requestAnimationFrame(animate);
  
    // Example of rotating the camera around the model
    camera.position.x = Math.sin(Date.now() * 0.001) * 5;  // Oscillating X position
    camera.position.z = Math.cos(Date.now() * 0.001) * 5;  // Oscillating Z position
    camera.lookAt(new THREE.Vector3(0, 2, 0));  // Ensure the camera looks at the model's center
  
    // Adjust light based on mouse position
    directionalLight.position.x = mouseX * 10;
    directionalLight.position.y = mouseY * 10;
  
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Inside the loader function, after adding the model to the scene:
loader.load('Lipstick-2.glb', function (gltf) {
    const model = gltf.scene;
    scene.add(model);

    // Center and scale the model
    model.position.set(0, 2, 0);
    model.scale.set(30, 30, 20);

    // Rotate the model by 45 degrees on the Y-axis (in radians)
    model.rotation.y = Math.PI / 4; // 45 degrees in radians

    // Adjust camera
    camera.position.set(0, 1, 3);
}, undefined, function (error) {
    console.error('Error loading GLB file:', error);
});

