var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__0.addFeatures(features__0);var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
                title: '<img src="styles/legend/_0.png" /> Προκαποδιστριακοί ΟΤΑ'
            });var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__1.addFeatures(features__1);var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                title: '<img src="styles/legend/_1.png" /> Κολώνες Οδοφωτισμού'
            });var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__2.addFeatures(features__2);var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                title: '<img src="styles/legend/_2.png" /> Πίνακες Διανομής'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [baseLayer,lyr__0,lyr__1,lyr__2];
lyr__0.set('fieldAliases', {'EKTASH': 'EKTASH', 'PERIMETROS': 'PERIMETROS', 'NAME_GREEK': 'NAME_GREEK', 'NAME_LATIN': 'NAME_LATIN', 'TYPOS': 'TYPOS', 'ingroup': 'ingroup', 'laberGr': 'laberGr', 'labelEn': 'labelEn', 'FK_KKKAL': 'FK_KKKAL', 'descrGr': 'descrGr', 'descrEn': 'descrEn', 'chart': 'chart', });
lyr__1.set('fieldAliases', {'fulcrum_id': 'fulcrum_id', 'latitude': 'latitude', 'longitude': 'longitude', 'dimotiki_e': 'dimotiki_e', 'topikes_ko': 'topikes_ko', 'typos_isto': 'typos_isto', 'kyriotita_': 'kyriotita_', 'etos_egkat': 'etos_egkat', 'texnologia': 'texnologia', 'etos_egkat_1': 'etos_egkat_1', 'onomastiki': 'onomastiki', 'typos_foti': 'typos_foti', 'katastasi': 'katastasi', 'kodikos_pi': 'kodikos_pi', 'man_allaxthike': 'man_allaxthike', 'man_sinolikes wres pou exei anapsei': 'man_sinolikes wres pou exei anapsei', 'man_xronos zwis (hr)': 'man_xronos zwis (hr)', 'man_pososto xronou zwis': 'man_pososto xronou zwis', 'man_Katanalwsi kolwnas (Watt)': 'man_Katanalwsi kolwnas (Watt)', 'man_Fwtismos kolwnas (Lm)': 'man_Fwtismos kolwnas (Lm)', });
lyr__2.set('fieldAliases', {'fulcrum_id': 'fulcrum_id', 'latitude': 'latitude', 'longitude': 'longitude', 'changeset_': 'changeset_', 'kodikos_pi': 'kodikos_pi', 'dimotiki_e': 'dimotiki_e', 'topiki_koi': 'topiki_koi', 'address_su': 'address_su', 'address_th': 'address_th', 'address_su_1': 'address_su_1', 'address_lo': 'address_lo', 'address_su_2': 'address_su_2', 'address_ad': 'address_ad', 'address_po': 'address_po', 'address_co': 'address_co', 'address_fu': 'address_fu', 'arithmos_p': 'arithmos_p', 'parohos': 'parohos', 'katanalosi': 'katanalosi', });
lyr__0.set('fieldImages', {'EKTASH': 'Hidden', 'PERIMETROS': 'Hidden', 'NAME_GREEK': 'TextEdit', 'NAME_LATIN': 'TextEdit', 'TYPOS': 'Hidden', 'ingroup': 'Hidden', 'laberGr': 'Hidden', 'labelEn': 'Hidden', 'FK_KKKAL': 'Hidden', 'descrGr': 'Hidden', 'descrEn': 'Hidden', 'chart': 'Photo', });
lyr__1.set('fieldImages', {'fulcrum_id': 'Hidden', 'latitude': 'Hidden', 'longitude': 'Hidden', 'dimotiki_e': 'TextEdit', 'topikes_ko': 'TextEdit', 'typos_isto': 'TextEdit', 'kyriotita_': 'TextEdit', 'etos_egkat': 'TextEdit', 'texnologia': 'TextEdit', 'etos_egkat_1': 'TextEdit', 'onomastiki': 'TextEdit', 'typos_foti': 'TextEdit', 'katastasi': 'TextEdit', 'kodikos_pi': 'TextEdit', 'man_allaxthike': 'TextEdit', 'man_sinolikes wres pou exei anapsei': 'TextEdit', 'man_xronos zwis (hr)': 'TextEdit', 'man_pososto xronou zwis': 'TextEdit', 'man_Katanalwsi kolwnas (Watt)': 'TextEdit', 'man_Fwtismos kolwnas (Lm)': 'TextEdit', });
lyr__2.set('fieldImages', {'fulcrum_id': 'Hidden', 'latitude': 'Hidden', 'longitude': 'Hidden', 'changeset_': 'Hidden', 'kodikos_pi': 'TextEdit', 'dimotiki_e': 'TextEdit', 'topiki_koi': 'TextEdit', 'address_su': 'Hidden', 'address_th': 'Hidden', 'address_su_1': 'Hidden', 'address_lo': 'Hidden', 'address_su_2': 'Hidden', 'address_ad': 'Hidden', 'address_po': 'Hidden', 'address_co': 'Hidden', 'address_fu': 'Hidden', 'arithmos_p': 'TextEdit', 'parohos': 'TextEdit', 'katanalosi': 'TextEdit', });
lyr__0.set('fieldLabels', {'NAME_GREEK': 'no label', 'NAME_LATIN': 'no label', 'chart': 'no label', });
lyr__1.set('fieldLabels', {'dimotiki_e': 'no label', 'topikes_ko': 'no label', 'typos_isto': 'no label', 'kyriotita_': 'no label', 'etos_egkat': 'no label', 'texnologia': 'no label', 'etos_egkat_1': 'no label', 'onomastiki': 'no label', 'typos_foti': 'no label', 'katastasi': 'no label', 'kodikos_pi': 'no label', 'man_allaxthike': 'no label', 'man_sinolikes wres pou exei anapsei': 'no label', 'man_xronos zwis (hr)': 'no label', 'man_pososto xronou zwis': 'no label', 'man_Katanalwsi kolwnas (Watt)': 'no label', 'man_Fwtismos kolwnas (Lm)': 'no label', });
lyr__2.set('fieldLabels', {'kodikos_pi': 'no label', 'dimotiki_e': 'no label', 'topiki_koi': 'no label', 'arithmos_p': 'no label', 'parohos': 'no label', 'katanalosi': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});