var map;
var loc;
var view;
function init() {
map = new ol.Map({
  view: new ol.View({
    center: [40.741933, -73.990899],
    zoom: 1
  }),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map'
});
}

window.onload = init;
