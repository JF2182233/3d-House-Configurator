import React, { useMemo, useRef } from 'react'; // Import useRef
import { useHouseStore } from '../store/houseStore';
import * as THREE from 'three';

const HouseModel: React.FC = () => {
  const { length, width, height, hasWindow, hasDoor } = useHouseStore();

  // Calculate half dimensions for centering
  const halfLength = length / 2;
  const halfWidth = width / 2;

  // Wall and roof materials
  const wallMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.7,
    metalness: 0.1
  }), []);

  const roofMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#d97706',
    roughness: 0.6,
    metalness: 0.1
  }), []);

  const glassMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#a5f3fc', // This is your light blue color
    transparent: true,
    opacity: 0.5,
    roughness: 0.1,
    metalness: 0,
  }), []);

  const doorMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#9f7b4f',
    roughness: 0.5,
    metalness: 0.2
  }), []);

  // Wall positions
  const walls = [
    // Front wall (with window and door)
    { position: [0, height / 2, halfWidth], rotation: [0, 0, 0], size: [length, height, 0.2] },
    // Back wall
    { position: [0, height / 2, -halfWidth], rotation: [0, 0, 0], size: [length, height, 0.2] },
    // Left wall
    { position: [-halfLength, height / 2, 0], rotation: [0, Math.PI / 2, 0], size: [width, height, 0.2] },
    // Right wall
    { position: [halfLength, height / 2, 0], rotation: [0, Math.PI / 2, 0], size: [width, height, 0.2] },
  ];

  // Roof
  const roofHeight = height * 0.5;

  // --- START NEW CODE FOR YOUR NAME ---
  const textMaterial = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512; // A power of 2 for textures
    canvas.height = 128;
    const context = canvas.getContext('2d');
    if (context) {
      context.fillStyle = '#222222'; // Background for the text plane
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = 'Bold 80px Arial'; // Adjust font size and type as needed
      context.fillStyle = '#E0B500'; // Text color (e.g., gold/yellow)
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText('JENS:))', canvas.width / 2, canvas.height / 2); // Replace 'YOUR NAME HERE' with your actual name
    }
    return new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true });
  }, []);
  // --- END NEW CODE FOR YOUR NAME ---

  return (
    <group>
      {/* Floor */}
      <mesh position={[0, 0, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[length, width]} />
        <meshStandardMaterial color="#f1f5f9" />
      </mesh>

      {/* Walls */}
      {walls.map((wall, index) => (
        <mesh
          key={`wall-${index}`}
          position={wall.position}
          rotation={wall.rotation}
          castShadow
          receiveShadow
        >
          <boxGeometry args={wall.size} />
          <primitive object={wallMaterial} />
        </mesh>
      ))}

      {/* Roof */}
      <mesh
        position={[0, height + roofHeight / 2, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[length + 0.4, roofHeight, width + 0.4]} />
        <primitive object={roofMaterial} />
      </mesh>

      {/* Window - only if toggled on */}
      {hasWindow && (
        <mesh
          position={[-2, height / 2, halfWidth + 0.11]}
          castShadow
        >
          <boxGeometry args={[1.5, 1.5, 0.1]} />
          <primitive object={glassMaterial} />
        </mesh>
      )}

      {/* Door - only if toggled on */}
      {hasDoor && (
        <mesh
          position={[length / 4, 1.0, halfWidth + 0.11]}
          castShadow
        >
          <boxGeometry args={[1.2, 2.0, 0.1]} />
          <primitive object={doorMaterial} />
        </mesh>
      )}

      {/* --- START NEW MESH FOR YOUR NAME --- */}
      {/* Positioned on the front wall (index 0 in walls array) */}
      <mesh
        position={[0, height / 2 + 1, halfWidth + 0.11]} // Adjust Y (height) and Z (offset from wall) as needed
        rotation={[0, 0, 0]}
        castShadow
      >
        <planeGeometry args={[2, 0.5]} /> {/* Adjust size of the plane for your name */}
        <primitive object={textMaterial} />
      </mesh>
      {/* --- END NEW MESH FOR YOUR NAME --- */}

    </group>
  );
};

export default HouseModel;