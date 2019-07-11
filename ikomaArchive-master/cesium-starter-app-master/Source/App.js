var viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider : new Cesium.CesiumTerrainProvider({
        url: Cesium.IonResource.fromAssetId(1)
    })
});
viewer.scene.globe.depthTestAgainstTerrain = true;

var tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
        url: Cesium.IonResource.fromAssetId(33964)
    })
);

viewer.zoomTo(tileset)
    .otherwise(function (error) {
        console.log(error);
    });
