import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useHouseConfigStore } from '../store/houseConfigStore';
import { windowOptions } from '../data/windowOptions';
import { roofTypeOptions } from '../data/roofTypeOptions';
import { roofCoverOptions } from '../data/roofCoverOptions';

const HouseModel: React.FC = () => {
  const { length, width, height, selectedWindowId, roofTypeId, roofCoverId } = useHouseConfigStore();

  // Derived selections
  const selectedWindow = windowOptions.find((w) => w.id === selectedWindowId);
  const selectedRoofType = roofTypeOptions.find((r) => r.id === roofTypeId) ?? roofTypeOptions[0];
  const selectedRoofCover = roofCoverOptions.find((r) => r.id === roofCoverId) ?? roofCoverOptions[0];

  const halfLength = length / 2;
  const halfWidth = width / 2;

  // Materials
  const wallMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.7, metalness: 0.1 }),
    []
  );

  const roofMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: selectedRoofCover.color,
        roughness: 0.6,
        metalness: 0.1,
      }),
    [selectedRoofCover]
  );

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#a5f3fc',
        transparent: true,
        opacity: 0.5,
        roughness: 0.1,
        metalness: 0,
      }),
    []
  );

  // Wall positions
  const walls = [
    { position: [0, height / 2, halfWidth], rotation: [0, 0, 0], size: [length, height, 0.2] }, // Front
    { position: [0, height / 2, -halfWidth], rotation: [0, 0, 0], size: [length, height, 0.2] }, // Back
    { position: [-halfLength, height / 2, 0], rotation: [0, Math.PI / 2, 0], size: [width, height, 0.2] }, // Left
    { position: [halfLength, height / 2, 0], rotation: [0, Math.PI / 2, 0], size: [width, height, 0.2] }, // Right
  ];

  // Roof geometry based on selection
  const roofGeometry = useMemo(() => {
    const overhang = 0.2;
    if (selectedRoofType.type === 'gable') {
      const roofHeight = height * 0.5;
      const shape = new THREE.Shape();
      const halfW = width / 2;
      shape.moveTo(-halfW - overhang, 0);
      shape.lineTo(0, roofHeight);
      shape.lineTo(halfW + overhang, 0);
      shape.closePath();
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: length + overhang * 2,
        bevelEnabled: false,
      });
      geometry.rotateY(Math.PI / 2);
      geometry.translate(-(length + overhang * 2) / 2, height, 0);
      return geometry;
    }
    if (selectedRoofType.type === 'shed') {
      const slopeHeight = height * 0.5;
      const shape = new THREE.Shape();
      const halfW = width / 2;
      shape.moveTo(-halfW - overhang, 0);
      shape.lineTo(halfW + overhang, slopeHeight);
      shape.lineTo(halfW + overhang, 0);
      shape.closePath();
      const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: length + overhang * 2,
        bevelEnabled: false,
      });
      geometry.rotateY(Math.PI / 2);
      geometry.translate(-(length + overhang * 2) / 2, height, 0);
      return geometry;
    }
    const geometry = new THREE.BoxGeometry(length + overhang * 2, 0.2, width + overhang * 2);
    geometry.translate(0, height + 0.1, 0);
    return geometry;
  }, [selectedRoofType, length, width, height]);

  return (
    <group>
      {/* Floor */}
      <mesh position={[0, 0, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[length, width]} />
        <meshStandardMaterial color="#f1f5f9" />
      </mesh>

      {/* Walls */}
      {walls.map((wall, index) => (
        <mesh key={`wall-${index}`} position={wall.position} rotation={wall.rotation} castShadow receiveShadow>
          <boxGeometry args={wall.size} />
          <primitive object={wallMaterial} />
        </mesh>
      ))}

      {/* Roof */}
      <mesh geometry={roofGeometry} castShadow receiveShadow>
        <primitive object={roofMaterial} />
      </mesh>

      {/* Window */}
      {selectedWindow && (
        <mesh
          position={[-length / 4, height / 2, halfWidth + 0.11]}
          castShadow
        >
          <boxGeometry args={[selectedWindow.size[0], selectedWindow.size[1], 0.1]} />
          <primitive object={glassMaterial} />
        </mesh>
      )}
    </group>
  );
};

export default HouseModel;
