var viewer = new Cesium.Viewer('cesiumContainer');

var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
    Cesium.Cartesian3.fromDegrees(35.665181,139.712565, 0.0));
var model = scene.primitives.add(Cesium.Model.fromGltf({
    url : 'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/Source/modeltry2.gltf',
    modelMatrix : modelMatrix,
    scale : 200.0
}));

viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(35.665181, 139.712565, 2000.0)}); 