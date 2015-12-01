app.controller("StatisticCtrl", function($scope, $http) 
{
  // var chartData={
  //   "type":"bar",  // Specify your chart type here.
  //   "series":[  // Insert your series data here.
  //       { "values": [35, 42, 67, 89]},
  //       { "values": [28, 40, 39, 36]}
  //   ]
  // };
  // zingchart.render({ // Render Method[3]
  //   id:'chartDiv',
  //   data:chartData,
  //   height:400,
  //   width:600
  // });


	var data_fromServer;


		$http({
		  method: 'GET',
		  url: 'http://127.0.0.1:8080/stat'
		}).then(function successCallback(response) {




	  var chartData={
	      "type":"bar",  // Specify your chart type here.
	      "series":[  // Insert your series data here.
	          { "values": response.data}
	      ]
	    };
	    zingchart.render({ // Render Method[3]
	      id:'chartDiv',
	      data:chartData,
	      height:400,
	      width:"100%"
	    });			





		    console.log(response.data)
		  }, function errorCallback(response) {
		    console.log("Can't get the data!")
		  });



		console.log(data_fromServer);
});
