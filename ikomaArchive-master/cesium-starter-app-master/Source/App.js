var viewer = new Cesium.Viewer('cesiumContainer');

var entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-35.665181, 139.712565),
    model: {
        url: 'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/Source/modeltry.gltf'
    }
});

viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(-35.665181, 139.712565, 2000.0)});
     
     
