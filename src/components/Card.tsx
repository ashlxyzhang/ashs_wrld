import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import * as Stats from "stats.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const Card = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;

    const canvas: any = document.getElementById("threeJsCanvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    // const light = new THREE.DirectionalLight(0xffffff, 0.8 * Math.PI);
    // light.position.set(50, 100, 20);
    // scene.add(light.target);
    // scene.add(light);

    // const light1 = new THREE.AmbientLight(0xffffff, 1);
    // scene.add(light1);

    // const light2 = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    // scene.add(light2);

    // const box = new THREE.BoxGeometry(16, 16, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(box, boxMaterial);
    // scene.add(boxMesh);

    let loadedModel: any;
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/Home/business_card.gltf", (gltfScene) => {
      loadedModel = gltfScene;

      gltfScene.scene.rotation.y = -Math.PI / 2;
      gltfScene.scene.scale.set(15, 15, 15);
      scene.add(gltfScene.scene);
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    // const stats = new Stats();
    // document.body.appendChild(stats.dom);

    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.scale.set(15, 15, 15);
        loadedModel.scene.rotation.y += 0.01;
      }
      //   stats.update();
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);
  return (
    <div>
      <canvas id="threeJsCanvas" />
    </div>
  );
};

export default Card;
