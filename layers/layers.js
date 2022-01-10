var wms_layers = [];

var lyr_PlanIGNv2_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/cartes/geoportail/r/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Plan IGN v2",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanIGNv2_0, 0]);
var format_AEP__1 = new ol.format.GeoJSON();
var features_AEP__1 = format_AEP__1.readFeatures(json_AEP__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AEP__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AEP__1.addFeatures(features_AEP__1);
var lyr_AEP__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AEP__1, 
                style: style_AEP__1,
                interactive: false,
                title: '<img src="styles/legend/AEP__1.png" /> AEP_'
            });

lyr_PlanIGNv2_0.setVisible(true);lyr_AEP__1.setVisible(true);
var layersList = [lyr_PlanIGNv2_0,lyr_AEP__1];
lyr_AEP__1.set('fieldAliases', {'DIAMETRE': 'DIAMETRE', 'MAT': 'MAT', 'ID': 'ID', });
lyr_AEP__1.set('fieldImages', {'DIAMETRE': 'TextEdit', 'MAT': 'TextEdit', 'ID': 'TextEdit', });
lyr_AEP__1.set('fieldLabels', {'DIAMETRE': 'no label', 'MAT': 'no label', 'ID': 'inline label', });
lyr_AEP__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});