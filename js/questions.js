app.controller("TestQuestions", function($scope) 
	{
		$scope.questions =
		[
				{
					"id": 1, 
					"question": "Каков уровень Вашей организации?", 
						"answers": [
									{
										"id" : 1,
										"answer":	"Федеральные органы исполнительной власти",
										"isSelected" : 1
									}, 
									{	"id" : 2,
										 "answer": "Региональные органы исполнительной власти",
										 "isSelected" : 1
									}, 
									{	 "id" : 3,
										 "answer": "Местные административные органы управления",
										 "isSelected" : 1
									}, 
									{	 "id" : 4,
										 "answer": "Некоммерческие организации",
										"isSelected" : 0
									}, 
									{	 "id" : 5,
										 "answer": "Частное лицо",
										 "isSelected" : 0
									}, 
									{	 "id" : 6,
										 "answer": "Другое",
										 "isSelected" : 0
									}
								 ],
						"allowMultipleChoice" : true,
						"isEnabled" : true,
						"NowSelected" : 0
				},

				{
					"id": 2, 
					"question": "Какая главная область использования Вами данных ДЗЗ?", "answers": [
																										{
																											"id" : 1,
																											"answer": "Personal",
																											"isSelected" : 0
																										}, 
																										{
																											"id" : 2,
																											"answer": "Goverment",
																											"isSelected" : 0
																										},

																										{
																											"id": 3,
																											"answer": "Organization",
																											"isSelected" : 0
																										}
																									  ],
					"allowMultipleChoice" : true,
					"isEnabled" : true,
					"NowSelected" : 0
				},

				{
					"id": 3, "question": "What is your name?", "answers": [
																			{"id": 1, "answer" : "Dima", "isSelected" : 0}, 
																			{"id": 2, "answer": "Roma", "isSelected" : 0}, 
																			{"id": 3, "answer": "Masha", "isSelected" : 0}],
					"allowMultipleChoice" : false,
					"isEnabled" : true,
					"NowSelected" : 0
				},
				{
					"id": 4, "question": "Where do you live?", "answers": ["Moscow", "London", "Minsk"],
					"isEnabled" : true,
					"NowSelected" : 0
				}
		],

		$scope.maxCheckedValues = 1,

		 //console.log($scope.questions[1].question);
		 // console.log($scope.questions[1].question);

		// $scope.$watchCollection("questions", function(newVal, oldVal)
		// 	{
				

				// if ($scope.maxCheckedValues >1)
				//nowSelected = 0;
		
				// for (var key in $scope.questions)
				// {
				// 	//console.log($scope.questions[key]);
				// 	// if selected more than maxCheckedValues elements we should set all isSelected elements to 0
				// 	if ($scope.questions[key].allowMultipleChoice == true)
				// 		// for(var i in $scope.questions[key].question)
				// 		// {
				// 		// 	console.log(question[i]);
				// 		// }
				// 		// angular.forEach(i, key)
				// 		// {
				// 		// 	console.log(i);
				// 		// }
				// }

				numberOfSelected = 0;
				angular.forEach($scope.questions, function(question)
				{
					angular.forEach(question.answers, function(answer)
					{
						// console.log(answer.isSelected);
							if (answer.isSelected == 2) //if double click
							{
								answer.isSelected == 0 // set back to zero	
								console.log(answer.isSelected);
							}
							
						 if(answer.isSelected == 1)
						 {
						 	numberOfSelected++
						 	if (numberOfSelected >= $scope.maxCheckedValues)
						 		{
						 			angular.forEach(question.answers, function(answer)
									{
										console.log(numberOfSelected);
										/*
										$scope.$watchCollection(answer.isSelected, function(newVal, oldVal)
										{
											if(newVal >= 2)
											{
												answer.isSelected = 0;
												console.log(answer.isSelected);
												console.log(newVal);
											}
										});
										*/
										//console.log(answer.isSelected);
									});
						 		}
						 	// console.log(numberOfSelected);
						 }
						 ///console.log(numberOfSelected);
					});
				});
				//console.log(numberOfSelected);
				

				// angular.forEach($scope.questions, function (question) {
				//     angular.forEach(question.answers, function (answer) {
				//         console.log(answer.isSelected);
				//     });
				// });
				 
			//} // uncomment me!

			//);
	
	});

