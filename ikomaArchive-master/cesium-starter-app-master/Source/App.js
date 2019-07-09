var viewer = new Cesium.Viewer('cesiumContainer');

var entity = viewer.entities.add({
    model: url 'https://yutatsu.github.io/AOYAMA_archive/ikomaArchive-master/cesium-starter-app-master/ThirdParty/Cesium/modeltry.glb',
    position : new Cesium.Cartesian3(139.424511,  35.395578),
    });
viewer.camera.flyTo({   
     destination : Cesium.Cartesian3.fromDegrees(139.424511, 35.395578, 45000.0)});
     
     
