var viewer = new Cesium.Viewer('cesiumContainer');
var entity = viewer.entities.add({
    position : Cesium.Cartesian3.fromDegrees(139.712565,35.665181, 100),
    model : {
        url :'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/Source/modeltry2.gltf'
    }
});
viewer.trackedEntity = entity;
viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(139.712565,35.665181, 2000.0)}); 