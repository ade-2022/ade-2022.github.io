var wms_layers = [];

var format_test_0 = new ol.format.GeoJSON();
var features_test_0 = format_test_0.readFeatures(json_test_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_0.addFeatures(features_test_0);
var lyr_test_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_test_0, 
                style: style_test_0,
                interactive: true,
                title: '<img src="styles/legend/test_0.png" /> test'
            });

lyr_test_0.setVisible(true);
var layersList = [lyr_test_0];
lyr_test_0.set('fieldAliases', {'MATERIAU': 'MATERIAU', 'DIAMETRE': 'DIAMETRE', });
lyr_test_0.set('fieldImages', {'MATERIAU': 'ValueRelation', 'DIAMETRE': 'TextEdit', });
lyr_test_0.set('fieldLabels', {'MATERIAU': 'no label', 'DIAMETRE': 'no label', });
lyr_test_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});