import * as THREE from 'three'

// 创建场景
const scene = new THREE.Scene()
/*
* 透视摄像机
* @params参数说明
* @FOV 视野角度 
* @aspect ratio 长宽比
* @near 进截面
* @far 远截面
*/
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
// 创建渲染器
const renderer = new THREE.WebGL1Renderer()
// 设置渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight)
// 将渲染器元素添加到dom元素中
document.body.appendChild(renderer.domElement)

// 创建立方体
const geometry = new THREE.BoxGeometry(1,1,1)
// 创建材质
const material = new THREE.MeshBasicMaterial({color : 0x00ff00})
// 创建网格
const cube = new THREE.Mesh(geometry, material)

// 添加到场景
scene.add(cube)

camera.position.z = 5

function animate () {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera)
}

animate()


