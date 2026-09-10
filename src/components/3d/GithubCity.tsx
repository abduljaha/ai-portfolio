import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

const CityBlocks = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  // Generate random "contributions" simulating a 52x7 GitHub graph
  const count = 52 * 7;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const colors = useMemo(() => {
    const temp = new Float32Array(count * 3);
    const color = new THREE.Color();
    // Use github-like colors but adapted for the dark neon theme
    const themeColors = ['#1e293b', '#0ea5e9', '#3b82f6', '#8b5cf6', '#d946ef'];
    
    for (let i = 0; i < count; i++) {
      // Weight towards 0 (empty)
      const activityLevel = Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0;
      color.set(themeColors[activityLevel]);
      color.toArray(temp, i * 3);
    }
    return temp;
  }, [count]);

  const heights = useMemo(() => {
    const temp = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      temp[i] = Math.random() > 0.6 ? Math.random() * 3 + 0.5 : 0.1;
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (meshRef.current) {
      let i = 0;
      for (let x = 0; x < 52; x++) {
        for (let z = 0; z < 7; z++) {
          const height = heights[i];
          // Gentle wave animation based on time and position
          const wave = Math.sin(state.clock.elapsedTime * 2 + x * 0.2 + z * 0.2) * 0.2;
          const finalHeight = Math.max(0.1, height + wave);
          
          dummy.position.set(x * 1.2 - (52 * 1.2) / 2, finalHeight / 2, z * 1.2 - (7 * 1.2) / 2);
          dummy.scale.set(1, finalHeight, 1);
          dummy.updateMatrix();
          meshRef.current.setMatrixAt(i, dummy.matrix);
          i++;
        }
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]}>
        <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
      </boxGeometry>
      <meshStandardMaterial vertexColors roughness={0.2} metalness={0.8} />
    </instancedMesh>
  );
};

const GithubCity = () => {
  return (
    <section className="py-20 relative z-10 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">3D Contribution City</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Interactive visualization of my coding consistency and GitHub activity.</p>
        </div>
      </div>
      
      <div className="w-full h-[400px] sm:h-[500px] relative glass-card border-y border-gray-200 dark:border-white/5 overflow-hidden cursor-move">
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <p className="text-gray-900 dark:text-white/30 text-sm tracking-widest font-mono select-none">DRAG TO ROTATE</p>
        </div>
        <Canvas camera={{ position: [30, 25, 30], fov: 45 }} shadows>
          <color attach="background" args={['#050505']} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#0ea5e9" />
          <pointLight position={[10, 10, 10]} intensity={1} color="#d946ef" />
          
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <CityBlocks />
          </Float>
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2.2} 
            minPolarAngle={Math.PI / 4}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default GithubCity;
