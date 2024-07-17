var wms_layers = [];


        var lyr_MapaBase_0 = new ol.layer.Tile({
            'title': 'Mapa Base',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Casablanca_1 = new ol.format.GeoJSON();
var features_Casablanca_1 = format_Casablanca_1.readFeatures(json_Casablanca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casablanca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casablanca_1.addFeatures(features_Casablanca_1);
var lyr_Casablanca_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casablanca_1, 
                style: style_Casablanca_1,
                popuplayertitle: "Casablanca",
                interactive: true,
                title: '<img src="styles/legend/Casablanca_1.png" /> Casablanca'
            });
var format_ComunasVRegin_2 = new ol.format.GeoJSON();
var features_ComunasVRegin_2 = format_ComunasVRegin_2.readFeatures(json_ComunasVRegin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunasVRegin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunasVRegin_2.addFeatures(features_ComunasVRegin_2);
var lyr_ComunasVRegin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunasVRegin_2, 
                style: style_ComunasVRegin_2,
                popuplayertitle: "Comunas V Región",
                interactive: true,
                title: '<img src="styles/legend/ComunasVRegin_2.png" /> Comunas V Región'
            });
var format_TerrenosAgrcolas_3 = new ol.format.GeoJSON();
var features_TerrenosAgrcolas_3 = format_TerrenosAgrcolas_3.readFeatures(json_TerrenosAgrcolas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrenosAgrcolas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrenosAgrcolas_3.addFeatures(features_TerrenosAgrcolas_3);
var lyr_TerrenosAgrcolas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrenosAgrcolas_3, 
                style: style_TerrenosAgrcolas_3,
                popuplayertitle: "Terrenos Agrícolas",
                interactive: true,
                title: '<img src="styles/legend/TerrenosAgrcolas_3.png" /> Terrenos Agrícolas'
            });
var format_LmiteUrbano_4 = new ol.format.GeoJSON();
var features_LmiteUrbano_4 = format_LmiteUrbano_4.readFeatures(json_LmiteUrbano_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmiteUrbano_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmiteUrbano_4.addFeatures(features_LmiteUrbano_4);
var lyr_LmiteUrbano_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmiteUrbano_4, 
                style: style_LmiteUrbano_4,
                popuplayertitle: "Límite Urbano",
                interactive: true,
                title: '<img src="styles/legend/LmiteUrbano_4.png" /> Límite Urbano'
            });
var format_RedHidrogrfica_5 = new ol.format.GeoJSON();
var features_RedHidrogrfica_5 = format_RedHidrogrfica_5.readFeatures(json_RedHidrogrfica_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedHidrogrfica_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedHidrogrfica_5.addFeatures(features_RedHidrogrfica_5);
var lyr_RedHidrogrfica_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedHidrogrfica_5, 
                style: style_RedHidrogrfica_5,
                popuplayertitle: "Red Hidrográfica",
                interactive: true,
                title: 'Red Hidrográfica'
            });
var group_LmitesAdministrativos = new ol.layer.Group({
                                layers: [lyr_Casablanca_1,lyr_ComunasVRegin_2,],
                                fold: "open",
                                title: "Límites Administrativos"});

lyr_MapaBase_0.setVisible(true);lyr_Casablanca_1.setVisible(true);lyr_ComunasVRegin_2.setVisible(true);lyr_TerrenosAgrcolas_3.setVisible(true);lyr_LmiteUrbano_4.setVisible(true);lyr_RedHidrogrfica_5.setVisible(true);
var layersList = [lyr_MapaBase_0,group_LmitesAdministrativos,lyr_TerrenosAgrcolas_3,lyr_LmiteUrbano_4,lyr_RedHidrogrfica_5];
lyr_Casablanca_1.set('fieldAliases', {'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', });
lyr_ComunasVRegin_2.set('fieldAliases', {'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', });
lyr_TerrenosAgrcolas_3.set('fieldAliases', {'ID': 'ID', 'ID_USO': 'ID_USO', 'ID_SUBUSO': 'ID_SUBUSO', 'ID_ESTRUC': 'ID_ESTRUC', 'ID_COBER': 'ID_COBER', 'ID_ALTU': 'ID_ALTU', 'ID_TIFO': 'ID_TIFO', 'ID_STIF': 'ID_STIF', 'ID_ESP1': 'ID_ESP1', 'ID_ESP2': 'ID_ESP2', 'ID_ESP3': 'ID_ESP3', 'ID_ESP4': 'ID_ESP4', 'ID_ESP5': 'ID_ESP5', 'ID_ESP6': 'ID_ESP6', 'ORG_ESP_CC': 'ORG_ESP_CC', 'ID_ESP_CC1': 'ID_ESP_CC1', 'ID_ESP_CC2': 'ID_ESP_CC2', 'CODREG': 'CODREG', 'CODPROV': 'CODPROV', 'CODCOM': 'CODCOM', 'USO_TIERRA': 'USO_TIERRA', 'USO': 'USO', 'SUBUSO': 'SUBUSO', 'ESTRUCTURA': 'ESTRUCTURA', 'COBERTURA': 'COBERTURA', 'ALTURA': 'ALTURA', 'TIPO_FORES': 'TIPO_FORES', 'SUBTIPOFOR': 'SUBTIPOFOR', 'ESPECI1_CI': 'ESPECI1_CI', 'ESPECI2_CI': 'ESPECI2_CI', 'ESPECI3_CI': 'ESPECI3_CI', 'ESPECI4_CI': 'ESPECI4_CI', 'ESPECI5_CI': 'ESPECI5_CI', 'ESPECI6_CI': 'ESPECI6_CI', 'ESPECI1_CO': 'ESPECI1_CO', 'ESPECI2_CO': 'ESPECI2_CO', 'ESPECI3_CO': 'ESPECI3_CO', 'ESPECI4_CO': 'ESPECI4_CO', 'ESPECI5_CO': 'ESPECI5_CO', 'ESPECI6_CO': 'ESPECI6_CO', 'ESP_C1': 'ESP_C1', 'ESP_C2': 'ESP_C2', 'COOR_ESTE': 'COOR_ESTE', 'COOR_NORTE': 'COOR_NORTE', 'NOM_SNASPE': 'NOM_SNASPE', 'TIPO_SNASP': 'TIPO_SNASP', 'NOM_REG': 'NOM_REG', 'NOM_PROV': 'NOM_PROV', 'NOM_COM': 'NOM_COM', 'TC': 'TC', 'TIPO_POLI': 'TIPO_POLI', 'SUPERF_HA': 'SUPERF_HA', });
lyr_LmiteUrbano_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'REG': 'REG', 'COM': 'COM', 'NOM': 'NOM', 'INSTRUMENT': 'INSTRUMENT', 'ADMIN': 'ADMIN', 'DO': 'DO', 'N_DOC': 'N_DOC', 'T_DOC': 'T_DOC', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_RedHidrogrfica_5.set('fieldAliases', {'objectid': 'objectid', 'fid_drenes': 'fid_drenes', 'cod_comuna': 'cod_comuna', 'shape_leng': 'shape_leng', 'st_length_': 'st_length_', 'Nombre': 'Nombre', 'Dren_Tipo': 'Dren_Tipo', 'Region': 'Region', 'Provincia': 'Provincia', 'Comuna': 'Comuna', });
lyr_Casablanca_1.set('fieldImages', {'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', });
lyr_ComunasVRegin_2.set('fieldImages', {'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', });
lyr_TerrenosAgrcolas_3.set('fieldImages', {'ID': 'TextEdit', 'ID_USO': 'TextEdit', 'ID_SUBUSO': 'TextEdit', 'ID_ESTRUC': 'TextEdit', 'ID_COBER': 'TextEdit', 'ID_ALTU': 'TextEdit', 'ID_TIFO': 'TextEdit', 'ID_STIF': 'TextEdit', 'ID_ESP1': 'TextEdit', 'ID_ESP2': 'TextEdit', 'ID_ESP3': 'TextEdit', 'ID_ESP4': 'TextEdit', 'ID_ESP5': 'TextEdit', 'ID_ESP6': 'TextEdit', 'ORG_ESP_CC': 'TextEdit', 'ID_ESP_CC1': 'TextEdit', 'ID_ESP_CC2': 'TextEdit', 'CODREG': 'TextEdit', 'CODPROV': 'TextEdit', 'CODCOM': 'TextEdit', 'USO_TIERRA': 'TextEdit', 'USO': 'TextEdit', 'SUBUSO': 'TextEdit', 'ESTRUCTURA': 'TextEdit', 'COBERTURA': 'TextEdit', 'ALTURA': 'TextEdit', 'TIPO_FORES': 'TextEdit', 'SUBTIPOFOR': 'TextEdit', 'ESPECI1_CI': 'TextEdit', 'ESPECI2_CI': 'TextEdit', 'ESPECI3_CI': 'TextEdit', 'ESPECI4_CI': 'TextEdit', 'ESPECI5_CI': 'TextEdit', 'ESPECI6_CI': 'TextEdit', 'ESPECI1_CO': 'TextEdit', 'ESPECI2_CO': 'TextEdit', 'ESPECI3_CO': 'TextEdit', 'ESPECI4_CO': 'TextEdit', 'ESPECI5_CO': 'TextEdit', 'ESPECI6_CO': 'TextEdit', 'ESP_C1': 'TextEdit', 'ESP_C2': 'TextEdit', 'COOR_ESTE': 'TextEdit', 'COOR_NORTE': 'TextEdit', 'NOM_SNASPE': 'TextEdit', 'TIPO_SNASP': 'TextEdit', 'NOM_REG': 'TextEdit', 'NOM_PROV': 'TextEdit', 'NOM_COM': 'TextEdit', 'TC': 'TextEdit', 'TIPO_POLI': 'TextEdit', 'SUPERF_HA': 'TextEdit', });
lyr_LmiteUrbano_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'REG': 'TextEdit', 'COM': 'TextEdit', 'NOM': 'TextEdit', 'INSTRUMENT': 'TextEdit', 'ADMIN': 'TextEdit', 'DO': 'TextEdit', 'N_DOC': 'TextEdit', 'T_DOC': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_RedHidrogrfica_5.set('fieldImages', {'objectid': 'TextEdit', 'fid_drenes': 'TextEdit', 'cod_comuna': 'TextEdit', 'shape_leng': 'TextEdit', 'st_length_': 'TextEdit', 'Nombre': 'TextEdit', 'Dren_Tipo': 'TextEdit', 'Region': 'TextEdit', 'Provincia': 'TextEdit', 'Comuna': 'TextEdit', });
lyr_Casablanca_1.set('fieldLabels', {'objectid': 'hidden field', 'shape_leng': 'hidden field', 'dis_elec': 'hidden field', 'cir_sena': 'hidden field', 'cod_comuna': 'hidden field', 'codregion': 'hidden field', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', 'Region': 'inline label - always visible', 'Comuna': 'inline label - always visible', 'Provincia': 'inline label - always visible', });
lyr_ComunasVRegin_2.set('fieldLabels', {'objectid': 'hidden field', 'shape_leng': 'hidden field', 'dis_elec': 'hidden field', 'cir_sena': 'no label', 'cod_comuna': 'no label', 'codregion': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Region': 'no label', 'Comuna': 'no label', 'Provincia': 'no label', });
lyr_TerrenosAgrcolas_3.set('fieldLabels', {'ID': 'hidden field', 'ID_USO': 'hidden field', 'ID_SUBUSO': 'hidden field', 'ID_ESTRUC': 'hidden field', 'ID_COBER': 'hidden field', 'ID_ALTU': 'hidden field', 'ID_TIFO': 'hidden field', 'ID_STIF': 'hidden field', 'ID_ESP1': 'hidden field', 'ID_ESP2': 'hidden field', 'ID_ESP3': 'hidden field', 'ID_ESP4': 'hidden field', 'ID_ESP5': 'hidden field', 'ID_ESP6': 'hidden field', 'ORG_ESP_CC': 'hidden field', 'ID_ESP_CC1': 'hidden field', 'ID_ESP_CC2': 'hidden field', 'CODREG': 'hidden field', 'CODPROV': 'hidden field', 'CODCOM': 'hidden field', 'USO_TIERRA': 'inline label - always visible', 'USO': 'inline label - always visible', 'SUBUSO': 'inline label - always visible', 'ESTRUCTURA': 'hidden field', 'COBERTURA': 'hidden field', 'ALTURA': 'hidden field', 'TIPO_FORES': 'hidden field', 'SUBTIPOFOR': 'hidden field', 'ESPECI1_CI': 'hidden field', 'ESPECI2_CI': 'hidden field', 'ESPECI3_CI': 'hidden field', 'ESPECI4_CI': 'hidden field', 'ESPECI5_CI': 'hidden field', 'ESPECI6_CI': 'hidden field', 'ESPECI1_CO': 'hidden field', 'ESPECI2_CO': 'hidden field', 'ESPECI3_CO': 'hidden field', 'ESPECI4_CO': 'hidden field', 'ESPECI5_CO': 'hidden field', 'ESPECI6_CO': 'hidden field', 'ESP_C1': 'hidden field', 'ESP_C2': 'hidden field', 'COOR_ESTE': 'hidden field', 'COOR_NORTE': 'hidden field', 'NOM_SNASPE': 'hidden field', 'TIPO_SNASP': 'hidden field', 'NOM_REG': 'hidden field', 'NOM_PROV': 'hidden field', 'NOM_COM': 'hidden field', 'TC': 'hidden field', 'TIPO_POLI': 'hidden field', 'SUPERF_HA': 'hidden field', });
lyr_LmiteUrbano_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'REG': 'hidden field', 'COM': 'hidden field', 'NOM': 'inline label - always visible', 'INSTRUMENT': 'inline label - always visible', 'ADMIN': 'inline label - always visible', 'DO': 'inline label - always visible', 'N_DOC': 'hidden field', 'T_DOC': 'hidden field', 'Shape_STAr': 'hidden field', 'Shape_STLe': 'hidden field', });
lyr_RedHidrogrfica_5.set('fieldLabels', {'objectid': 'no label', 'fid_drenes': 'no label', 'cod_comuna': 'no label', 'shape_leng': 'no label', 'st_length_': 'no label', 'Nombre': 'inline label - always visible', 'Dren_Tipo': 'no label', 'Region': 'no label', 'Provincia': 'no label', 'Comuna': 'no label', });
lyr_RedHidrogrfica_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});