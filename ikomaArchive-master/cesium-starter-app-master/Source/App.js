var viewer = new Cesium.Viewer('cesiumContainer');
viewer.dataSources.add(Cesium.KmlDataSource.load("https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/Source/aoyama_model.kml"));
viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(139.712565,35.665181, 2000.0)}); 
     
     
     
     