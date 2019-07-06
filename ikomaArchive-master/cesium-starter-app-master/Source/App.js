var viewer = new Cesium.Viewer('cesiumContainer');
var entity = viewer.entities.add({
    position : Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706),
    model : {
        uri : '../../../../Apps/SampleData/models/GroundVehicle/GroundVehicle.glb'
    }
});
viewer.trackedEntity = entity;



