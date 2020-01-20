var markerData= [
  {title: "Transferencias a Provincias" , text: "Transferencias a Provincias Febrero 2019" , link:"http://cnfinanzas.com/informes/transferfeb19.pdf"},
  {title: "Transferencias a Provincias" , text: "Transferencias a Provincias Marzo 2019" , link:"http://cnfinanzas.com/informes/TransferProvincias_Mar2019.pdf"},
  {title: "Informe Santa Fe" , text: "Informe Santa Fe Febrero 2019" , link:"http://cnfinanzas.com/informes/InformeSantaFe_Feb2019.pdf"},
  {title: "Informe Trimestral Provincias" , text: "Informe Ejecución Trimestral Provincias IT 2019" , link:"http://cnfinanzas.com/informes/Informe_Ejecución_Trimestral_Provincias_IT_2019.pdf"},
  {title: "Sector Financiero por Provincia" , text: "Sector Financiero por Provincia IT 2019" , link:"http://cnfinanzas.com/informes/SectorFinanciero1T2019.pdf"},
];


// Acá va en inglés
var researchData= [
  {title: "Provincial Transfers" , text: "Provincial Transfers March 2019" , link:"http://cnfinanzas.com/informes/TransferProvincias_Mar2019.pdf"},
  {title: "Santa Fe Report" , text: "Santa Fe Report February 2019" , link:"http://cnfinanzas.com/informes/SantaFe Report_Feb2019.pdf"},
];

function initialize() {
    markerData.forEach(function(data) {
      jQuery("#informeslist").append('<div class="informe-item hidden"><div class="informe-header"><img src="img/informe.svg" alt="descarga"><h3>'+data.title+'</h3></div><div class="informe-content"><p class="informe-description">'+data.text+'</p><a href="'+data.link+'" class="informe-link" target="_blank">Descargar</a></div></div>');
    });
    researchData.forEach(function(data) {
      jQuery("#researchlist").append('<div class="informe-item hidden"><div class="informe-header"><img src="img/informe.svg" alt="descarga"><h3>'+data.title+'</h3></div><div class="informe-content"><p class="informe-description">'+data.text+'</p><a href="'+data.link+'" class="informe-link" target="_blank">Download</a></div></div>');
    });
}

google.maps.event.addDomListener(window, 'load', initialize);