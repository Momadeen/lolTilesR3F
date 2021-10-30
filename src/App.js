import { Canvas } from "@react-three/fiber";
import { Items } from "./Items";
import { state } from "./util";

function App() {
  return (
    <Canvas
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      onPointerMissed={() => (state.clicked = null)}
    >
      <Items />
    </Canvas>
  );
}

export default App;
