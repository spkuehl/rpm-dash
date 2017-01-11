google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(loadDoc);

var options = {
  redFrom: 0, redTo: 10,
  yellowFrom:10, yellowTo: 25,
  greenFrom:25, greenTo: 35,
  minorTicks: 5, max: 35,
  majorTicks: ['0','5','10','15','20','25','30','35'],
};
raw_data = [
  ['Label', 'Value'],
  ['Speed', 0],
  ['Average', 0],
];
function drawChart() {
  input_data = google.visualization.arrayToDataTable(raw_data);
  chart = new google.visualization.Gauge(document.getElementById('chart_div'));
  signals = {};
  chart.draw(input_data, options);
}

function loadDoc() {
      drawChart();
}

setInterval(function() {
  $.ajax({
    type: 'GET',
    url: '/signal/',
    data: {},
    dataType: 'json',
    success: function (data) {
      today = new Date();
      signals = data;
      firstSignalDate = new Date(signals[0].time_recieved);
      lastSignalDate = new Date();
      duration = (lastSignalDate - firstSignalDate) / 1000.0 / 60.0;

      fiveRecent = signals.slice(-5);

      firstSigInPeriod = new Date(fiveRecent[0].time_recieved);
      lastSignalTry = new Date();
      test = fiveRecent.length / ((lastSignalTry - firstSigInPeriod) /1000.0 / 60.0)
      test = Number(test.toFixed(1));

      timeDelta = new Date(fiveRecent[4].time_recieved) - new Date(fiveRecent[1].time_recieved);

      console.log((3/((timeDelta/1000.0))*60.0));
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
}, 1000);
