var viewer = new Cesium.Viewer('cesiumContainer');
var tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(33964)
    })
);
viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(139.712565,35.665181, 2000.0)}); 
     
     
     