var viewer = new Cesium.Viewer('cesiumContainer');

var scene = viewer.scene;

var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
    Cesium.Cartesian3.fromDegrees(139.424511,  35.395578, 0.0));
var model = scene.primitives.add(Cesium.Model.fromGltf({
    url: 'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/ThirdParty/Cesium/aoyama_3D_practice.glb',
    modelMatrix : modelMatrix,
    scale : 200000.0
}));