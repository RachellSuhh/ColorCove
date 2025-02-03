document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    const h1 = document.querySelector('h1');


    setTimeout(() => {
        box.classList.add('wide');
        h1.classList.add('changed');
    }, 500); 

    setTimeout(() => {
        window.location.href = "Homepage.html"; 
    }, 3000); 
});

loader.load('Lipstick-Render.stl', function (geometry) {
    // Apply a material (adjust color and metalness as needed)
    const material = new THREE.MeshPhysicalMaterial({ 
        color: 0xff5733, // Change this to your desired color
        metalness: 0.7,
        roughness: 0.2,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Center and scale the model
    geometry.computeBoundingBox();
    const center = new THREE.Vector3();
    geometry.boundingBox.getCenter(center);
    mesh.position.sub(center);

    // Adjust camera
    camera.position.z = 100;
});
