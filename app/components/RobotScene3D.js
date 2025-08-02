'use client';

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, RoundedBox, Text, Stars } from "@react-three/drei";
import * as THREE from "three";

function SolarSystem() {
  const systemRef = useRef();
  const planetsRef = useRef([]);
  const ringsRef = useRef([]);

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;

    // Rotate entire solar system slowly
    if (systemRef.current) {
      systemRef.current.rotation.y = time * 0.05; // Even slower system rotation
    }

    // Animate planets orbiting
    planetsRef.current.forEach((planet, i) => {
      if (planet) {
        const speed = 0.15 + i * 0.1; // Much slower, more realistic speeds
        const radius = 2 + i * 1.8; // More spacing between planets
        planet.position.x = Math.cos(time * speed) * radius;
        planet.position.z = Math.sin(time * speed) * radius;
        planet.rotation.y = time * (0.5 + i * 0.15); // Slower rotation
      }
    });

    // Animate rings
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.x = time * (0.1 + i * 0.05); // Slower ring animation
        ring.rotation.z = time * (0.15 + i * 0.075);
      }
    });
  });

  return (
    <group ref={systemRef}>
      {/* Central Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.0, 64, 64]} />
        <meshStandardMaterial 
          color="#FDB813"
          emissive="#FF8C00"
          emissiveIntensity={1.2}
          roughness={1.0}
        />
      </mesh>

      {/* Sun's Corona Effect with multiple layers */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshStandardMaterial 
          color="#FFD700"
          emissive="#FF6347"
          emissiveIntensity={0.6}
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.6, 24, 24]} />
        <meshStandardMaterial 
          color="#FFA500"
          emissive="#FF4500"
          emissiveIntensity={0.3}
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Planet 1 - Mercury (heavily cratered, gray-brown) */}
      <mesh ref={(el) => (planetsRef.current[0] = el)} position={[2, 0, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial 
          color="#8C7853"
          roughness={0.98}
          metalness={0.05}
          bumpScale={0.02}
        />
      </mesh>

      {/* Planet 2 - Venus (thick yellow atmosphere with swirling clouds) */}
      <group ref={(el) => (planetsRef.current[1] = el)} position={[3.5, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial 
            color="#C18F17"
            roughness={0.1}
            metalness={0.0}
          />
        </mesh>
        {/* Venus thick atmosphere */}
        <mesh>
          <sphereGeometry args={[0.36, 32, 32]} />
          <meshStandardMaterial 
            color="#FFCC33"
            emissive="#FF9900"
            emissiveIntensity={0.2}
            transparent
            opacity={0.7}
            roughness={0.0}
          />
        </mesh>
      </group>

      {/* Planet 3 - Earth (realistic blue marble with clouds) */}
      <group ref={(el) => (planetsRef.current[2] = el)} position={[5, 0, 0]}>
        {/* Earth oceans */}
        <mesh>
          <sphereGeometry args={[0.38, 64, 64]} />
          <meshStandardMaterial 
            color="#006994"
            roughness={0.1}
            metalness={0.0}
          />
        </mesh>
        {/* Earth continents - more realistic green-brown */}
        <mesh scale={[1.001, 1.001, 1.001]}>
          <sphereGeometry args={[0.38, 64, 64]} />
          <meshStandardMaterial 
            color="#228B22"
            roughness={0.9}
            transparent
            opacity={0.6}
          />
        </mesh>
        {/* Additional landmass details */}
        <mesh scale={[1.002, 1.002, 1.002]}>
          <sphereGeometry args={[0.38, 32, 32]} />
          <meshStandardMaterial 
            color="#8B4513"
            roughness={0.95}
            transparent
            opacity={0.4}
          />
        </mesh>
        {/* Earth's atmosphere with proper blue glow */}
        <mesh>
          <sphereGeometry args={[0.44, 32, 32]} />
          <meshStandardMaterial 
            color="#87CEEB"
            transparent 
            opacity={0.15}
            roughness={0.0}
            emissive="#4169E1"
            emissiveIntensity={0.1}
          />
        </mesh>
        {/* Realistic Moon with craters */}
        <mesh position={[1.0, 0, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial 
            color="#C0C0C0" 
            roughness={0.95}
            metalness={0.0}
            bumpScale={0.01}
          />
        </mesh>
      </group>

      {/* Planet 4 - Mars (realistic rust color with polar ice caps) */}
      <group ref={(el) => (planetsRef.current[3] = el)} position={[6.5, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.26, 32, 32]} />
          <meshStandardMaterial 
            color="#CD5C5C"
            roughness={0.9}
            metalness={0.0}
          />
        </mesh>
        {/* Mars polar ice caps */}
        <mesh>
          <sphereGeometry args={[0.261, 16, 16]} />
          <meshStandardMaterial 
            color="#FFFFFF"
            roughness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
        {/* Mars dust storms */}
        <mesh>
          <sphereGeometry args={[0.27, 16, 16]} />
          <meshStandardMaterial 
            color="#DEB887"
            transparent
            opacity={0.2}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Planet 5 - Jupiter (realistic gas giant with Great Red Spot) */}
      <group ref={(el) => (planetsRef.current[4] = el)} position={[8, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.75, 64, 64]} />
          <meshStandardMaterial 
            color="#D2691E"
            roughness={0.2}
            metalness={0.0}
          />
        </mesh>
        {/* Jupiter's bands */}
        <mesh scale={[1.001, 1.001, 1.001]}>
          <sphereGeometry args={[0.75, 32, 32]} />
          <meshStandardMaterial 
            color="#CD853F"
            transparent
            opacity={0.6}
            roughness={0.1}
          />
        </mesh>
        {/* Great Red Spot */}
        <mesh position={[0.38, 0.25, 0.62]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial 
            color="#B22222"
            emissive="#8B0000"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>

      {/* Planet 6 - Saturn (pale gold with spectacular ring system) */}
      <group ref={(el) => (planetsRef.current[5] = el)} position={[10, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.62, 48, 48]} />
          <meshStandardMaterial 
            color="#FAD5A5"
            roughness={0.2}
            metalness={0.0}
          />
        </mesh>
        {/* Saturn's complex ring system */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.93, 0.05, 16, 128]} />
          <meshStandardMaterial 
            color="#E6E6FA" 
            transparent 
            opacity={0.9}
            roughness={0.1}
            metalness={0.2}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.05, 0.025, 8, 64]} />
          <meshStandardMaterial 
            color="#DCDCDC" 
            transparent 
            opacity={0.7}
            roughness={0.2}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.18, 0.018, 8, 64]} />
          <meshStandardMaterial 
            color="#F5F5F5" 
            transparent 
            opacity={0.5}
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* Planet 7 - Uranus (tilted ice giant with faint rings) */}
      <group ref={(el) => (planetsRef.current[6] = el)} position={[12, 0, 0]}>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <sphereGeometry args={[0.44, 32, 32]} />
          <meshStandardMaterial 
            color="#4FD0E3"
            roughness={0.1}
            metalness={0.2}
            emissive="#40E0D0"
            emissiveIntensity={0.15}
          />
        </mesh>
        {/* Uranus rings (vertical due to tilt) */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.62, 0.012, 8, 32]} />
          <meshStandardMaterial 
            color="#708090"
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>

      {/* Planet 8 - Neptune (dynamic deep blue with winds) */}
      <group ref={(el) => (planetsRef.current[7] = el)} position={[14, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial 
            color="#4169E1"
            roughness={0.1}
            metalness={0.1}
            emissive="#191970"
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* Neptune's dynamic atmosphere */}
        <mesh>
          <sphereGeometry args={[0.43, 32, 32]} />
          <meshStandardMaterial 
            color="#6495ED"
            transparent
            opacity={0.3}
            roughness={0.0}
            emissive="#4682B4"
            emissiveIntensity={0.1}
          />
        </mesh>
      </group>

      {/* Orbital Rings */}
      {[2, 3.8, 5.4, 7.2, 9.4, 11.8, 14.4, 16.6].map((radius, i) => (
        <mesh key={i} ref={(el) => (ringsRef.current[i] = el)}>
          <torusGeometry args={[radius, 0.008, 8, 128]} />
          <meshBasicMaterial 
            color="#4f46e5" 
            transparent 
            opacity={0.15}
          />
        </mesh>
      ))}

      {/* Asteroid Belt */}
      {Array.from({ length: 40 }, (_, i) => {
        const angle = (i / 40) * Math.PI * 2;
        const radius = 8.5 + Math.random() * 1.2; // Between Mars and Jupiter
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 0.3;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.015 + Math.random() * 0.025, 8, 8]} />
            <meshStandardMaterial 
              color="#696969" 
              roughness={0.95}
              metalness={0.1}
            />
          </mesh>
        );
      })}

      {/* Kuiper Belt Objects */}
      {Array.from({ length: 25 }, (_, i) => {
        const angle = (i / 25) * Math.PI * 2;
        const radius = 17 + Math.random() * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 0.5;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.008 + Math.random() * 0.015, 6, 6]} />
            <meshStandardMaterial 
              color="#4a4a4a" 
              roughness={0.9}
              emissive="#1a1a1a"
              emissiveIntensity={0.1}
            />
          </mesh>
        );
      })}

      {/* Floating Space Debris/Satellites */}
      {Array.from({ length: 15 }, (_, i) => {
        const x = (Math.random() - 0.5) * 25;
        const y = (Math.random() - 0.5) * 12;
        const z = (Math.random() - 0.5) * 25;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <boxGeometry args={[0.03, 0.03, 0.03]} />
            <meshStandardMaterial 
              color="#60a5fa" 
              emissive="#3b82f6"
              emissiveIntensity={0.4}
              transparent
              opacity={0.8}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function RobotScene3D() {
  return (
    <div className="w-full h-full">
      <Canvas 
        shadows 
        camera={{ position: [0, 8, 18], fov: 75 }} 
        style={{ background: 'transparent' }}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.15} color="#ffffff" />
        
        {/* Sun light source - enhanced */}
        <pointLight 
          position={[0, 0, 0]} 
          intensity={4} 
          color="#FFF8DC"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          distance={50}
          decay={2}
        />
        
        {/* Additional stellar lighting */}
        <directionalLight
          position={[20, 20, 15]}
          intensity={0.4}
          color="#E6E6FA"
          castShadow
        />
        
        {/* Subtle fill light from opposite side */}
        <directionalLight
          position={[-15, -10, -10]}
          intensity={0.1}
          color="#4169E1"
        />

        {/* Background Stars - More scattered and natural */}
        <Stars 
          radius={500} 
          depth={300} 
          count={3000} 
          factor={12} 
          saturation={0.05} 
          fade 
          speed={0.1} 
        />

        {/* Solar System */}
        <SolarSystem />

        {/* Interactive Controls - Expanded range */}
        <OrbitControls 
          enablePan={true} 
          enableZoom={true} 
          autoRotate
          autoRotateSpeed={0.2}
          maxDistance={40}
          minDistance={3}
          maxPolarAngle={Math.PI / 1.1}
          minPolarAngle={Math.PI / 12}
        />
      </Canvas>
    </div>
  );
}
