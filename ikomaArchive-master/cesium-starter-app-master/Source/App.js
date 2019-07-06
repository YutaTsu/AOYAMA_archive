var viewer = new Cesium.Viewer('cesiumContainer');
var entity = viewer.entities.add({
    position : Cesium.Cartesian3.fromDegrees(139.7124052048, 35.66575165403),
    model : {
        uri : 'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/Source/aoyama_3D_practice.gltf'
    }
});
viewer.trackedEntity = entity;



