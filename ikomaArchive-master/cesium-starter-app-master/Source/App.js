var viewer = new Cesium.Viewer('cesiumContainer');

var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
    Cesium.Cartesian3.fromDegrees(139.712565,35.665181, 0.0));
var model = viewer.entities.add(Cesium.Model.fromGltf({
    url :'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/Source/modeltry2.gltf',
}));

viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(139.712565,35.665181, 2000.0)}); 