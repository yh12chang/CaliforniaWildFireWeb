var simplemaps_statemap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		// //Location defaults
		// location_description: "Location description",
    // location_color: "#FF0067",
    // location_opacity: 0.8,
    // location_hover_opacity: 1,
    // location_url: "",
    // location_size: 25,
    // location_type: "square",
    // location_border_color: "#FFFFFF",
    // location_border: 2,
    // location_hover_border: 2.5,
    // all_locations_inactive: "no",
    // all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: false,
   
		//Zoom settings
		manual_zoom: "yes",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    "06001": {
      name: "Alameda",
      description: "[{'county_id': 1, 'TotalFires': 34, 'TotalAcresBurned': 7857, 'TotalStructuresDamaged': 34, 'TotalStructuresDestroyed': 34, 'TotalStructuresEvacuated': 34, 'TotalStructuresThreatened': 34, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06003": {
      name: "Alpine",
      description: "[{'county_id': 2, 'TotalFires': 2, 'TotalAcresBurned': 0, 'TotalStructuresDamaged': 2, 'TotalStructuresDestroyed': 2, 'TotalStructuresEvacuated': 2, 'TotalStructuresThreatened': 2, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06005": {
      name: "Amador",
      description: "[{'county_id': 3, 'TotalFires': 12, 'TotalAcresBurned': 2045, 'TotalStructuresDamaged': 12, 'TotalStructuresDestroyed': 12, 'TotalStructuresEvacuated': 12, 'TotalStructuresThreatened': 12, 'AirTankersUsed': 0.03508771929824561, 'DozersUsed': 0.011570247933884297, 'EnginesUsed': 0.016284846812034227, 'HelicopterUsed': 0.007731958762886598, 'WaterTendersUsed': 0.01838235294117647, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06007": {
      name: "Butte",
      description: "[{'county_id': 4, 'TotalFires': 66, 'TotalAcresBurned': 190702, 'TotalStructuresDamaged': 66, 'TotalStructuresDestroyed': 66, 'TotalStructuresEvacuated': 66, 'TotalStructuresThreatened': 66, 'AirTankersUsed': 0.12280701754385964, 'DozersUsed': 0.1256198347107438, 'EnginesUsed': 0.11178581286226884, 'HelicopterUsed': 0.08247422680412371, 'WaterTendersUsed': 0.11151960784313726, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06009": {
      name: "Calaveras",
      description: "[{'county_id': 5, 'TotalFires': 22, 'TotalAcresBurned': 2648, 'TotalStructuresDamaged': 22, 'TotalStructuresDestroyed': 22, 'TotalStructuresEvacuated': 22, 'TotalStructuresThreatened': 22, 'AirTankersUsed': 0.0, 'DozersUsed': 0.02975206611570248, 'EnginesUsed': 0.009660502346121999, 'HelicopterUsed': 0.04639175257731959, 'WaterTendersUsed': 0.022058823529411766, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06011": {
      name: "Colusa",
      description: "[{'county_id': 6, 'TotalFires': 3, 'TotalAcresBurned': 165, 'TotalStructuresDamaged': 3, 'TotalStructuresDestroyed': 3, 'TotalStructuresEvacuated': 3, 'TotalStructuresThreatened': 3, 'AirTankersUsed': 0.0, 'DozersUsed': 0.009917355371900827, 'EnginesUsed': 0.004692243996687827, 'HelicopterUsed': 0.007731958762886598, 'WaterTendersUsed': 0.006127450980392157, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06013": {
      name: "Contra Costa",
      description: "[{'county_id': 7, 'TotalFires': 27, 'TotalAcresBurned': 6884, 'TotalStructuresDamaged': 27, 'TotalStructuresDestroyed': 27, 'TotalStructuresEvacuated': 27, 'TotalStructuresThreatened': 27, 'AirTankersUsed': 0.0, 'DozersUsed': 0.008264462809917356, 'EnginesUsed': 0.0008280430582390284, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.004901960784313725, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06015": {
      name: "Del Norte",
      description: "[{'county_id': 8, 'TotalFires': 6, 'TotalAcresBurned': 38407, 'TotalStructuresDamaged': 6, 'TotalStructuresDestroyed': 6, 'TotalStructuresEvacuated': 6, 'TotalStructuresThreatened': 6, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06017": {
      name: "El Dorado",
      description: "[{'county_id': 9, 'TotalFires': 34, 'TotalAcresBurned': 104362, 'TotalStructuresDamaged': 34, 'TotalStructuresDestroyed': 34, 'TotalStructuresEvacuated': 34, 'TotalStructuresThreatened': 34, 'AirTankersUsed': 0.0, 'DozersUsed': 0.001652892561983471, 'EnginesUsed': 0.01076455975710737, 'HelicopterUsed': 0.005154639175257732, 'WaterTendersUsed': 0.007352941176470588, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06019": {
      name: "Fresno",
      description: "[{'county_id': 10, 'TotalFires': 57, 'TotalAcresBurned': 214411, 'TotalStructuresDamaged': 57, 'TotalStructuresDestroyed': 57, 'TotalStructuresEvacuated': 57, 'TotalStructuresThreatened': 57, 'AirTankersUsed': 0.0, 'DozersUsed': 0.024793388429752067, 'EnginesUsed': 0.02925752139111234, 'HelicopterUsed': 0.01288659793814433, 'WaterTendersUsed': 0.031862745098039214, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06021": {
      name: "Glenn",
      description: "[{'county_id': 11, 'TotalFires': 7, 'TotalAcresBurned': 2998, 'TotalStructuresDamaged': 7, 'TotalStructuresDestroyed': 7, 'TotalStructuresEvacuated': 7, 'TotalStructuresThreatened': 7, 'AirTankersUsed': 0.0, 'DozersUsed': 0.008264462809917356, 'EnginesUsed': 0.0016560861164780568, 'HelicopterUsed': 0.01288659793814433, 'WaterTendersUsed': 0.006127450980392157, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06023": {
      name: "Humboldt",
      description: "[{'county_id': 12, 'TotalFires': 25, 'TotalAcresBurned': 22925, 'TotalStructuresDamaged': 25, 'TotalStructuresDestroyed': 25, 'TotalStructuresEvacuated': 25, 'TotalStructuresThreatened': 25, 'AirTankersUsed': 0.0, 'DozersUsed': 0.026446280991735537, 'EnginesUsed': 0.02456527739442451, 'HelicopterUsed': 0.02577319587628866, 'WaterTendersUsed': 0.020833333333333332, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06025": {
      name: "Imperial",
      description: "[{}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06027": {
      name: "Inyo",
      description: "[{'county_id': 14, 'TotalFires': 11, 'TotalAcresBurned': 24884, 'TotalStructuresDamaged': 11, 'TotalStructuresDestroyed': 11, 'TotalStructuresEvacuated': 11, 'TotalStructuresThreatened': 11, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0512396694214876, 'EnginesUsed': 0.023185205630692797, 'HelicopterUsed': 0.041237113402061855, 'WaterTendersUsed': 0.041666666666666664, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06029": {
      name: "Kern",
      description: "[{'county_id': 15, 'TotalFires': 62, 'TotalAcresBurned': 116587, 'TotalStructuresDamaged': 62, 'TotalStructuresDestroyed': 62, 'TotalStructuresEvacuated': 62, 'TotalStructuresThreatened': 62, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06031": {
      name: "Kings",
      description: "[{'county_id': 16, 'TotalFires': 5, 'TotalAcresBurned': 54377, 'TotalStructuresDamaged': 5, 'TotalStructuresDestroyed': 5, 'TotalStructuresEvacuated': 5, 'TotalStructuresThreatened': 5, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06033": {
      name: "Lake",
      description: "[{'county_id': 17, 'TotalFires': 44, 'TotalAcresBurned': 94215, 'TotalStructuresDamaged': 44, 'TotalStructuresDestroyed': 44, 'TotalStructuresEvacuated': 44, 'TotalStructuresThreatened': 44, 'AirTankersUsed': 0.0, 'DozersUsed': 0.05454545454545454, 'EnginesUsed': 0.03394976538780017, 'HelicopterUsed': 0.007731958762886598, 'WaterTendersUsed': 0.03553921568627451, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06035": {
      name: "Lassen",
      description: "[{'county_id': 18, 'TotalFires': 37, 'TotalAcresBurned': 153266, 'TotalStructuresDamaged': 37, 'TotalStructuresDestroyed': 37, 'TotalStructuresEvacuated': 37, 'TotalStructuresThreatened': 37, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06037": {
      name: "Los Angeles",
      description: "[{'county_id': 19, 'TotalFires': 45, 'TotalAcresBurned': 97259, 'TotalStructuresDamaged': 45, 'TotalStructuresDestroyed': 45, 'TotalStructuresEvacuated': 45, 'TotalStructuresThreatened': 45, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06039": {
      name: "Madera",
      description: "[{'county_id': 20, 'TotalFires': 36, 'TotalAcresBurned': 44505, 'TotalStructuresDamaged': 36, 'TotalStructuresDestroyed': 36, 'TotalStructuresEvacuated': 36, 'TotalStructuresThreatened': 36, 'AirTankersUsed': 0.017543859649122806, 'DozersUsed': 0.03140495867768595, 'EnginesUsed': 0.014076731990063483, 'HelicopterUsed': 0.005154639175257732, 'WaterTendersUsed': 0.025735294117647058, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06041": {
      name: "Marin",
      description: "[{'county_id': 21, 'TotalFires': 6, 'TotalAcresBurned': 349, 'TotalStructuresDamaged': 6, 'TotalStructuresDestroyed': 6, 'TotalStructuresEvacuated': 6, 'TotalStructuresThreatened': 6, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06043": {
      name: "Mariposa",
      description: "[{'county_id': 22, 'TotalFires': 35, 'TotalAcresBurned': 217852, 'TotalStructuresDamaged': 35, 'TotalStructuresDestroyed': 35, 'TotalStructuresEvacuated': 35, 'TotalStructuresThreatened': 35, 'AirTankersUsed': 0.0, 'DozersUsed': 0.009917355371900827, 'EnginesUsed': 0.01766491857576594, 'HelicopterUsed': 0.010309278350515464, 'WaterTendersUsed': 0.028186274509803922, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06045": {
      name: "Mendocino",
      description: "[{'county_id': 23, 'TotalFires': 26, 'TotalAcresBurned': 53589, 'TotalStructuresDamaged': 26, 'TotalStructuresDestroyed': 26, 'TotalStructuresEvacuated': 26, 'TotalStructuresThreatened': 26, 'AirTankersUsed': 0.0, 'DozersUsed': 0.001652892561983471, 'EnginesUsed': 0.005244272702180514, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.007352941176470588, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06047": {
      name: "Merced",
      description: "[{'county_id': 24, 'TotalFires': 16, 'TotalAcresBurned': 13641, 'TotalStructuresDamaged': 16, 'TotalStructuresDestroyed': 16, 'TotalStructuresEvacuated': 16, 'TotalStructuresThreatened': 16, 'AirTankersUsed': 0.0, 'DozersUsed': 0.001652892561983471, 'EnginesUsed': 0.0005520287054926856, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06049": {
      name: "Modoc",
      description: "[{'county_id': 25, 'TotalFires': 33, 'TotalAcresBurned': 179583, 'TotalStructuresDamaged': 33, 'TotalStructuresDestroyed': 33, 'TotalStructuresEvacuated': 33, 'TotalStructuresThreatened': 33, 'AirTankersUsed': 0.0, 'DozersUsed': 0.003305785123966942, 'EnginesUsed': 0.010212531051614683, 'HelicopterUsed': 0.010309278350515464, 'WaterTendersUsed': 0.00980392156862745, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06051": {
      name: "Mono",
      description: "[{'county_id': 26, 'TotalFires': 9, 'TotalAcresBurned': 28885, 'TotalStructuresDamaged': 9, 'TotalStructuresDestroyed': 9, 'TotalStructuresEvacuated': 9, 'TotalStructuresThreatened': 9, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06053": {
      name: "Monterey",
      description: "[{'county_id': 27, 'TotalFires': 43, 'TotalAcresBurned': 154461, 'TotalStructuresDamaged': 43, 'TotalStructuresDestroyed': 43, 'TotalStructuresEvacuated': 43, 'TotalStructuresThreatened': 43, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.001380071763731714, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06055": {
      name: "Napa",
      description: "[{'county_id': 28, 'TotalFires': 19, 'TotalAcresBurned': 4255, 'TotalStructuresDamaged': 19, 'TotalStructuresDestroyed': 19, 'TotalStructuresEvacuated': 19, 'TotalStructuresThreatened': 19, 'AirTankersUsed': 0.06140350877192982, 'DozersUsed': 0.011570247933884297, 'EnginesUsed': 0.01766491857576594, 'HelicopterUsed': 0.01288659793814433, 'WaterTendersUsed': 0.01838235294117647, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06057": {
      name: "Nevada",
      description: "[{'county_id': 29, 'TotalFires': 17, 'TotalAcresBurned': 4201, 'TotalStructuresDamaged': 17, 'TotalStructuresDestroyed': 17, 'TotalStructuresEvacuated': 17, 'TotalStructuresThreatened': 17, 'AirTankersUsed': 0.0, 'DozersUsed': 0.001652892561983471, 'EnginesUsed': 0.0016560861164780568, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.006127450980392157, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06059": {
      name: "Orange",
      description: "[{'county_id': 30, 'TotalFires': 10, 'TotalAcresBurned': 36764, 'TotalStructuresDamaged': 10, 'TotalStructuresDestroyed': 10, 'TotalStructuresEvacuated': 10, 'TotalStructuresThreatened': 10, 'AirTankersUsed': 0.0, 'DozersUsed': 0.013223140495867768, 'EnginesUsed': 0.014076731990063483, 'HelicopterUsed': 0.002577319587628866, 'WaterTendersUsed': 0.0012254901960784314, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06061": {
      name: "Placer",
      description: "[{'county_id': 31, 'TotalFires': 16, 'TotalAcresBurned': 31682, 'TotalStructuresDamaged': 16, 'TotalStructuresDestroyed': 16, 'TotalStructuresEvacuated': 16, 'TotalStructuresThreatened': 16, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06063": {
      name: "Plumas",
      description: "[{'county_id': 32, 'TotalFires': 11, 'TotalAcresBurned': 63817, 'TotalStructuresDamaged': 11, 'TotalStructuresDestroyed': 11, 'TotalStructuresEvacuated': 11, 'TotalStructuresThreatened': 11, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06065": {
      name: "Riverside",
      description: "[{'county_id': 33, 'TotalFires': 147, 'TotalAcresBurned': 97822, 'TotalStructuresDamaged': 147, 'TotalStructuresDestroyed': 147, 'TotalStructuresEvacuated': 147, 'TotalStructuresThreatened': 147, 'AirTankersUsed': 0.05263157894736842, 'DozersUsed': 0.06446280991735537, 'EnginesUsed': 0.11951421473916643, 'HelicopterUsed': 0.07989690721649484, 'WaterTendersUsed': 0.04779411764705882, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06067": {
      name: "Sacramento",
      description: "[{'county_id': 34, 'TotalFires': 10, 'TotalAcresBurned': 1822, 'TotalStructuresDamaged': 10, 'TotalStructuresDestroyed': 10, 'TotalStructuresEvacuated': 10, 'TotalStructuresThreatened': 10, 'AirTankersUsed': 0.017543859649122806, 'DozersUsed': 0.003305785123966942, 'EnginesUsed': 0.003036157880209771, 'HelicopterUsed': 0.005154639175257732, 'WaterTendersUsed': 0.004901960784313725, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06069": {
      name: "San Benito",
      description: "[{'county_id': 35, 'TotalFires': 20, 'TotalAcresBurned': 4354, 'TotalStructuresDamaged': 20, 'TotalStructuresDestroyed': 20, 'TotalStructuresEvacuated': 20, 'TotalStructuresThreatened': 20, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0049586776859504135, 'EnginesUsed': 0.0011040574109853713, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.004901960784313725, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06071": {
      name: "San Bernardino",
      description: "[{'county_id': 36, 'TotalFires': 53, 'TotalAcresBurned': 90897, 'TotalStructuresDamaged': 53, 'TotalStructuresDestroyed': 53, 'TotalStructuresEvacuated': 53, 'TotalStructuresThreatened': 53, 'AirTankersUsed': 0.0, 'DozersUsed': 0.06446280991735537, 'EnginesUsed': 0.043886282086668504, 'HelicopterUsed': 0.1134020618556701, 'WaterTendersUsed': 0.08088235294117647, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06073": {
      name: "San Diego",
      description: "[{'county_id': 37, 'TotalFires': 88, 'TotalAcresBurned': 65369, 'TotalStructuresDamaged': 88, 'TotalStructuresDestroyed': 88, 'TotalStructuresEvacuated': 88, 'TotalStructuresThreatened': 88, 'AirTankersUsed': 0.49122807017543857, 'DozersUsed': 0.1371900826446281, 'EnginesUsed': 0.11012972674579079, 'HelicopterUsed': 0.18556701030927836, 'WaterTendersUsed': 0.12377450980392157, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06075": {
      name: "San Francisco",
      description: "[{}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06077": {
      name: "San Joaquin",
      description: "[{'county_id': 39, 'TotalFires': 8, 'TotalAcresBurned': 13351, 'TotalStructuresDamaged': 8, 'TotalStructuresDestroyed': 8, 'TotalStructuresEvacuated': 8, 'TotalStructuresThreatened': 8, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06079": {
      name: "San Luis Obispo",
      description: "[{'county_id': 40, 'TotalFires': 62, 'TotalAcresBurned': 96652, 'TotalStructuresDamaged': 62, 'TotalStructuresDestroyed': 62, 'TotalStructuresEvacuated': 62, 'TotalStructuresThreatened': 62, 'AirTankersUsed': 0.03508771929824561, 'DozersUsed': 0.024793388429752067, 'EnginesUsed': 0.046370411261385594, 'HelicopterUsed': 0.023195876288659795, 'WaterTendersUsed': 0.025735294117647058, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06081": {
      name: "San Mateo",
      description: "[{'county_id': 41, 'TotalFires': 3, 'TotalAcresBurned': 153, 'TotalStructuresDamaged': 3, 'TotalStructuresDestroyed': 3, 'TotalStructuresEvacuated': 3, 'TotalStructuresThreatened': 3, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.001380071763731714, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06083": {
      name: "Santa Barbara",
      description: "[{'county_id': 42, 'TotalFires': 27, 'TotalAcresBurned': 80675, 'TotalStructuresDamaged': 27, 'TotalStructuresDestroyed': 27, 'TotalStructuresEvacuated': 27, 'TotalStructuresThreatened': 27, 'AirTankersUsed': 0.0, 'DozersUsed': 0.001652892561983471, 'EnginesUsed': 0.002760143527463428, 'HelicopterUsed': 0.002577319587628866, 'WaterTendersUsed': 0.003676470588235294, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06085": {
      name: "Santa Clara",
      description: "[{'county_id': 43, 'TotalFires': 39, 'TotalAcresBurned': 7544, 'TotalStructuresDamaged': 39, 'TotalStructuresDestroyed': 39, 'TotalStructuresEvacuated': 39, 'TotalStructuresThreatened': 39, 'AirTankersUsed': 0.0, 'DozersUsed': 0.001652892561983471, 'EnginesUsed': 0.0022081148219707425, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.006127450980392157, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06087": {
      name: "Santa Cruz",
      description: "[{'county_id': 44, 'TotalFires': 4, 'TotalAcresBurned': 428, 'TotalStructuresDamaged': 4, 'TotalStructuresDestroyed': 4, 'TotalStructuresEvacuated': 4, 'TotalStructuresThreatened': 4, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06089": {
      name: "Shasta",
      description: "[{'county_id': 45, 'TotalFires': 62, 'TotalAcresBurned': 155565, 'TotalStructuresDamaged': 62, 'TotalStructuresDestroyed': 62, 'TotalStructuresEvacuated': 62, 'TotalStructuresThreatened': 62, 'AirTankersUsed': 0.0, 'DozersUsed': 0.049586776859504134, 'EnginesUsed': 0.05299475572729782, 'HelicopterUsed': 0.07216494845360824, 'WaterTendersUsed': 0.0784313725490196, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06091": {
      name: "Sierra",
      description: "[{'county_id': 46, 'TotalFires': 2, 'TotalAcresBurned': 915, 'TotalStructuresDamaged': 2, 'TotalStructuresDestroyed': 2, 'TotalStructuresEvacuated': 2, 'TotalStructuresThreatened': 2, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06093": {
      name: "Siskiyou",
      description: "[{'county_id': 47, 'TotalFires': 57, 'TotalAcresBurned': 367914, 'TotalStructuresDamaged': 57, 'TotalStructuresDestroyed': 57, 'TotalStructuresEvacuated': 57, 'TotalStructuresThreatened': 57, 'AirTankersUsed': 0.0, 'DozersUsed': 0.009917355371900827, 'EnginesUsed': 0.00690035881865857, 'HelicopterUsed': 0.005154639175257732, 'WaterTendersUsed': 0.006127450980392157, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06095": {
      name: "Solano",
      description: "[{'county_id': 48, 'TotalFires': 17, 'TotalAcresBurned': 9415, 'TotalStructuresDamaged': 17, 'TotalStructuresDestroyed': 17, 'TotalStructuresEvacuated': 17, 'TotalStructuresThreatened': 17, 'AirTankersUsed': 0.017543859649122806, 'DozersUsed': 0.011570247933884297, 'EnginesUsed': 0.008556444935136628, 'HelicopterUsed': 0.005154639175257732, 'WaterTendersUsed': 0.013480392156862746, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06097": {
      name: "Sonoma",
      description: "[{'county_id': 49, 'TotalFires': 15, 'TotalAcresBurned': 104296, 'TotalStructuresDamaged': 15, 'TotalStructuresDestroyed': 15, 'TotalStructuresEvacuated': 15, 'TotalStructuresThreatened': 15, 'AirTankersUsed': 0.0, 'DozersUsed': 0.008264462809917356, 'EnginesUsed': 0.008280430582390284, 'HelicopterUsed': 0.01288659793814433, 'WaterTendersUsed': 0.00857843137254902, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06099": {
      name: "Stanislaus",
      description: "[{'county_id': 50, 'TotalFires': 20, 'TotalAcresBurned': 11283, 'TotalStructuresDamaged': 20, 'TotalStructuresDestroyed': 20, 'TotalStructuresEvacuated': 20, 'TotalStructuresThreatened': 20, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06101": {
      name: "Sutter",
      description: "[{'county_id': 51, 'TotalFires': 3, 'TotalAcresBurned': 2850, 'TotalStructuresDamaged': 3, 'TotalStructuresDestroyed': 3, 'TotalStructuresEvacuated': 3, 'TotalStructuresThreatened': 3, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06103": {
      name: "Tehama",
      description: "[{'county_id': 52, 'TotalFires': 51, 'TotalAcresBurned': 51975, 'TotalStructuresDamaged': 51, 'TotalStructuresDestroyed': 51, 'TotalStructuresEvacuated': 51, 'TotalStructuresThreatened': 51, 'AirTankersUsed': 0.07017543859649122, 'DozersUsed': 0.08925619834710743, 'EnginesUsed': 0.07700800441622964, 'HelicopterUsed': 0.08505154639175258, 'WaterTendersUsed': 0.09313725490196079, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06105": {
      name: "Trinity",
      description: "[{'county_id': 53, 'TotalFires': 19, 'TotalAcresBurned': 188086, 'TotalStructuresDamaged': 19, 'TotalStructuresDestroyed': 19, 'TotalStructuresEvacuated': 19, 'TotalStructuresThreatened': 19, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.0008280430582390284, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06107": {
      name: "Tulare",
      description: "[{'county_id': 54, 'TotalFires': 35, 'TotalAcresBurned': 94255, 'TotalStructuresDamaged': 35, 'TotalStructuresDestroyed': 35, 'TotalStructuresEvacuated': 35, 'TotalStructuresThreatened': 35, 'AirTankersUsed': 0.0, 'DozersUsed': 0.03636363636363636, 'EnginesUsed': 0.057686999723985645, 'HelicopterUsed': 0.023195876288659795, 'WaterTendersUsed': 0.0428921568627451, 'hotspot_area': 1}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06109": {
      name: "Tuolumne",
      description: "[{'county_id': 55, 'TotalFires': 22, 'TotalAcresBurned': 299132, 'TotalStructuresDamaged': 22, 'TotalStructuresDestroyed': 22, 'TotalStructuresEvacuated': 22, 'TotalStructuresThreatened': 22, 'AirTankersUsed': 0.0, 'DozersUsed': 0.001652892561983471, 'EnginesUsed': 0.005520287054926856, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0024509803921568627, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06111": {
      name: "Ventura",
      description: "[{'county_id': 56, 'TotalFires': 26, 'TotalAcresBurned': 45116, 'TotalStructuresDamaged': 26, 'TotalStructuresDestroyed': 26, 'TotalStructuresEvacuated': 26, 'TotalStructuresThreatened': 26, 'AirTankersUsed': 0.0, 'DozersUsed': 0.013223140495867768, 'EnginesUsed': 0.04471432514490754, 'HelicopterUsed': 0.028350515463917526, 'WaterTendersUsed': 0.01715686274509804, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06113": {
      name: "Yolo",
      description: "[{'county_id': 57, 'TotalFires': 11, 'TotalAcresBurned': 18393, 'TotalStructuresDamaged': 11, 'TotalStructuresDestroyed': 11, 'TotalStructuresEvacuated': 11, 'TotalStructuresThreatened': 11, 'AirTankersUsed': 0.0, 'DozersUsed': 0.0, 'EnginesUsed': 0.004692243996687827, 'HelicopterUsed': 0.0, 'WaterTendersUsed': 0.0012254901960784314, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    "06115": {
      name: "Yuba",
      description: "[{'county_id': 58, 'TotalFires': 14, 'TotalAcresBurned': 11910, 'TotalStructuresDamaged': 14, 'TotalStructuresDestroyed': 14, 'TotalStructuresEvacuated': 14, 'TotalStructuresThreatened': 14, 'AirTankersUsed': 0.043859649122807015, 'DozersUsed': 0.01487603305785124, 'EnginesUsed': 0.00690035881865857, 'HelicopterUsed': 0.010309278350515464, 'WaterTendersUsed': 0.0, 'hotspot_area': 0}]",
      color: "default",
      hover_color: "default",
      url: "default"
    }
  },
  locations: {
    "0": {
      name: "Example",
      lat: 37.11389833333333,
      lng: -119.09909466666666
    }
  },
  labels: {}
};