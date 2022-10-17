var vg_1 = "co2_map.json";
vegaEmbed("#map", vg_1, {"actions": false}).then(function(result) {

}).catch(console.error);

var vg_2 = "temperature_line.json";
vegaEmbed("#tempemm", vg_2, {"actions": false}).then(function(result) {

}).catch(console.error);

var vg_3 = "energy_mix2019.json";
vegaEmbed("#enmix", vg_3, {"actions": false}).then(function(result) {

}).catch(console.error);

var vg_4 = "target.json";
vegaEmbed("#status", vg_4, {"actions": false}).then(function(result) {

}).catch(console.error);