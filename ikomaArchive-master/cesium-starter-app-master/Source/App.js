var viewer = new Cesium.Viewer('cesiumContainer');
viewer.dataSources.add(Cesium.KmlDataSource.load("https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/Source/aoyama_localshops.kml"));
viewer.camera.flyTo({destination : Cesium.Cartesian3.fromDegrees(139.712533,35.665439,1000);
