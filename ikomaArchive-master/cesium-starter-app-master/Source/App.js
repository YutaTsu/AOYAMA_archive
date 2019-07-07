var viewer = new Cesium.Viewer('cesiumContainer');

var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
    Cesium.Cartesian3.fromDegrees(139.424511,  35.395578, 0.0));
var entity = viewer.entities.add(Cesium.Model.fromGltf({
    url: 'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/ThirdParty/Cesium/aoyama_3D_practice.glb',
    modelMatrix : modelMatrix,
    scale : 2000
    }));
viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(139.424511, 35.395578, 45000.0)});