<!DOCTYPE HTML>
<html>

<head>
	<script type="text/javascript">
	window.onload = function () {

		// dataPoints
		var dataPoints1 = [];

		var chart = new CanvasJS.Chart("chartContainer",{
			zoomEnabled: true,
			title: {
				text: "Tray Packaging Counter"
			},
			toolTip: {
				shared: true

			},
			legend: {
				verticalAlign: "top",
				horizontalAlign: "center",
                                fontSize: 14,
				fontWeight: "bold",
				fontFamily: "calibri",
				fontColor: "dimGrey"
			},
			axisX: {
				title: "chart updates every 3 secs"
			},
			axisY:{
				includeZero: true
			},
			data: [{
				// dataSeries1
				type: "line",
				xValueType: "dateTime",
				showInLegend: true,
				name: "Trays",
				dataPoints: dataPoints1
			}],
          legend:{
            cursor:"pointer",
            itemclick : function(e) {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              chart.render();
            }
          }
		});



		var updateInterval = 3000;
		// initial value
		var yValue1 = 0;

		var time = new Date(signals[0].time_recieved);

		var updateChart = function (count) {
			count = count || 1;

			// count is number of times loop runs to generate random dataPoints.

			for (var i = 0; i < count; i++) {

				// add interval duration to time
				time.setTime(time.getTime()+ updateInterval);


				// generating random values
				var deltaY1 = .5 + Math.random() *(-.5-.5);
				var deltaY2 = .5 + Math.random() *(-.5-.5);

				// adding random value and rounding it to two digits.
				yValue1 = Math.round((yValue1 + deltaY1)*100)/100;
				yValue2 = Math.round((yValue2 + deltaY2)*100)/100;

				// pushing the new values
				dataPoints1.push({
					x: time.getTime(),
					y: yValue1
				});
				dataPoints2.push({
					x: time.getTime(),
					y: yValue2
				});


			};

			// updating legend text with  updated with y Value
			chart.options.data[0].legendText = " Company A  $" + yValue1;
			chart.options.data[1].legendText = " Company B  $" + yValue2;

			chart.render();

		};

		// generates first set of dataPoints
		updateChart(3000);

		// update chart after specified interval
		setInterval(function(){updateChart()}, updateInterval);
	}
	</script>
	<script type="text/javascript" src="/assets/script/canvasjs.min.js"></script>
</head>
<body>
	<div id="chartContainer" style="height: 300px; width: 100%;">
	</div>
</body>


</html>
