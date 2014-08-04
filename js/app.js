var map;

function main() {
    var BingLayer = L.TileLayer.extend({
        getTileUrl: function(tilePoint){
            this._adjustTilePoint(tilePoint);
            return L.Util.template(this._url, {
                s: this._getSubdomain(tilePoint),
                q: this._quadKey(tilePoint.x, tilePoint.y, this._getZoomForUrl())
            });
        },
        _quadKey: function(x, y, z){
            var quadKey = [];
            for (var i = z; i > 0; i--) {
                var digit = '0';
                var mask = 1 << (i - 1);
                if ((x & mask) != 0) {
                    digit++;
                }
                if ((y & mask) != 0) {
                    digit++;
                    digit++;
                }
                quadKey.push(digit);
            }
            return quadKey.join('');
        }
    });
	
	
	var firstAidIcon = L.icon({
		iconUrl : 'https://dl.dropboxusercontent.com/u/51288104/TheRut50k/img/firstaid.png',
		iconSize : [26, 31],
		iconAnchor : [13.5, 17.5]
	});

	var startFinishIcon = L.icon({
		iconUrl : 'https://dl.dropboxusercontent.com/u/51288104/TheRut50k/img/startFinish.png',
		iconSize : [26, 31],
		iconAnchor : [13.5, 17.5]
	});

	var skiLiftsIcon = L.icon({
		iconUrl : 'https://dl.dropboxusercontent.com/u/51288104/TheRut50k/img/skilifting.png',
		iconSize : [26, 31],
		iconAnchor : [13.5, 17.5]
	});

	var routeStyle = {
		"color" : "#ff0000",
		"weight" : 5,
		"opacity" : 0.45
	};

	var skiLiftsStyle = {
		"color" : "#000000",
		"weight" : 2,
		"opacity" : 1
	};

	var routeMarkerStyle = {
		radius : 4,
		fillColor : "#ffffff",
		color : "#000",
		weight : 1,
		opacity : 1,
		fillOpacity : 1,

	};

	var esriImageryUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', esriImageryLayer = new L.TileLayer(esriImageryUrl, {
		maxZoom : 19,
		attribution : 'Tiles: &copy; Esri'
	});
	streetMapUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', streetMapLayer = new L.TileLayer(streetMapUrl, {
		maxZoom : 19,
		attribution : 'Tiles: &copy; Esri'
	});
	topoMapUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}', topoMapLayer = new L.TileLayer(topoMapUrl, {
		maxZoom : 19,
		attribution : 'Tiles: &copy; Esri'
	});
	worldtopoMapUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', worldtopoMapLayer = new L.TileLayer(worldtopoMapUrl, {
		maxZoom : 19,
		attribution : 'Tiles: &copy; Esri'
	});
	osmMapUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', osmMapLayer = new L.TileLayer(osmMapUrl, {
		maxZoom : 19,
		attribution : 'Tiles: &copy; OpenStreetMap'
	});
	
	var bingMapLayer = new BingLayer('http://t{s}.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1398', {
                subdomains: ['0', '1', '2', '3', '4'],
                attribution: '&copy; <a href="http://bing.com/maps">Bing Maps</a>'
    });

		function onEachFeature(feature, layer) {
		// does this feature have a property named popupContent?
		if (feature.properties && feature.properties.popupContent && feature.properties.elevation) {
			layer.bindPopup('<strong>' + feature.properties.popupContent + '</strong><br>' + feature.properties.elevation);
		} else {
			layer.bindPopup('<strong>' + feature.properties.popupContent + '</strong><br>' + feature.properties.Information);
		}
	}

	var firstAidLayer = L.geoJson(firstAid, {
		pointToLayer : function(feature, latlng) {
			return L.marker(latlng, {
				icon : firstAidIcon
			});
		},
		onEachFeature : onEachFeature
	});

	var startFinishLayer = L.geoJson(startFinish, {
		pointToLayer : function(feature, latlng) {
			return L.marker(latlng, {
				icon : startFinishIcon
			});
		},
		onEachFeature : onEachFeature
	});

	var skiLiftsPtsLayer = L.geoJson(skiLiftsPts, {
		pointToLayer : function(feature, latlng) {
			return L.marker(latlng, {
				icon : skiLiftsIcon
			});
		},
		onEachFeature : onEachFeature
	});

	var skiLiftsLayer = L.geoJson(skiLifts, {
		style : skiLiftsStyle
	});

	var routeMarkersLayer = L.geoJson(routeMarkers, {
		pointToLayer : function(feature, latlng) {
			return L.circleMarker(latlng, routeMarkerStyle).bindLabel(feature.properties.Mile, {
				noHide : true
			});
		}
	});

	
	var map = new L.map(document.querySelector('#map'),{
		center: new L.LatLng(45.2777664, -111.4135768),
		zoom: 14,
		layers:[bingMapLayer, firstAidLayer, startFinishLayer, skiLiftsPtsLayer, skiLiftsLayer, routeMarkersLayer]
	});

	var baseMaps = {
		"Imagery" : bingMapLayer,
		"Streets" : streetMapLayer,
		"Topo" : topoMapLayer,
		"World Topo" : worldtopoMapLayer,
		"Open Street Map" : osmMapLayer
	};

	var overlayMaps = {
		"Aid Stations" : firstAidLayer,
		"Start Finish Area" : startFinishLayer,
		"Ski Lift Points" : skiLiftsPtsLayer,
		"Ski Lifts" : skiLiftsLayer,
		"Mile Markers" : routeMarkersLayer
	};
	
	var layersControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
	map.addControl(new L.Control.Permalink({text: 'Permalink', layersControl: layersControl}));


	var el = L.control.elevation({
		position : "bottomleft",
		theme : "steelblue-theme", //default: lime-theme
		width : 560,
		height : 125,
		margins : {
			top : 20,
			right : 20,
			bottom : 30,
			left : 50
		},
		useHeightIndicator : true,
		interpolation : "basis",
		hoverNumber : {
			decimalsX : 1, //decimals on distance (always in km)
			decimalsY : 0,
		},
		xTicks : undefined, //number of ticks in x axis, calculated by default according to width
		yTicks : undefined, //number of ticks on y axis, calculated by default according to height
	});
	el.addTo(map);
	
	var gjl = L.geoJson(raceRoute, {
		style : routeStyle,
		onEachFeature : el.addData.bind(el)
	}).addTo(map);
	

}

window.onload = main;
