import { useGLTF } from "@react-three/drei";

const handleSign = () => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D');
};

const Sign = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/sign/sign.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
          position={[-1.675, -0.268, -0.2]}
          onClick={() => handleSign()}
        />
      </group>
      {props.children}
    </group>  
  );
};

export default Sign;
useGLTF.preload("/assets/models/sign/sign.glb");
