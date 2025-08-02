'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Brain/Head Model Component
function BrainModel() {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Brain/Head Sphere */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
        <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#ffffff"
            transparent
            opacity={0.8}
            distort={0.3}
            speed={1.5}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Wireframe Overlay */}
      <Sphere args={[2.05, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.3} />
      </Sphere>

      {/* Inner Core */}
      <Sphere args={[1.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.2} />
      </Sphere>

      {/* Floating Particles around the brain */}
      {Array.from({ length: 20 }, (_, i) => (
        <Float key={i} speed={1 + Math.random() * 2} rotationIntensity={0.2} floatIntensity={0.3}>
          <Sphere
            args={[0.05, 8, 8]}
            position={[
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 8,
            ]}
          >
            <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
          </Sphere>
        </Float>
      ))}

      {/* Neural Network Lines */}
      <NetworkLines />
    </group>
  );
}

// Neural Network Lines Component
function NetworkLines() {
  const linesRef = useRef();

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  // Generate points for neural network connections
  const points = [];
  const connections = [];
  
  // Create random points around a sphere
  for (let i = 0; i < 30; i++) {
    const phi = Math.acos(-1 + (2 * i) / 30);
    const theta = Math.sqrt(30 * Math.PI) * phi;
    const radius = 2.5 + Math.random() * 1;
    
    points.push(
      new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      )
    );
  }

  // Create connections between nearby points
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i].distanceTo(points[j]) < 2.5) {
        connections.push([points[i], points[j]]);
      }
    }
  }

  return (
    <group ref={linesRef}>
      {connections.map((connection, index) => (
        <line key={index}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                connection[0].x, connection[0].y, connection[0].z,
                connection[1].x, connection[1].y, connection[1].z,
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#60a5fa" transparent opacity={0.4} />
        </line>
      ))}
    </group>
  );
}

// Main 3D Scene Component
export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        {/* 3D Model */}
        <BrainModel />
        
        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
