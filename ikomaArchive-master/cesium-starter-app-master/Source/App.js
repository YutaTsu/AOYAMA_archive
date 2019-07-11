Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NmU4OThjZi0xNjRmLTRjZWYtYmE0Yy03MDM2NzdmZjFjOTMiLCJpZCI6MTMwMzcsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NjI0MDc0ODN9.S-viGfl3AwKBpxPIz-mSfYtMyRUSTD5keEqfjtVYK9M';

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
