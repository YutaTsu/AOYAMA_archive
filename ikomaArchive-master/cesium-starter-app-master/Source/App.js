var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load("https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/Source/aoyama_localshops.kml"));

var scene = viewer.scene;

var modelMatrix + Cesium.Transforms.eastNorthUpToFixesFrame{
    Cesium.Cartesian3.fromDegrees(-75.628982543934531, 40.02804946899414, 0.0)};
var model = scene.primitives.add({url : 'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/aoyama_3d_practice.dae',
    modelMatrix : modelMatrix,
    scale : 200.0
});