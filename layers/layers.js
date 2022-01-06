var wms_layers = [];

var format_AEP__0 = new ol.format.GeoJSON();
var features_AEP__0 = format_AEP__0.readFeatures(json_AEP__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AEP__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AEP__0.addFeatures(features_AEP__0);
var lyr_AEP__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AEP__0, 
                style: style_AEP__0,
                interactive: false,
                title: '<img src="styles/legend/AEP__0.png" /> AEP_'
            });

lyr_AEP__0.setVisible(true);
var layersList = [lyr_AEP__0];
lyr_AEP__0.set('fieldAliases', {'DIAMETRE': 'DIAMETRE', 'MAT': 'MAT', });
lyr_AEP__0.set('fieldImages', {'DIAMETRE': 'TextEdit', 'MAT': 'TextEdit', });
lyr_AEP__0.set('fieldLabels', {'DIAMETRE': 'no label', 'MAT': 'no label', });
lyr_AEP__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});