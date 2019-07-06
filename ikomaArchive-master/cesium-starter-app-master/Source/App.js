var viewer = new Cesium.Viewer('cesiumContainer');
var entity = viewer.entities.add({
    position : Cesium.Cartesian3.fromDegrees(-139.7124052048, 35.66575165403),
    model : {'https://github.com/AnalyticalGraphicsInc/cesium/blob/master/Apps/SampleData/models/GroundVehicle/GroundVehicle.glb'
    }
});
viewer.trackedEntity = entity;



