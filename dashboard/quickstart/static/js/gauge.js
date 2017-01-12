google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawChart);

var options = {
  redFrom: 0, redTo: 10,
  yellowFrom:10, yellowTo: 25,
  greenFrom:25, greenTo: 35,
  minorTicks: 5, max: 35,
  majorTicks: ['0','5','10','15','20','25','30','35'],
};

var now = new Date();

function updateChart() {
  $.ajax({
    type: 'GET',
    url: '/signal/',
    data: {},
    dataType: 'json',
    success: function (data) {
      signals = data;
      firstSignalDate = new Date(signals[0].time_recieved);
      duration = (now - firstSignalDate) / 1000.0 / 60.0;
      fiveRecent = signals.slice(-5);
      firstSigInPeriod = new Date(fiveRecent[0].time_recieved);
      lastSignalTry = new Date();
      timeDelta = new Date(fiveRecent[4].time_recieved) - new Date(fiveRecent[1].time_recieved);
      raw_data = [
        ['Label', 'Value'],
        ['Speed', Number((fiveRecent.length / ((new Date() - new Date(fiveRecent[0].time_recieved)) /1000.0 / 60.0)).toFixed(1))],
        ['Average', Number(signals.length / duration).toFixed(1)],
        ['Velocity', Number((3/((timeDelta/1000.0))*60.0)).toFixed(1)],
      ];
      input_data = google.visualization.arrayToDataTable(raw_data);
      chart.draw(input_data, options);
    }
  });
}

function drawChart() {
  chart = new google.visualization.Gauge(document.getElementById('chart_div'));
  updateChart();
}

setInterval(function() {
  updateChart();
}, 1000);
