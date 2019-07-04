var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load("https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/Source/aoyama_localshops.kml"));

 
var entity = viewer.entities.add({
    position : Cesium.Cartesian3.fromDegrees(-75.62898254394531, 40.02804946899414, 0.0),
    model : {
    uri : 'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/aoyama_3D_practice.glb'
    }
});

viewer.trackedEntity = entity;

