var viewer = new Cesium.Viewer('cesiumContainer');

var entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(35.665181, 139.712565),
    model: {
        uri: 'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/modeltry.glb'
    }
});
     
     
