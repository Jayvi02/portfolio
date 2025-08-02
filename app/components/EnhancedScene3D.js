'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Enhanced 3D Brain/AI Model Component
function EnhancedBrainModel() {
  const meshRef = useRef();
  const groupRef = useRef();
  const ringRefs = useRef([]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }

    // Animate the rings
    ringRefs.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.x = state.clock.elapsedTime * (0.5 + i * 0.2);
        ring.rotation.z = state.clock.elapsedTime * (0.3 + i * 0.1);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Main Brain/AI Core */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        <Sphere ref={meshRef} args={[2, 32, 32]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#ffffff"
            transparent
            opacity={0.9}
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      {/* Animated Rings around the core */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => (ringRefs.current[i] = el)}
          position={[0, 0, 0]}
          rotation={[Math.PI / 4, 0, i * Math.PI / 3]}
        >
          <torusGeometry args={[3 + i * 0.5, 0.05, 8, 64]} />
          <meshBasicMaterial 
            color={i === 0 ? "#60a5fa" : i === 1 ? "#8b5cf6" : "#ec4899"}
            transparent 
            opacity={0.6}
          />
        </mesh>
      ))}

      {/* Wireframe Overlay */}
      <Sphere args={[2.1, 16, 16]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.3} />
      </Sphere>

      {/* Neural Nodes */}
      <NeuralNodes />

      {/* Energy Particles */}
      <EnergyParticles />
    </group>
  );
}

// Neural Nodes Component
function NeuralNodes() {
  const nodes = useMemo(() => {
    const nodePositions = [];
    for (let i = 0; i < 20; i++) {
      const phi = Math.acos(-1 + (2 * i) / 20);
      const theta = Math.sqrt(20 * Math.PI) * phi;
      const radius = 2.8;
      
      nodePositions.push([
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      ]);
    }
    return nodePositions;
  }, []);

  return (
    <group>
      {nodes.map((position, index) => (
        <Float key={index} speed={2 + Math.random()} rotationIntensity={0.1} floatIntensity={0.2}>
          <mesh position={position}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Energy Particles Component
function EnergyParticles() {
  const particlesRef = useRef();

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      const radius = 4 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#60a5fa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main Enhanced 3D Scene Component
export default function EnhancedScene3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#8b5cf6" />
        <pointLight position={[0, 10, -10]} intensity={0.6} color="#60a5fa" />
        
        {/* Background Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Enhanced 3D Model */}
        <EnhancedBrainModel />
        
        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.4}
          minPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
