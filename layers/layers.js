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
var format_test_1 = new ol.format.GeoJSON();
var features_test_1 = format_test_1.readFeatures(json_test_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_1.addFeatures(features_test_1);
var lyr_test_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_test_1, 
                style: style_test_1,
                interactive: false,
                title: '<img src="styles/legend/test_1.png" /> test'
            });

lyr_PlanIGNv2_0.setVisible(true);lyr_test_1.setVisible(true);
var layersList = [lyr_PlanIGNv2_0,lyr_test_1];
lyr_test_1.set('fieldAliases', {'MATERIAU': 'MATERIAU', 'DIAMETRE': 'DIAMETRE', });
lyr_test_1.set('fieldImages', {'MATERIAU': 'ValueRelation', 'DIAMETRE': 'TextEdit', });
lyr_test_1.set('fieldLabels', {'MATERIAU': 'no label', 'DIAMETRE': 'no label', });
lyr_test_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});