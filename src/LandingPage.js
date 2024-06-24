import * as THREE from "three"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, useGLTF } from "@react-three/drei"
import { EffectComposer, SSAO } from "@react-three/postprocessing"
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier"
import { Suspense } from "react"
import { Text } from "@react-three/drei";
import React, { useState, useEffect } from 'react';

THREE.ColorManagement.legacyMode = false
const baubleMaterial = new THREE.MeshLambertMaterial({ color: "black", emissive: "green", wireframe: true })
const sphereGeometry = new THREE.DodecahedronGeometry(1, 28, 28)
const baubles = [...Array(50)].map(() => ({ scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)] }))

function AnimatedText() {
    const fullText = 'MAE.';
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) {
                clearInterval(interval);
            }
        }, 450); // Change this value to control the speed of the animation
        return () => clearInterval(interval);
    }, []);

    return (
        <Text
            position={[2, 2, 0]}
            fontSize={6}
            color="#212529"
            anchorX="center"   // Center the text horizontally
            anchorY="middle"   // Center the text vertically
        >
            {displayText}
        </Text>
    );
}

function Bauble({ vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread }) {
    const api = useRef()
    useFrame((state, delta) => {
        delta = Math.min(0.1, delta)
        api.current.applyImpulse(
            vec
                .copy(api.current.translation())
                .normalize()
                .multiply({ x: -50 * delta * scale, y: -150 * delta * scale, z: -50 * delta * scale }),
        )
    })
    return (
        <RigidBody linearDamping={0.75} angularDamping={0.15} friction={0.2} position={[r(20), r(20) - 25, r(20) - 10]} ref={api} colliders={false} dispose={null}>
            <BallCollider args={[scale]} />
            <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2 * scale]} args={[0.15 * scale, 0.275 * scale]} />
            <mesh castShadow receiveShadow scale={scale} geometry={sphereGeometry} material={baubleMaterial} />
        </RigidBody>
    )
}

function Pointer({ vec = new THREE.Vector3() }) {
    const ref = useRef()
    useFrame(({ mouse, viewport }) => {
        vec.lerp({ x: (mouse.x * viewport.width) / 2, y: (mouse.y * viewport.height) / 2, z: 0 }, 0.2)
        ref.current.setNextKinematicTranslation(vec)
    })
    return (
        <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
            <BallCollider args={[2]} />
        </RigidBody>
    )
}

const LandingPage = () => (

    <Suspense fallback={null}>
        <Canvas
            shadows
            gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
            camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
            onCreated={(state) => {
                state.gl.toneMappingExposure = 1.5; state.gl.setClearColor('white'); // Set your desired background color here
            }}
        >
            <ambientLight intensity={1} />
            <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="blue" castShadow shadow-mapSize={[512, 512]} />
            <directionalLight position={[0, 5, -4]} intensity={4} />
            <directionalLight position={[0, -15, -0]} intensity={4} color="white" />
            <Physics gravity={[0, 0, 0]}>
                <Pointer />
                {baubles.map((props, i) => <Bauble key={i} {...props} />)}
            </Physics>
            <Environment files="/adamsbridge.hdr" />
            <EffectComposer multisampling={0}>
                <SSAO samples={11} radius={0.15} intensity={20} luminanceInfluence={0.6} color="white" />
                <SSAO samples={21} radius={0.03} intensity={15} luminanceInfluence={0.6} color="white" />
            </EffectComposer>
            <AnimatedText />

        </Canvas>
    </Suspense>
)

export default LandingPage;