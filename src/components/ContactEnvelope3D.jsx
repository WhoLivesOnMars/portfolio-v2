import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, RoundedBox, Text } from "@react-three/drei";

function ContactEnvelopeModel() {
  const groupRef = useRef();
  const flapRef = useRef();
  const sealRef = useRef();
  const dotRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    groupRef.current.rotation.y = -0.22 + Math.sin(time * 0.7) * 0.12;
    groupRef.current.rotation.x = -0.08 + Math.sin(time * 0.55) * 0.035;
    groupRef.current.position.y = Math.sin(time * 1.05) * 0.06;

    flapRef.current.position.y = 0.48 + Math.sin(time * 1.25) * 0.18;
    flapRef.current.position.z = 0.08 + Math.sin(time * 1.25) * 0.025;

    const pulse = 1 + Math.sin(time * 1.8) * 0.06;
    sealRef.current.scale.set(pulse, pulse, pulse);

    dotRef.current.position.y = 0.72 + Math.sin(time * 1.15) * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.2}>
      <group ref={groupRef} scale={1.02} rotation={[-0.08, -0.22, -0.03]}>
        <group ref={flapRef} position={[0, 0.48, 0.08]}>
          <RoundedBox args={[1.65, 0.72, 0.12]} radius={0.12} smoothness={14}>
            <meshStandardMaterial color="#fffaf2" roughness={0.42} />
          </RoundedBox>

          <mesh position={[0, 0.08, 0.075]}>
            <boxGeometry args={[0.72, 0.028, 0.018]} />
            <meshStandardMaterial color="#7fd8d4" roughness={0.4} />
          </mesh>
        </group>

        <RoundedBox args={[2.75, 1.5, 0.24]} radius={0.18} smoothness={16}>
          <meshStandardMaterial color="#fff3e4" roughness={0.42} />
        </RoundedBox>

        <RoundedBox
          args={[2.35, 1.06, 0.08]}
          radius={0.14}
          smoothness={14}
          position={[0, -0.08, 0.16]}
        >
          <meshStandardMaterial color="#e8fbf5" roughness={0.46} />
        </RoundedBox>

        <RoundedBox
          args={[2.05, 0.045, 0.035]}
          radius={0.025}
          smoothness={8}
          position={[0, 0.39, 0.28]}
        >
          <meshStandardMaterial color="#a7e5dc" roughness={0.42} />
        </RoundedBox>

        <RoundedBox
          args={[0.92, 0.04, 0.032]}
          radius={0.025}
          smoothness={8}
          position={[-0.44, 0.05, 0.29]}
          rotation={[0, 0, -0.42]}
        >
          <meshStandardMaterial color="#bdeee4" roughness={0.42} />
        </RoundedBox>

        <RoundedBox
          args={[0.92, 0.04, 0.032]}
          radius={0.025}
          smoothness={8}
          position={[0.44, 0.05, 0.29]}
          rotation={[0, 0, 0.42]}
        >
          <meshStandardMaterial color="#bdeee4" roughness={0.42} />
        </RoundedBox>

        <group ref={sealRef} position={[0, -0.12, 0.38]}>
  <mesh>
    <sphereGeometry args={[0.18, 32, 32]} />
    <meshStandardMaterial color="#25c7d2" roughness={0.28} />
  </mesh>

  <Text
    position={[0, 0, 0.19]}
    fontSize={0.22}
    color="#fffaf2"
    anchorX="center"
    anchorY="middle"
    outlineWidth={0.004}
    outlineColor="#fffaf2"
  >
    @
  </Text>
</group>

        <mesh ref={dotRef} position={[-1.22, 0.72, 0.32]}>
          <sphereGeometry args={[0.085, 24, 24]} />
          <meshStandardMaterial color="#35c9d4" roughness={0.32} />
        </mesh>

        <mesh position={[1.15, -0.58, 0.31]}>
          <sphereGeometry args={[0.06, 24, 24]} />
          <meshStandardMaterial color="#fffaf2" roughness={0.35} />
        </mesh>
      </group>
    </Float>
  );
}

export default function ContactEnvelope3D() {
  return (
    <div
      className="mx-auto mt-10 h-60 w-full max-w-[340px] md:mx-0 md:h-72 md:max-w-[390px]"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 4.2], fov: 34 }} shadows>
        <ambientLight intensity={1.45} />
        <directionalLight position={[2.5, 3, 4]} intensity={2.2} />
        <directionalLight position={[-3, -1, 2]} intensity={0.65} />

        <ContactEnvelopeModel />

        <ContactShadows
          position={[0, -1.18, -0.25]}
          opacity={0.18}
          scale={3.5}
          blur={2.5}
          far={2}
        />
      </Canvas>
    </div>
  );
}