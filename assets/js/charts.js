 google.charts.load("visualization", "1", {
      packages: ["corechart"]
    });
    google.charts.setOnLoadCallback(init);


    function drawChart(chartID, heading, known, unknown) {

      var chart = new google.visualization.PieChart(document.getElementById(chartID));
      var data = google.visualization.arrayToDataTable([
        ['Knowledge', 'Out of 10'],
        ['Known', known],
        ['Unknown', unknown]
      ]);
      var options = {
              is3D: true,
        title: heading,
        pieHole: 0.5,
        colors: ['#dc3545', 'white'],
         backgroundColor: 'transparent',
         titleTextStyle: {
    color: '#ffffff',
    fontSize: 12,
               
                
},
         pieSliceBorderColor:"transparent",
        pieSliceText: 'black',
        legend: {
          position: 'none'
        },
        tooltip: {
          text: 'percentage'
        },
        tooltip: {
          textStyle: {
            fontSize: 12
          }
        }
      };

      chart.draw(data, options);
    }

    function centerText(chart, idx, X, Y) {
      var cht = document.querySelector(chart);
      var txt = document.querySelectorAll(chart + " text");
      //var chW = cht.width/2;
      //var chH = cht.height/2;
      //var txW = txt[idx].width/2;
      //var txH = txt[idx].height/2;
      //var W = chW - txW;
      //var H = chH - txH;
      txt[idx].setAttribute('x', X);
      txt[idx].setAttribute('y', Y);
    }

    function init() {
      drawChart('net', 'Networking', 7, 3);
      drawChart('data', 'Databases', 6, 4);
      drawChart('os', 'O.S', 9, 1);
      drawChart('lock', 'Security', 8, 2);
      
    }