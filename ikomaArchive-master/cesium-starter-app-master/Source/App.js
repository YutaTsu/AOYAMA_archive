var viewer = new Cesium.Viewer('cesiumContainer');

var scene = viewer.scene;

var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
    Cesium.Cartesian3.fromDegrees(-75.62898254394531, 40.02804946899414, 0.0));
var model = scene.primitives.add(Cesium.Model.fromGltf({
    url: 'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/aoyama_3D_practice.glb',
    modelMatrix : modelMatrix,
    scale : 200.0
}));