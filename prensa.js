var prensaData= [
  {title: "Mejoran Fondos de la Nación hacia las Provincias" , text: "Transferencias de Febrero de 2019" , link:"https://www.cronista.com/economiapolitica/Mejoran-fondos-de-Nacion-para-las-provincias-pero-debajo-de-inflacion-20190310-0038.html", fuente:"El Cronista"},
  {title: "Provincias reciben más coparticipación" , text: "Transferencias de Febrero de 2019" , link:"https://www.baenegocios.com/economia-finanzas/Provincias-reciben-mas-coparticipacion-pero-recortan-giros-discrecionales-20190310-0053.html", fuente:"BAE NEGOCIOS"},
  {title: "Freno en la Recaudación" , text: "Transferencias de Febrero de 2019" , link:"https://www.ambito.com/freno-recaudaciones-complica-agenda-electoral-gobernadores-n5021557", fuente:"Ámbito Financiero"},
  {title: "Mejora en las finanzas provinciales" , text: "Transferencias de Febrero de 2019" , link:"https://www.cronista.com/economiapolitica/Mejora-de-las-finanzas-provinciales-podria-traducirse-en-obras-publicas-20190326-0050.html", fuente:"El Cronista"},
];




function initialize() {
    prensaData.forEach(function(data) {
      jQuery("#prensalist").append('<div class="prensa-item"><h3>'+data.title+'</h3><div class="prensa-content"><p class="prensa-description">'+data.text+'</p><a href="'+data.link+'" class="prensa-link" target="_blank">Seguir Leyendo</a><span class="prensa-fuente">'+data.fuente+'</span></div></div>');
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
