var wms_layers = [];

var format_Communes_0 = new ol.format.GeoJSON();
var features_Communes_0 = format_Communes_0.readFeatures(json_Communes_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_0.addFeatures(features_Communes_0);
var lyr_Communes_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communes_0, 
                style: style_Communes_0,
                interactive: true,
    title: 'Communes <br />\
    <img src="styles/legend/Communes_0_0.png" /> AURIOL<br />\
    <img src="styles/legend/Communes_0_1.png" /> BONVENTI<br />\
    <img src="styles/legend/Communes_0_2.png" /> GANDON<br />\
    <img src="styles/legend/Communes_0_3.png" /> GOMBERT<br />\
    <img src="styles/legend/Communes_0_4.png" /> GRAL<br />\
    <img src="styles/legend/Communes_0_5.png" /> LACOMBE<br />\
    <img src="styles/legend/Communes_0_6.png" /> LAPEYRE<br />\
    <img src="styles/legend/Communes_0_7.png" /> LARIVIERE<br />\
    <img src="styles/legend/Communes_0_8.png" /> PARRA<br />\
    <img src="styles/legend/Communes_0_9.png" /> SALLIN<br />\
    <img src="styles/legend/Communes_0_10.png" /> <br />'
        });
var format_SecteurF_1 = new ol.format.GeoJSON();
var features_SecteurF_1 = format_SecteurF_1.readFeatures(json_SecteurF_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecteurF_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecteurF_1.addFeatures(features_SecteurF_1);
var lyr_SecteurF_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SecteurF_1, 
                style: style_SecteurF_1,
                interactive: true,
                title: 'SecteurF'
            });

lyr_Communes_0.setVisible(true);lyr_SecteurF_1.setVisible(true);
var layersList = [lyr_Communes_0,lyr_SecteurF_1];
lyr_Communes_0.set('fieldAliases', {'France_COD': 'France_COD', 'France_NOM': 'France_NOM', 'FONTAINIER': 'FONTAINIER', 'SECTEUR': 'SECTEUR', 'France_LIB': 'France_LIB', 'INSEE': 'INSEE', 'Abo': 'Abo', 'Communes_2': 'Communes_2', });
lyr_SecteurF_1.set('fieldAliases', {'France_COD': 'France_COD', 'France_NOM': 'France_NOM', 'FONTAINIER': 'FONTAINIER', 'SECTEUR': 'SECTEUR', 'France_LIB': 'France_LIB', 'INSEE': 'INSEE', 'Abo': 'Abo', 'Communes_2': 'Communes_2', });
lyr_Communes_0.set('fieldImages', {'France_COD': 'TextEdit', 'France_NOM': 'TextEdit', 'FONTAINIER': 'TextEdit', 'SECTEUR': 'TextEdit', 'France_LIB': 'TextEdit', 'INSEE': 'TextEdit', 'Abo': 'TextEdit', 'Communes_2': 'TextEdit', });
lyr_SecteurF_1.set('fieldImages', {'France_COD': 'TextEdit', 'France_NOM': 'TextEdit', 'FONTAINIER': 'TextEdit', 'SECTEUR': 'TextEdit', 'France_LIB': 'TextEdit', 'INSEE': 'TextEdit', 'Abo': 'TextEdit', 'Communes_2': 'TextEdit', });
lyr_Communes_0.set('fieldLabels', {'France_COD': 'no label', 'France_NOM': 'no label', 'FONTAINIER': 'no label', 'SECTEUR': 'no label', 'France_LIB': 'no label', 'INSEE': 'no label', 'Abo': 'no label', 'Communes_2': 'no label', });
lyr_SecteurF_1.set('fieldLabels', {'France_COD': 'no label', 'France_NOM': 'no label', 'FONTAINIER': 'no label', 'SECTEUR': 'no label', 'France_LIB': 'no label', 'INSEE': 'no label', 'Abo': 'no label', 'Communes_2': 'no label', });
lyr_SecteurF_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});