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
                interactive: true,
                title: '<img src="styles/legend/AEP__1.png" /> AEP_'
            });
var format_APP__2 = new ol.format.GeoJSON();
var features_APP__2 = format_APP__2.readFeatures(json_APP__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APP__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP__2.addFeatures(features_APP__2);
var lyr_APP__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_APP__2, 
                style: style_APP__2,
                interactive: true,
    title: 'APP_<br />\
    <img src="styles/legend/APP__2_0.png" /> Autre<br />\
    <img src="styles/legend/APP__2_1.png" /> Cpt<br />\
    <img src="styles/legend/APP__2_2.png" /> debitM<br />\
    <img src="styles/legend/APP__2_3.png" /> indeTer<br />\
    <img src="styles/legend/APP__2_4.png" /> PI<br />\
    <img src="styles/legend/APP__2_5.png" /> pointdeB<br />\
    <img src="styles/legend/APP__2_6.png" /> RP<br />\
    <img src="styles/legend/APP__2_7.png" /> Vanne<br />\
    <img src="styles/legend/APP__2_8.png" /> Ventouse<br />\
    <img src="styles/legend/APP__2_9.png" /> Vidange<br />\
    <img src="styles/legend/APP__2_10.png" /> <br />'
        });

lyr_PlanIGNv2_0.setVisible(true);lyr_AEP__1.setVisible(true);lyr_APP__2.setVisible(true);
var layersList = [lyr_PlanIGNv2_0,lyr_AEP__1,lyr_APP__2];
lyr_AEP__1.set('fieldAliases', {'DIAMETRE': 'DIAMETRE', 'MAT': 'MAT', 'ID': 'ID', });
lyr_APP__2.set('fieldAliases', {'IDAPPAREIL': 'IDAPPAREIL', 'FNAPPAEP': 'FNAPPAEP', });
lyr_AEP__1.set('fieldImages', {'DIAMETRE': 'TextEdit', 'MAT': 'TextEdit', 'ID': 'TextEdit', });
lyr_APP__2.set('fieldImages', {'IDAPPAREIL': 'TextEdit', 'FNAPPAEP': 'TextEdit', });
lyr_AEP__1.set('fieldLabels', {'DIAMETRE': 'no label', 'MAT': 'no label', 'ID': 'inline label', });
lyr_APP__2.set('fieldLabels', {'IDAPPAREIL': 'no label', 'FNAPPAEP': 'no label', });
lyr_APP__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});