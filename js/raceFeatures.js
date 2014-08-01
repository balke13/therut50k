var firstAid = {
	"type" : "FeatureCollection",
	"features" : [{
		"type" : "Feature",
		"id" : 0,
		"properties" : { 
				"popupContent": "Tram Dock Aid Station",
				"elevation": "9,620 ft"
			},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.44189528653722, 45.281717193377609]
		}
	}, {
		"type" : "Feature",
		"id" : 1,
		"properties" : { 
				"popupContent": "Lone Peak Aid Station",
				"elevation": "11,166 ft"
			},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.45049168310936, 45.278236776483865]
		}
	}, {
		"type" : "Feature",
		"id" : 2,
		"properties" : { 
				"popupContent": "Andesite Aid Station",
				"elevation": "8,650 ft"
			},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.39556780197267, 45.272393401999416]
		}
	}, {
		"type" : "Feature",
		"id" : 3,
		"properties" : { 
				"popupContent": "Madison Village Aid Station",
				"elevation": "7,390 ft"
			},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.43215823174691, 45.309808205684945]
		}
	}]
};



var startFinish = {
	"type" : "FeatureCollection",
	"features" : [{
		"type" : "Feature",
		"id" : 0,
		"properties" : { 
				"popupContent": "The Rut 50k <br> Start-Finish Area",
				"elevation": "7,500 ft"
			},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.401578, 45.283349]
		}
	}]
}; 


var skiLifts = {
	"type": "FeatureCollection",                                                                          
		"features": [
			{ "type": "Feature", "properties": { "OBJECTID": 1, "SHAPE_Leng": 8221.9695342800005, "Name": "Swift Current High Speed Quad" }, "geometry": { "type": "LineString", "coordinates": [ [ -111.43184511343013, 45.275550579769252 ], [ -111.40184640867464, 45.283301489358202 ] ] } },
			{ "type": "Feature", "properties": { "OBJECTID": 2, "SHAPE_Leng": 2477.2690758200001, "Name": "Lone Peak Tram" }, "geometry": { "type": "LineString", "coordinates": [ [ -111.44194345303363, 45.281623653954263 ], [ -111.45011900940489, 45.278037701928639 ] ] } },
		]
};


var skiLiftsPts = {
	"type" : "FeatureCollection",
	"features" : [{
		"type" : "Feature",
		"id" : 0,
		"properties" : {
			"popupContent" : "Swift Current High Speed Quad",
			"Information" : "Swift Current Scenic Lift Ticket will be  $16 +tax.<br> Ticket gets spectator all day access on Swift Current lift. 50K runners will be passing the top of swift current before heading up Binecrusher Ridge to the summit of lone peak. You may also see your runners in the bowl heading up to and back from the Tram Dock base as well."
		},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.41684681163238, 45.279427046395242]
		}
	}, {
		"type" : "Feature",
		"id" : 1,
		"properties" : {
			"popupContent" : "Lone Peak Tram",
			"Information" : "If you would like to cheer your runner on at the 11.166 ft. high aid station at the top of Lone Peak we can help you get there!  Big Sky Resort is offering a spectators ticket to the summit. Lone Peak Tram Spectator Ticket $55 +tax. Ticket gets spectator all day access on the Swift Current lift, One Ride to base of Tram via Lone Peak Expedition Truck and a one ride up the Tram to the summit of Lone Peak. <br> <br>You can buy tickets at the Basecamp office in the Big Sky Base Area. The office opens at 7am (for ticket sales)."
		},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.44603136314063, 45.279830753160191]
		}
	}]
}; 




var routeMarkers = {
	"type" : "FeatureCollection",

	"features" : [{
		"type" : "Feature",
		"id" : 0,
		"properties" : {
			"Mile" : "Mile 5"
		},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.41770960273425, 45.298862181992043]
		}
	}, {
		"type" : "Feature",
		"id" : 1,
		"properties" : {
			"Mile" : "Mile 10"
		},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.42337784368725, 45.297924808336901]
		}
	}, {
		"type" : "Feature",
		"id" : 2,
		"properties" : {
			"Mile" : "Mile 15"
		},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.43392339612477, 45.285562493401514]
		}
	}, {
		"type" : "Feature",
		"id" : 3,
		"properties" : {
			"Mile" : "Mile 20"
		},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.44774479801869, 45.277968503161389]
		}
	}, {
		"type" : "Feature",
		"id" : 4,
		"properties" : {
			"Mile" : "Mile 25"
		},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.41147501099114, 45.272866121492726]
		}
	}, {
		"type" : "Feature",
		"id" : 5,
		"properties" : {
			"Mile" : "Mile 30"
		},
		"geometry" : {
			"type" : "Point",
			"coordinates" : [-111.3817863929329, 45.282366683934882]
		}
	}]
};





