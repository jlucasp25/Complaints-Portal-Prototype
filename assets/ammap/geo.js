			var map;

			AmCharts.ready(function() {
			    map = new AmCharts.AmMap();


			    map.colorSteps = 20;

			    var dataProvider = {
			        mapVar: AmCharts.maps.portugalHigh,

			        areas: [
			            {
			            id: "PT-01",
			            value: 4447100
						},	
			        {
			            id: "PT-02",
			            value: 626932},
			        {
			            id: "PT-03",
			            value: 5130632},
			        {
			            id: "PT-04",
			            value: 2673400},
			        {
			            id: "PT-05",
			            value: 33871648},
			        {
			            id: "PT-06",
			            value: 4301261},
			        {
			            id: "PT-07",
			            value: 3405565},
			        {
			            id: "PT-08",
			            value: 783600},
					{
						id: "PT-09",
						value: 238919},
			        {
			            id: "PT-10",
			            value: 15982378},
			        {
			            id: "PT-11",
			            value: 8186453},
			        {
			            id: "PT-12",
			            value: 1211537},
			        {
			            id: "PT-13",
			            value: 1293953},
			        {
			            id: "PT-14",
			            value: 12419293},
			        {
			            id: "PT-15",
			            value: 6080485},
			        {
			            id: "PT-16",
			            value: 2926324},
			        {
			            id: "PT-17",
			            value: 2688418},
			        {
			            id: "PT-18",
			            value: 4041769},
			        {
			            id: "PT-19",
			            value: 4468976},
			        {
			            id: "PT-20",
			            value: 1274923},
			        {
			            id: "PT-21",
			            value: 5296486},
			        {
			            id: "PT-22",
			            value: 6349097},
			        {
			            id: "PT-23",
			            value: 9938444},
			        {
			            id: "PT-24",
			            value: 4919479},
			        {
			            id: "PT-25",
			            value: 2844658},
			        {
			            id: "PT-26",
			            value: 5595211},
			        {
			            id: "PT-27",
			            value: 902195},
			        {
			            id: "PT-28",
			            value: 1711263},
			        {
			            id: "PT-28",
			            value: 1998257},
			        {
			            id: "PT-29",
			            value: 1235786},
			        {
			            id: "PT-30",
			            value: 8414350}]
			    };

			    map.areasSettings = {
			        autoZoom: true
			    };
			    map.dataProvider = dataProvider;

			    var valueLegend = new AmCharts.ValueLegend();
			    valueLegend.right = 10;
			    valueLegend.minValue = "Pouco";
			    valueLegend.maxValue = "Muito";
			    map.valueLegend = valueLegend;

			    map.write("mapdiv");
			});