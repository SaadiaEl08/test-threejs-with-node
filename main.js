import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const canvas = document.getElementById("canvas");

//create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(165, 165, 165)");
//the camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
//the object 1 :sphere
const geometrySphere = new THREE.SphereGeometry(0.6, 20, 10);
const materialSphere = new THREE.MeshLambertMaterial({ color: "blue", emissive: "#0000" });
const sphere = new THREE.Mesh(geometrySphere, materialSphere);
sphere.position.y = 2;
sphere.position.x = -1;
//the object 2 : donae
const geometryDonate = new THREE.TorusGeometry(1,0.2);
const materialDonate = new THREE.MeshLambertMaterial({ color: "yellow", emissive: "#0000" });
const donate = new THREE.Mesh(geometryDonate, materialDonate);
donate.position.y = 1;
donate.position.x = -1;


scene.add(sphere);
scene.add(donate);

//the light
const light = new THREE.SpotLight( 0xFFFFFF,20);
light.position.set(-0.8, 2.5, 2);
scene.add(light);



//the render
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor=0.05
controls.enableZoom=true

//the animation
const animate = () => {
  requestAnimationFrame(animate);
  donate.rotation.y += 0.01;

  controls.update()
  renderer.render(scene, camera);

};
animate();
// responsive 
window.addEventListener("resize", (param) => {
  camera.aspect=window.innerWidth/window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth,window.innerHeight)
})